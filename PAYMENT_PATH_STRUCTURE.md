# Payment Path Structure

This document explains the payment flow path structure in freetrek-docs, which now matches the tram-han-agarwood reference implementation.

## Overview

The payment flow follows this structure:

```
Customer → Payment Form → VNPay Gateway → Return Handler → Result Page
```

## Path Structure

### API Routes

#### 1. Create Payment: `/api/payment/vnpay/create`
**Location**: `/app/api/payment/vnpay/create/route.ts`

**Purpose**: Creates VNPay payment URL and redirects customer to VNPay gateway

**Method**: POST

**Request**:
```json
{
  "amount": 500000,
  "orderId": "ORDER-123",
  "orderInfo": "Payment for order ORDER-123",
  "locale": "vn",
  "bankCode": "NCB"
}
```

**Response**:
```json
{
  "success": true,
  "paymentUrl": "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html?..."
}
```

**Key Configuration**:
- `returnUrl`: `{origin}/api/vnpay/return` - Where VNPay redirects after payment

#### 2. Return Handler: `/api/vnpay/return`
**Location**: `/app/api/vnpay/return/route.ts`

**Purpose**: Handles VNPay callback, verifies signature, and redirects to result page

**Method**: GET

**Flow**:
1. Receives parameters from VNPay
2. Verifies signature using hash secret
3. Validates payment response
4. Redirects to `/payment/vnpay/result` with status

**VNPay Parameters Received**:
- `vnp_ResponseCode` - Payment status
- `vnp_TxnRef` - Order ID
- `vnp_Amount` - Amount (in VND * 100)
- `vnp_TransactionNo` - VNPay transaction number
- `vnp_BankCode` - Bank code
- `vnp_SecureHash` - Signature for verification

**Redirect Logic**:
```typescript
if (isValid) {
  // Success: redirect with all params
  return NextResponse.redirect('/payment/vnpay/result?vnp_ResponseCode=00&...')
} else {
  // Signature failed: redirect with error 97
  return NextResponse.redirect('/payment/vnpay/result?vnp_ResponseCode=97')
}
```

#### 3. IPN Handler: `/api/vnpay/ipn`
**Location**: `/app/api/vnpay/ipn/route.ts`

**Purpose**: Receives server-to-server notification from VNPay

**Method**: GET

**Important**:
- MUST return HTTP 200 for all responses
- Updates order status in database
- Runs in parallel to return handler

#### 4. Query Transaction: `/api/vnpay/query`
**Location**: `/app/api/vnpay/query/route.ts`

**Purpose**: Query transaction status from VNPay

**Method**: POST

#### 5. Refund: `/api/vnpay/refund`
**Location**: `/app/api/vnpay/refund/route.ts`

**Purpose**: Process payment refunds

**Method**: POST

### Page Routes

#### 1. Checkout Page: `/checkout`
**Location**: `/app/checkout/page.tsx`

**Purpose**: Main checkout page with payment form

**Features**:
- Order summary
- Payment method selection
- VNPaymentForm component

#### 2. Payment Result: `/payment/vnpay/result`
**Location**: `/app/payment/vnpay/result/page.tsx`

**Purpose**: Displays payment result to customer

**Query Parameters**:
- `vnp_ResponseCode` - Payment status code
- `vnp_TxnRef` - Order ID
- `vnp_Amount` - Payment amount
- `vnp_TransactionNo` - Transaction number
- `vnp_BankCode` - Bank code

**Response Codes**:
- `00` - Success
- `97` - Invalid signature
- `99` - System error
- Others - Various error codes (see PAYMENT_INTEGRATION_GUIDE.md)

## Complete Payment Flow

### Step-by-Step Flow

```
1. Customer on Checkout Page
   └─> /checkout

2. Customer clicks "Pay with VNPay"
   └─> POST /api/payment/vnpay/create
       └─> Returns payment URL

3. Customer redirected to VNPay Gateway
   └─> https://sandbox.vnpayment.vn/paymentv2/vpcpay.html?...

4. Customer completes payment at VNPay

5. VNPay redirects customer back
   └─> GET /api/vnpay/return?vnp_ResponseCode=00&...
       └─> Verifies signature
       └─> Redirects to result page

6. Customer sees result
   └─> /payment/vnpay/result?vnp_ResponseCode=00&...

Parallel to step 5:
5a. VNPay sends IPN notification
    └─> GET /api/vnpay/ipn?vnp_ResponseCode=00&...
        └─> Updates database
        └─> Returns { RspCode: "00", Message: "Success" }
```

## Path Comparison

### Before (Old Structure)
```
POST   /api/vnpay/create-payment  ❌
GET    /api/vnpay/return           ✅
GET    /api/vnpay/ipn              ✅
POST   /api/vnpay/query            ✅
POST   /api/vnpay/refund           ✅
PAGE   /payment/vnpay/result       ✅
```

### After (New Structure - Matches tram-han-agarwood)
```
POST   /api/payment/vnpay/create   ✅ NEW
POST   /api/vnpay/create-payment   ✅ LEGACY (Keep for compatibility)
GET    /api/vnpay/return           ✅
GET    /api/vnpay/ipn              ✅
POST   /api/vnpay/query            ✅
POST   /api/vnpay/refund           ✅
PAGE   /payment/vnpay/result       ✅
```

## Key Differences from tram-han-agarwood

### Similarities ✅
- Both use `/api/payment/vnpay/create` for creating payment
- Both use `/api/vnpay/return` for VNPay callback
- Both redirect to `/payment/vnpay/result` for final display
- Both have query and refund endpoints
- Both have IPN handler

### Differences
- **freetrek-docs**: Also maintains `/api/vnpay/create-payment` for backward compatibility
- **tram-han-agarwood**: Has additional `/payment/vnpay/return` page (not API route)

## Environment Variables

Required environment variables in `.env`:

```bash
# VNPay Configuration
VNPAY_TMN_CODE=your_merchant_code
VNPAY_HASH_SECRET=your_hash_secret
VNPAY_URL=https://sandbox.vnpayment.vn/paymentv2/vpcpay.html
VNPAY_API=https://sandbox.vnpayment.vn/merchant_webapi/api/transaction

# For production:
# VNPAY_URL=https://vnpayment.vn/paymentv2/vpcpay.html
# VNPAY_API=https://vnpayment.vn/merchant_webapi/api/transaction
```

## Component Usage

### VNPaymentForm Component

**Location**: `/components/payment/VNPaymentForm.tsx`

**Updated to use new path**:
```typescript
const response = await fetch("/api/payment/vnpay/create", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    amount: order.total,
    orderId: order.id,
    orderInfo: `Payment for order ${order.id}`,
    locale: "vn"
  })
})
```

## Testing

### 1. Test Payment Creation
```bash
curl -X POST http://localhost:3000/api/payment/vnpay/create \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 500000,
    "orderId": "TEST-123",
    "orderInfo": "Test payment"
  }'
```

### 2. Test Return URL (manually)
```
http://localhost:3000/api/vnpay/return?vnp_ResponseCode=00&vnp_TxnRef=TEST-123&...
```

### 3. Test Result Page
```
http://localhost:3000/payment/vnpay/result?vnp_ResponseCode=00&vnp_TxnRef=TEST-123&vnp_Amount=50000000
```

## Migration Notes

If you were using the old `/api/vnpay/create-payment` path:

1. **Update your payment form component**:
   ```typescript
   // Old
   fetch("/api/vnpay/create-payment", ...)

   // New
   fetch("/api/payment/vnpay/create", ...)
   ```

2. **No changes needed for**:
   - Return handler
   - IPN handler
   - Result page
   - Query/Refund endpoints

3. **Legacy support**:
   - Old path `/api/vnpay/create-payment` still works
   - Consider migrating to new path for consistency

## Debugging

### Enable Debug Logging

The return handler includes debug logging:

```typescript
console.log('📋 VNPay params received:', {...})
console.log('🔐 Signature Verification Debug:', {...})
console.log('🔔 VNPay Return Callback:', {...})
console.log('✅ VNPay signature verified successfully')
```

### Check Logs

Look for these indicators:
- ✅ Success: `isValid: true`
- ❌ Failure: `isValid: false`
- Response codes in logs

## Security Considerations

1. **Signature Verification**: Always verify VNPay signature in return handler
2. **IPN Validation**: Verify all IPN calls before updating database
3. **HTTPS Only**: Use HTTPS in production
4. **Hash Secret**: Never expose `VNPAY_HASH_SECRET`
5. **Idempotency**: Prevent duplicate IPN processing

## Additional Resources

- [PAYMENT_INTEGRATION_GUIDE.md](./PAYMENT_INTEGRATION_GUIDE.md) - Complete integration guide
- [VNPAY_SIGNATURE_FIX.md](./VNPAY_SIGNATURE_FIX.md) - Signature verification fix details
- [VNPay Documentation](https://sandbox.vnpayment.vn/apis/docs/)

---

**Last Updated**: January 11, 2025
**Version**: 2.0.0 (Aligned with tram-han-agarwood)

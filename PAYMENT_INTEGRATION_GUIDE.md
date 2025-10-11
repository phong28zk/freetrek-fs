# FreeTrek Payment Integration Guide

## Overview

This guide explains how to integrate VNPay payment gateway into your FreeTrek application, based on the official VNPay Node.js SDK implementation.

## Table of Contents

1. [Architecture](#architecture)
2. [Setup & Configuration](#setup--configuration)
3. [API Routes](#api-routes)
4. [Components](#components)
5. [Payment Flow](#payment-flow)
6. [Testing](#testing)
7. [Production Checklist](#production-checklist)

## Architecture

### Directory Structure

```
freetrek-docs/
├── app/
│   ├── api/
│   │   └── vnpay/
│   │       ├── create-payment/route.ts  # Create payment URL
│   │       ├── return/route.ts          # Handle customer return
│   │       ├── ipn/route.ts             # Handle VNPay IPN
│   │       ├── query/route.ts           # Query transaction status
│   │       └── refund/route.ts          # Process refunds
│   ├── checkout/
│   │   └── page.tsx                     # Checkout page
│   └── payment/
│       └── vnpay/
│           └── result/page.tsx          # Payment result page
├── components/
│   └── payment/
│       └── VNPaymentForm.tsx            # Payment form component
├── lib/
│   └── vnpay.ts                         # VNPay utility functions
└── types/
    └── vnpay.ts                         # TypeScript types
```

## Setup & Configuration

### 1. Environment Variables

Create or update your `.env` file with VNPay credentials:

```bash
# VNPay Configuration
VNPAY_TMN_CODE=your_merchant_code
VNPAY_HASH_SECRET=your_hash_secret
VNPAY_URL=https://sandbox.vnpayment.vn/paymentv2/vpcpay.html
VNPAY_API=https://sandbox.vnpayment.vn/merchant_webapi/api/transaction

# For production, use:
# VNPAY_URL=https://vnpayment.vn/paymentv2/vpcpay.html
# VNPAY_API=https://vnpayment.vn/merchant_webapi/api/transaction
```

### 2. Install Dependencies

```bash
npm install qs crypto
npm install -D @types/qs
```

### 3. VNPay Test Credentials

For sandbox testing, use these credentials:
- **TMN Code**: `DEMO` (or register at VNPay sandbox)
- **Hash Secret**: Provided by VNPay
- **Test Cards**: Available in VNPay documentation

## API Routes

### 1. Create Payment (`/api/vnpay/create-payment`)

**Purpose**: Generate VNPay payment URL

**Request**:
```typescript
POST /api/vnpay/create-payment
Content-Type: application/json

{
  "amount": 500000,        // Amount in VND
  "orderId": "ORDER123",   // Your order ID
  "orderInfo": "Payment for order ORDER123",
  "language": "vn",        // Optional: "vn" or "en"
  "bankCode": "NCB"       // Optional: Bank code
}
```

**Response**:
```json
{
  "success": true,
  "paymentUrl": "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html?...",
  "orderId": "ORDER123"
}
```

### 2. Return Handler (`/api/vnpay/return`)

**Purpose**: Handle customer return from VNPay

This is a GET endpoint that VNPay redirects customers to after payment. It:
- Verifies the signature
- Redirects to result page with transaction info

**VNPay calls this with params**:
```
?vnp_ResponseCode=00&vnp_TxnRef=ORDER123&vnp_Amount=50000000&...
```

### 3. IPN Handler (`/api/vnpay/ipn`)

**Purpose**: Receive payment notifications from VNPay server

**Important**:
- This endpoint MUST return HTTP 200 for all responses
- VNPay expects specific response codes
- Implement database updates here

**Response Format**:
```json
{
  "RspCode": "00",
  "Message": "Success"
}
```

**Response Codes**:
- `00`: Success
- `01`: Order not found
- `02`: Order already processed
- `04`: Invalid amount
- `97`: Invalid signature
- `99`: Unknown error

### 4. Query Transaction (`/api/vnpay/query`)

**Purpose**: Query transaction status from VNPay

**Request**:
```typescript
POST /api/vnpay/query
Content-Type: application/json

{
  "orderId": "ORDER123",
  "transDate": "20250110120000"  // Format: YYYYMMDDHHmmss
}
```

### 5. Refund (`/api/vnpay/refund`)

**Purpose**: Process refund for a transaction

**Request**:
```typescript
POST /api/vnpay/refund
Content-Type: application/json

{
  "orderId": "ORDER123",
  "transDate": "20250110120000",
  "amount": 500000,
  "transType": "02",              // "02" = full, "03" = partial
  "user": "admin",                // Who initiated refund
  "transactionNo": "14012345"     // Optional: VNPay transaction number
}
```

## Components

### VNPaymentForm Component

Located at: `components/payment/VNPaymentForm.tsx`

**Usage**:
```tsx
import { VNPaymentForm } from "@/components/payment/VNPaymentForm"

function CheckoutPage() {
  const order = {
    id: "ORDER123",
    total: 500000,
    items: [...]
  }

  return (
    <VNPaymentForm
      order={order}
      onPaymentComplete={(result) => {
        console.log("Payment completed:", result)
      }}
      onPaymentError={(error) => {
        console.error("Payment error:", error)
      }}
    />
  )
}
```

**Features**:
- Multiple payment method display (VNPay, MoMo, ZaloPay)
- Loading states
- Error handling
- Responsive design
- Dark mode support

## Payment Flow

### Standard Payment Flow

```
1. Customer clicks "Pay with VNPay"
   ↓
2. Frontend calls POST /api/vnpay/create-payment
   ↓
3. Backend creates payment URL with signature
   ↓
4. Customer redirected to VNPay gateway
   ↓
5. Customer completes payment at VNPay
   ↓
6. VNPay redirects to /api/vnpay/return
   ↓
7. Backend verifies signature
   ↓
8. Customer redirected to /payment/vnpay/result
   ↓
9. Display payment result to customer

Parallel:
VNPay → POST /api/vnpay/ipn → Update order in database
```

### IPN (Server-to-Server) Flow

```
1. Customer completes payment
   ↓
2. VNPay sends IPN to /api/vnpay/ipn
   ↓
3. Verify signature
   ↓
4. Check order exists & amount matches
   ↓
5. Update payment status in database
   ↓
6. Return RspCode to VNPay
```

## Testing

### 1. Testing with Sandbox

**Test Cards** (refer to VNPay documentation for latest):
- **Bank**: NCB
- **Card Number**: 9704198526191432198
- **Card Holder**: NGUYEN VAN A
- **Issue Date**: 07/15
- **OTP**: 123456

### 2. Test Payment Flow

```bash
# 1. Start your development server
npm run dev

# 2. Navigate to checkout
http://localhost:3000/checkout

# 3. Click "Pay with VNPay"

# 4. Use test card details

# 5. Complete payment

# 6. Check result page
```

### 3. Testing IPN

You can test IPN locally using:
- **ngrok**: Expose your local server
- **Postman**: Simulate IPN calls

Example IPN request:
```bash
curl -X GET "http://localhost:3000/api/vnpay/ipn?\
vnp_Amount=50000000&\
vnp_BankCode=NCB&\
vnp_ResponseCode=00&\
vnp_TxnRef=ORDER123&\
vnp_SecureHash=..."
```

### 4. Test Query & Refund

Use the provided API routes:

```typescript
// Query transaction
const response = await fetch('/api/vnpay/query', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    orderId: 'ORDER123',
    transDate: '20250110120000'
  })
})

// Process refund
const response = await fetch('/api/vnpay/refund', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    orderId: 'ORDER123',
    transDate: '20250110120000',
    amount: 500000,
    transType: '02',
    user: 'admin'
  })
})
```

## Production Checklist

### Before Going Live

- [ ] Update environment variables to production values
- [ ] Change VNPay URLs from sandbox to production
- [ ] Implement proper database integration in IPN handler
- [ ] Set up error logging and monitoring
- [ ] Test all payment scenarios thoroughly
- [ ] Implement order status tracking
- [ ] Set up email notifications
- [ ] Configure proper CORS if needed
- [ ] Implement rate limiting
- [ ] Set up backup & recovery procedures
- [ ] Test refund process
- [ ] Verify webhook/IPN endpoint is accessible
- [ ] Check timezone settings (Asia/Ho_Chi_Minh)

### Security Considerations

1. **Never expose secrets**: Keep `VNPAY_HASH_SECRET` secure
2. **Validate signatures**: Always verify VNPay signatures
3. **Use HTTPS**: Ensure all endpoints use HTTPS in production
4. **Validate amounts**: Double-check amounts match before processing
5. **Idempotency**: Prevent duplicate processing of IPN calls
6. **Logging**: Log all transactions for audit trail
7. **Error handling**: Don't expose sensitive info in error messages

### Database Integration

The IPN handler includes TODOs for database integration. Implement these functions:

```typescript
// Check if order exists
const checkOrderExists = async (orderId: string): Promise<boolean> => {
  // Your implementation
}

// Verify order amount
const verifyOrderAmount = async (orderId: string, amount: number): Promise<boolean> => {
  // Your implementation
}

// Get payment status
const getPaymentStatus = async (orderId: string): Promise<string> => {
  // Your implementation
  // Return: '0' = pending, '1' = success, '2' = failed
}

// Update payment status
const updatePaymentStatus = async (orderId: string, data: any): Promise<void> => {
  // Your implementation
}
```

## Response Codes Reference

### VNPay Response Codes (`vnp_ResponseCode`)

| Code | Meaning |
|------|---------|
| 00 | Transaction successful |
| 07 | Suspicious transaction |
| 09 | Card not registered for internet banking |
| 10 | Authentication failed (exceeded attempts) |
| 11 | Payment timeout |
| 12 | Card is locked |
| 13 | Wrong OTP |
| 24 | Customer cancelled transaction |
| 51 | Insufficient balance |
| 65 | Daily transaction limit exceeded |
| 75 | Bank under maintenance |
| 79 | Wrong password (exceeded attempts) |
| 97 | Invalid signature |
| 99 | Unknown error |

## Support

### VNPay Documentation
- Sandbox: https://sandbox.vnpayment.vn/apis/docs/
- Production: https://vnpay.vn

### Common Issues

1. **Invalid Signature**: Check hash secret and parameter sorting
2. **Timezone Issues**: Ensure timezone is set to Asia/Ho_Chi_Minh
3. **IPN Not Received**: Check firewall and make endpoint accessible
4. **Amount Mismatch**: Remember to multiply by 100 for VNPay format

## Example Implementation

See:
- `/app/checkout/page.tsx` - Full checkout page example
- `/components/payment/VNPaymentForm.tsx` - Payment form component
- `/app/payment/vnpay/result/page.tsx` - Result page

## Additional Features

### Bank Selection

Add specific bank codes for direct bank payment:

```typescript
const bankCodes = [
  { code: 'NCB', name: 'Ngân hàng NCB' },
  { code: 'VIETCOMBANK', name: 'Vietcombank' },
  { code: 'BIDV', name: 'BIDV' },
  { code: 'TECHCOMBANK', name: 'Techcombank' },
  // ... more banks
]
```

### QR Code Payment

VNPay supports QR code payments. Customer can scan QR at bank app instead of entering card details.

### Recurring Payments

For subscription services, implement VNPay's recurring payment feature (separate integration required).

---

**Last Updated**: January 2025
**Version**: 1.0.0

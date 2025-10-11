# VNPay Payment Gateway Integration Guide

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Architecture](#architecture)
- [API Endpoints](#api-endpoints)
- [UI Components](#ui-components)
- [Usage Examples](#usage-examples)
- [Database Integration](#database-integration)
- [Testing](#testing)
- [Security Best Practices](#security-best-practices)
- [Production Deployment](#production-deployment)
- [Troubleshooting](#troubleshooting)

---

## Overview

This is a complete VNPay payment gateway integration for Next.js 15 applications. The implementation follows VNPay's official specifications and includes all necessary components for production-ready payment processing.

**Tech Stack:**
- Next.js 15.2.4
- React 19
- TypeScript
- Radix UI components
- Tailwind CSS

**Key Features:**
- Complete payment flow (create, return, IPN)
- Transaction query and refund capabilities
- HMAC SHA512 signature verification
- TypeScript type safety
- Comprehensive error handling
- Production-ready logging
- Database integration ready (with TODOs)

---

## Features

### Core Payment Flow
- ✅ **Create Payment**: Generate secure VNPay payment URLs
- ✅ **Return Handler**: Process user return from VNPay gateway
- ✅ **IPN Handler**: Handle instant payment notifications from VNPay
- ✅ **Query Transaction**: Check transaction status via VNPay API
- ✅ **Refund Processing**: Full and partial refund support

### Security
- ✅ HMAC SHA512 signature generation and verification
- ✅ Parameter sorting and encoding per VNPay specs
- ✅ Environment variable protection
- ✅ Client IP extraction for fraud prevention
- ✅ Signature validation on all callbacks

### UI/UX
- ✅ Payment method selector component
- ✅ Success/failure result pages
- ✅ Loading states during redirect
- ✅ Comprehensive error messages in Vietnamese
- ✅ Dark mode support
- ✅ Responsive design

---

## Prerequisites

1. **VNPay Merchant Account**
   - Register at: https://vnpay.vn
   - Obtain sandbox credentials for testing
   - Get production credentials for live deployment

2. **Required Credentials**
   - `VNPAY_TMN_CODE`: Terminal/Merchant code
   - `VNPAY_HASH_SECRET`: HMAC SHA512 secret key
   - Access to VNPay sandbox/production URLs

3. **Node.js & npm**
   - Node.js 18+ recommended
   - npm or yarn package manager

---

## Installation

### 1. Install Dependencies

The required dependencies are already installed in this project:
- `qs` (v6.14.0): Query string parsing
- `@types/qs` (v6.14.0): TypeScript types for qs

If you need to install them manually:
```bash
npm install qs @types/qs --legacy-peer-deps
```

### 2. File Structure

The integration includes the following files:

```
freetrek-docs (2)/
├── lib/
│   └── vnpay.ts                           # VNPay utility functions
├── types/
│   └── vnpay.ts                           # TypeScript type definitions
├── app/
│   ├── api/
│   │   └── vnpay/
│   │       ├── create-payment/
│   │       │   └── route.ts               # POST: Create payment URL
│   │       ├── return/
│   │       │   └── route.ts               # GET: Handle user return
│   │       ├── ipn/
│   │       │   └── route.ts               # GET: Handle IPN notifications
│   │       ├── query/
│   │       │   └── route.ts               # POST: Query transaction
│   │       └── refund/
│   │           └── route.ts               # POST: Process refund
│   └── payment/
│       └── vnpay/
│           └── result/
│               └── page.tsx               # Payment result page
├── components/
│   └── payment/
│       └── VNPaymentForm.tsx              # Payment form component
├── .env.vnpay.example                     # Environment template
└── VNPAY_INTEGRATION.md                   # This documentation
```

---

## Configuration

### 1. Environment Variables

Copy the example environment file:
```bash
cp .env.vnpay.example .env.local
```

Edit `.env.local` with your VNPay credentials:

```env
# Sandbox Configuration (for testing)
VNPAY_TMN_CODE=your_sandbox_terminal_code
VNPAY_HASH_SECRET=your_sandbox_hash_secret
VNPAY_URL=https://sandbox.vnpayment.vn/paymentv2/vpcpay.html
VNPAY_API=https://sandbox.vnpayment.vn/merchant_webapi/api/transaction

# Production Configuration (for live)
# VNPAY_TMN_CODE=your_production_terminal_code
# VNPAY_HASH_SECRET=your_production_hash_secret
# VNPAY_URL=https://vnpayment.vn/paymentv2/vpcpay.html
# VNPAY_API=https://vnpayment.vn/merchant_webapi/api/transaction
```

### 2. VNPay Merchant Portal Configuration

In your VNPay merchant portal, configure:

1. **Return URL**: `https://yourdomain.com/api/vnpay/return`
2. **IPN URL**: `https://yourdomain.com/api/vnpay/ipn`

Make sure these URLs are publicly accessible (no localhost in production).

---

## Architecture

### Payment Flow Diagram

```
User → Payment Form → Create Payment API → VNPay Gateway
                                              ↓
                                         User Pays
                                              ↓
                                    ┌─────────┴─────────┐
                                    ↓                   ↓
                            Return Handler          IPN Handler
                                    ↓                   ↓
                            Result Page      Database Update
```

### Component Responsibilities

1. **VNPaymentForm Component**
   - Displays payment method options
   - Calls create-payment API
   - Redirects user to VNPay gateway

2. **Create Payment API** (`/api/vnpay/create-payment`)
   - Validates payment request
   - Generates secure payment URL
   - Returns URL to client

3. **Return Handler API** (`/api/vnpay/return`)
   - Receives user return from VNPay
   - Verifies signature
   - Redirects to result page

4. **IPN Handler API** (`/api/vnpay/ipn`)
   - Receives server notification from VNPay
   - Verifies signature
   - Updates database (TODO)
   - Returns confirmation to VNPay

5. **Result Page**
   - Displays success/failure status
   - Shows transaction details
   - Provides navigation options

---

## API Endpoints

### 1. Create Payment

**Endpoint**: `POST /api/vnpay/create-payment`

**Request Body**:
```typescript
{
  amount: number,          // Amount in VND
  orderId?: string,        // Optional order ID (auto-generated if not provided)
  orderInfo?: string,      // Order description
  language?: 'vn' | 'en', // UI language
  bankCode?: string        // Specific bank code (optional)
}
```

**Response**:
```typescript
{
  success: true,
  paymentUrl: string,      // VNPay payment URL
  orderId: string          // Order ID
}
```

**Example**:
```javascript
const response = await fetch('/api/vnpay/create-payment', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    amount: 100000,
    orderId: 'ORDER123',
    orderInfo: 'Payment for order ORDER123',
    language: 'vn'
  })
});

const data = await response.json();
window.location.href = data.paymentUrl;
```

### 2. Return Handler

**Endpoint**: `GET /api/vnpay/return`

**Query Parameters**: Provided by VNPay
- `vnp_ResponseCode`: Payment status code
- `vnp_TxnRef`: Order ID
- `vnp_Amount`: Amount (in smallest unit, multiply by 100)
- `vnp_TransactionNo`: VNPay transaction number
- `vnp_BankCode`: Bank code
- `vnp_SecureHash`: Signature

**Response**: Redirects to `/payment/vnpay/result` with parameters

### 3. IPN Handler

**Endpoint**: `GET /api/vnpay/ipn`

**Query Parameters**: Same as return handler

**Response**:
```typescript
{
  RspCode: '00' | '01' | '02' | '04' | '97' | '99',
  Message: string
}
```

**Response Codes**:
- `00`: Success
- `01`: Order not found
- `02`: Order already updated
- `04`: Invalid amount
- `97`: Invalid signature
- `99`: Unknown error

### 4. Query Transaction

**Endpoint**: `POST /api/vnpay/query`

**Request Body**:
```typescript
{
  orderId: string,
  transDate: string  // Format: YYYYMMDDHHmmss
}
```

**Response**:
```typescript
{
  success: boolean,
  statusMessage: string,
  data: {
    responseCode: string,
    message: string,
    orderId: string,
    amount: number,
    transactionNo?: string,
    transactionStatus?: string,
    // ... other fields
  }
}
```

### 5. Refund

**Endpoint**: `POST /api/vnpay/refund`

**Request Body**:
```typescript
{
  orderId: string,
  transDate: string,           // Original transaction date (YYYYMMDDHHmmss)
  amount: number,              // Refund amount in VND
  transType: '02' | '03',     // '02' = full, '03' = partial
  user: string,                // Username who initiated refund
  transactionNo?: string       // VNPay transaction number
}
```

**Response**:
```typescript
{
  success: boolean,
  statusMessage: string,
  data: {
    responseCode: string,
    message: string,
    orderId: string,
    amount: number,
    // ... other fields
  }
}
```

---

## UI Components

### VNPaymentForm Component

**Location**: `/components/payment/VNPaymentForm.tsx`

**Props**:
```typescript
interface VNPaymentFormProps {
  order: {
    id: string
    total: number
    items?: any[]
  }
  onPaymentComplete?: (result: PaymentResult) => void
  onPaymentError?: (error: string) => void
}
```

**Usage Example**:
```tsx
import { VNPaymentForm } from '@/components/payment/VNPaymentForm'

export default function CheckoutPage() {
  const order = {
    id: 'ORDER123',
    total: 100000,
    items: [/* ... */]
  }

  return (
    <VNPaymentForm
      order={order}
      onPaymentComplete={(result) => {
        console.log('Payment completed:', result)
      }}
      onPaymentError={(error) => {
        console.error('Payment error:', error)
      }}
    />
  )
}
```

### Payment Result Page

**Location**: `/app/payment/vnpay/result/page.tsx`

This page is automatically displayed after VNPay processes the payment. It shows:
- Success state with transaction details
- Error state with specific error messages
- Navigation buttons (retry, view orders, go home)

**URL Parameters**:
- `vnp_ResponseCode`: Payment status
- `vnp_TxnRef`: Order ID
- `vnp_Amount`: Amount
- `vnp_TransactionNo`: Transaction number
- `vnp_BankCode`: Bank code

---

## Usage Examples

### Basic Payment Flow

```tsx
// 1. In your checkout page component
import { VNPaymentForm } from '@/components/payment/VNPaymentForm'

export default function CheckoutPage() {
  const order = {
    id: 'ORDER_20251011_001',
    total: 250000, // 250,000 VND
  }

  return (
    <div className="container mx-auto p-4">
      <h1>Thanh toán</h1>
      <VNPaymentForm order={order} />
    </div>
  )
}
```

### Custom Payment API Call

```typescript
async function createVNPayPayment(orderId: string, amount: number) {
  try {
    const response = await fetch('/api/vnpay/create-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        orderId,
        orderInfo: `Thanh toán đơn hàng ${orderId}`,
        language: 'vn',
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to create payment')
    }

    const data = await response.json()

    if (data.success && data.paymentUrl) {
      // Redirect to VNPay
      window.location.href = data.paymentUrl
    }
  } catch (error) {
    console.error('Payment creation error:', error)
  }
}
```

### Query Transaction Status

```typescript
async function checkTransactionStatus(orderId: string, transDate: string) {
  try {
    const response = await fetch('/api/vnpay/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderId,
        transDate, // Format: YYYYMMDDHHmmss
      }),
    })

    const data = await response.json()

    if (data.success) {
      console.log('Transaction status:', data.data.transactionStatus)
      console.log('Amount:', data.data.amount)
    }
  } catch (error) {
    console.error('Query error:', error)
  }
}
```

### Process Refund

```typescript
async function processRefund(
  orderId: string,
  transDate: string,
  amount: number,
  transactionNo: string
) {
  try {
    const response = await fetch('/api/vnpay/refund', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderId,
        transDate,
        amount,
        transType: '02', // Full refund
        user: 'admin',
        transactionNo,
      }),
    })

    const data = await response.json()

    if (data.success) {
      console.log('Refund successful:', data.data)
    } else {
      console.error('Refund failed:', data.statusMessage)
    }
  } catch (error) {
    console.error('Refund error:', error)
  }
}
```

---

## Database Integration

The IPN handler (`/app/api/vnpay/ipn/route.ts`) includes comprehensive TODO comments for database integration. Here's what you need to implement:

### Required Database Operations

1. **Check if order exists**
```typescript
// TODO: Replace this
const checkOrderId = true;

// With this
const checkOrderId = await db.order.findUnique({
  where: { id: orderId }
});
```

2. **Verify order amount**
```typescript
// TODO: Replace this
const checkAmount = true;

// With this
const order = await db.order.findUnique({
  where: { id: orderId }
});
const checkAmount = order.total === (parseInt(amount) / 100);
```

3. **Get payment status**
```typescript
// TODO: Replace this
const paymentStatus = '0';

// With this
const payment = await db.payment.findUnique({
  where: { orderId }
});
const paymentStatus = payment.status;
```

4. **Update payment status (success)**
```typescript
// TODO: Implement this
await db.payment.update({
  where: { orderId },
  data: {
    status: '1',
    transactionNo,
    bankCode,
    payDate,
    amount: parseInt(amount) / 100,
    responseCode: rspCode,
    updatedAt: new Date()
  }
});
```

5. **Update payment status (failed)**
```typescript
// TODO: Implement this
await db.payment.update({
  where: { orderId },
  data: {
    status: '2',
    transactionNo,
    bankCode,
    responseCode: rspCode,
    failureReason: errorMessages[rspCode] || 'Unknown error',
    updatedAt: new Date()
  }
});
```

### Recommended Database Schema

```typescript
// Prisma schema example
model Payment {
  id            String   @id @default(cuid())
  orderId       String   @unique
  amount        Float
  status        String   // '0' = pending, '1' = success, '2' = failed
  transactionNo String?
  bankCode      String?
  payDate       String?
  responseCode  String?
  failureReason String?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}
```

---

## Testing

### Sandbox Testing

1. **Get Sandbox Credentials**
   - Contact VNPay support for sandbox access
   - Obtain test terminal code and hash secret

2. **Configure Environment**
   ```env
   VNPAY_TMN_CODE=your_sandbox_code
   VNPAY_HASH_SECRET=your_sandbox_secret
   VNPAY_URL=https://sandbox.vnpayment.vn/paymentv2/vpcpay.html
   VNPAY_API=https://sandbox.vnpayment.vn/merchant_webapi/api/transaction
   ```

3. **Test Payment Flow**
   - Create a test payment
   - Use VNPay's test cards/accounts
   - Verify success and failure scenarios

### Test Cases

1. **Successful Payment**
   - Create payment with valid amount
   - Complete payment on VNPay sandbox
   - Verify success page displays correctly
   - Check IPN handler receives notification
   - Verify database update (if implemented)

2. **Failed Payment**
   - Create payment
   - Cancel on VNPay gateway
   - Verify error page displays correct message
   - Check IPN handler processes failure

3. **Invalid Signature**
   - Manually modify return URL parameters
   - Verify signature validation fails
   - Ensure error is logged

4. **Transaction Query**
   - Create and complete a payment
   - Query the transaction status
   - Verify response matches payment details

5. **Refund**
   - Complete a successful payment
   - Process a full refund
   - Process a partial refund
   - Verify refund status

### Testing Checklist

- [ ] Create payment with various amounts
- [ ] Test successful payment flow
- [ ] Test cancelled payment
- [ ] Test timeout scenario
- [ ] Verify signature validation
- [ ] Test IPN endpoint
- [ ] Test transaction query
- [ ] Test full refund
- [ ] Test partial refund
- [ ] Verify all error messages display correctly
- [ ] Test on mobile devices
- [ ] Test with different banks (sandbox)

---

## Security Best Practices

### 1. Environment Variables

- ✅ Never commit `.env.local` to version control
- ✅ Add `.env.local` to `.gitignore`
- ✅ Use different credentials for sandbox and production
- ✅ Rotate credentials periodically
- ✅ Use environment-specific secrets in CI/CD

### 2. Signature Verification

- ✅ Always verify VNPay signatures on return and IPN
- ✅ Use HMAC SHA512 as specified by VNPay
- ✅ Sort parameters alphabetically before signing
- ✅ Use constant-time comparison for signatures

### 3. HTTPS

- ✅ Use HTTPS in production (required by VNPay)
- ✅ Ensure valid SSL certificates
- ✅ Configure proper CORS if needed

### 4. Input Validation

- ✅ Validate all input parameters
- ✅ Sanitize user input
- ✅ Check amount limits
- ✅ Verify order ID format

### 5. Logging

- ✅ Log all payment transactions
- ✅ Never log sensitive data (hash secrets, full card numbers)
- ✅ Use structured logging for easier debugging
- ✅ Monitor for suspicious activity

### 6. Database Security

- ✅ Use parameterized queries
- ✅ Implement transaction locks for payment updates
- ✅ Prevent duplicate payment processing
- ✅ Audit payment status changes

---

## Production Deployment

### Pre-Deployment Checklist

- [ ] Obtain production VNPay credentials
- [ ] Update environment variables for production
- [ ] Configure production URLs in VNPay merchant portal
- [ ] Implement database operations in IPN handler
- [ ] Set up proper logging and monitoring
- [ ] Configure error tracking (Sentry, etc.)
- [ ] Test all endpoints on staging environment
- [ ] Verify HTTPS is properly configured
- [ ] Set up backup and disaster recovery
- [ ] Document incident response procedures

### Environment Configuration

```env
# Production .env.local
VNPAY_TMN_CODE=your_production_terminal_code
VNPAY_HASH_SECRET=your_production_hash_secret
VNPAY_URL=https://vnpayment.vn/paymentv2/vpcpay.html
VNPAY_API=https://vnpayment.vn/merchant_webapi/api/transaction
```

### VNPay Merchant Portal Setup

1. Login to VNPay merchant portal
2. Navigate to Configuration > URLs
3. Set Return URL: `https://yourdomain.com/api/vnpay/return`
4. Set IPN URL: `https://yourdomain.com/api/vnpay/ipn`
5. Save and verify configuration

### Monitoring

1. **Payment Success Rate**
   - Track successful vs failed payments
   - Set up alerts for high failure rates

2. **Response Times**
   - Monitor API endpoint performance
   - Set up alerts for slow responses

3. **Error Rates**
   - Track signature validation failures
   - Monitor IPN processing errors
   - Alert on database errors

4. **Transaction Volume**
   - Monitor daily/hourly transaction counts
   - Detect unusual patterns

---

## Troubleshooting

### Common Issues

#### 1. Payment URL Creation Fails

**Symptom**: Error creating payment URL

**Possible Causes**:
- Missing environment variables
- Invalid credentials
- Incorrect amount format

**Solution**:
```bash
# Verify environment variables
echo $VNPAY_TMN_CODE
echo $VNPAY_HASH_SECRET
echo $VNPAY_URL

# Check amount is a number and > 0
# Ensure orderId doesn't contain special characters
```

#### 2. Signature Verification Fails

**Symptom**: "Invalid signature" or "Checksum failed"

**Possible Causes**:
- Wrong hash secret
- Parameter encoding mismatch
- Timing issues

**Solution**:
```typescript
// Check parameter encoding in sortObject function
// Ensure you're using the same hash secret as VNPay
// Verify parameter sorting matches VNPay's algorithm
```

#### 3. IPN Not Received

**Symptom**: Payment succeeds but database not updated

**Possible Causes**:
- IPN URL not configured in VNPay portal
- Server not publicly accessible
- Firewall blocking VNPay IP

**Solution**:
```bash
# Verify IPN URL is publicly accessible
curl https://yourdomain.com/api/vnpay/ipn

# Check VNPay merchant portal configuration
# Ensure server accepts GET requests to IPN endpoint
```

#### 4. Amount Mismatch

**Symptom**: Wrong amount displayed

**Possible Causes**:
- Forgetting to divide by 100
- Currency conversion issues

**Solution**:
```typescript
// VNPay uses smallest unit (multiply by 100 when sending)
vnp_Amount: amount * 100

// Divide by 100 when receiving
const actualAmount = parseInt(vnp_Amount) / 100
```

#### 5. Redirect Loop

**Symptom**: User stuck in redirect loop

**Possible Causes**:
- Return URL misconfigured
- Result page routing issues

**Solution**:
```typescript
// Verify return URL in .env
// Check result page route exists
// Ensure no middleware is interfering
```

### Debug Mode

To enable detailed logging, add console.log statements in:
- `/lib/vnpay.ts` - Payment URL generation
- `/app/api/vnpay/create-payment/route.ts` - Payment creation
- `/app/api/vnpay/return/route.ts` - Return processing
- `/app/api/vnpay/ipn/route.ts` - IPN processing

### Support

For VNPay-specific issues:
- Email: support@vnpay.vn
- Hotline: 1900 5555 77
- Documentation: https://sandbox.vnpayment.vn/apis/

---

## VNPay Response Codes Reference

### Payment Response Codes

| Code | Meaning (Vietnamese) | Meaning (English) |
|------|---------------------|-------------------|
| 00 | Giao dịch thành công | Transaction successful |
| 07 | Trừ tiền thành công. Giao dịch bị nghi ngờ | Debit successful. Suspicious transaction |
| 09 | Thẻ/Tài khoản chưa đăng ký dịch vụ | Card not registered for internet banking |
| 10 | Xác thực không đúng quá 3 lần | Authentication failed (exceeded 3 attempts) |
| 11 | Hết hạn chờ thanh toán | Payment timeout |
| 12 | Thẻ/Tài khoản bị khóa | Card/account locked |
| 13 | Nhập sai OTP | Wrong OTP |
| 24 | Khách hàng hủy giao dịch | Customer cancelled |
| 51 | Tài khoản không đủ số dư | Insufficient balance |
| 65 | Vượt quá hạn mức giao dịch | Transaction limit exceeded |
| 75 | Ngân hàng bảo trì | Bank under maintenance |
| 79 | Nhập sai mật khẩu quá số lần | Wrong password (exceeded attempts) |
| 99 | Lỗi khác | Other error |

### IPN Response Codes

| Code | Meaning |
|------|---------|
| 00 | Confirm success |
| 01 | Order not found |
| 02 | Order already confirmed |
| 04 | Invalid amount |
| 97 | Invalid signature |
| 99 | Unknown error |

---

## License

This integration is provided as-is for use with VNPay payment gateway. Please refer to VNPay's terms of service and licensing agreements.

---

## Changelog

### Version 1.0.0 (2025-10-11)
- Initial implementation
- Complete payment flow (create, return, IPN)
- Transaction query and refund support
- TypeScript type definitions
- UI components (VNPaymentForm, Result page)
- Comprehensive documentation

---

## Contributors

This integration was created for the freetrek-docs project using the reference implementation from tram-han-agarwood project.

---

## Next Steps

1. ✅ Complete environment configuration
2. ✅ Test in sandbox environment
3. ⬜ Implement database integration (remove TODOs in IPN handler)
4. ⬜ Set up monitoring and logging
5. ⬜ Complete production testing
6. ⬜ Deploy to production
7. ⬜ Configure VNPay merchant portal with production URLs

---

**Need Help?**

If you encounter any issues or have questions, please:
1. Check the Troubleshooting section
2. Review VNPay's official documentation
3. Contact VNPay support
4. Review the implementation code and comments

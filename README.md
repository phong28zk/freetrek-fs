# Freetrek - E-Commerce Platform

**Trang bị vững vàng, Tự do vững bước** | *Solid Equipment, Step Confidently*

Nền tảng thương mại điện tử chuyên về đồ dụng cụ du lịch và cắm trại chất lượng cao, được xây dựng với Next.js 15 và tích hợp thanh toán VNPay.

---

## 📋 Mục lục

1. [Tổng quan](#tổng-quan)
2. [Tính năng chính](#tính-năng-chính)
3. [Công nghệ sử dụng](#công-nghệ-sử-dụng)
4. [Cấu trúc thư mục](#cấu-trúc-thư-mục)
5. [Cài đặt và Khởi chạy](#cài-đặt-và-khởi-chạy)
6. [Cấu hình môi trường](#cấu-hình-môi-trường)
7. [Kiến trúc ứng dụng](#kiến-trúc-ứng-dụng)
8. [Tích hợp thanh toán VNPay](#tích-hợp-thanh-toán-vnpay)
9. [API Endpoints](#api-endpoints)
10. [Quản lý State](#quản-lý-state)
11. [UI Components](#ui-components)
12. [Hướng dẫn phát triển](#hướng-dẫn-phát-triển)
13. [Testing](#testing)
14. [Deployment](#deployment)
15. [Xử lý sự cố](#xử-lý-sự-cố)
16. [Roadmap](#roadmap)

---

## Tổng quan

**Freetrek** là nền tảng thương mại điện tử chuyên cung cấp thiết bị du lịch và cắm trại chất lượng cao cho người Việt. Dự án được xây dựng với các công nghệ hiện đại nhất, đảm bảo hiệu suất cao, trải nghiệm người dùng mượt mà và khả năng mở rộng tốt.

### Đặc điểm nổi bật

- ✅ **Modern Stack**: Next.js 15, React 19, TypeScript 5
- ✅ **Payment Integration**: VNPay gateway đầy đủ (create, return, IPN, query, refund)
- ✅ **Full E-Commerce**: Giỏ hàng, checkout, quản lý đơn hàng
- ✅ **Product Categories**: 27+ danh mục sản phẩm phong phú
- ✅ **Responsive Design**: Hoàn hảo trên mọi thiết bị
- ✅ **Dark Mode**: Hỗ trợ theme sáng/tối
- ✅ **Type Safety**: TypeScript đầy đủ cho toàn bộ codebase
- ✅ **State Management**: Zustand cho global state, TanStack Query cho server state
- ✅ **Developer Experience**: Hot reload, ESLint, Prettier
- ✅ **Production Ready**: Logging, error handling, security best practices

---

## Tính năng chính

### 🛍️ E-Commerce Core

#### 1. Catalog & Products
- **27+ Danh mục sản phẩm**:
  - 🧥 Trang phục (Áo, Áo mưa, Quần)
  - 🎩 Mũ & Giày (Nón bảo hiểm, Giày trekking)
  - 🎒 Túi & Balo (Balo du lịch, Túi đựng đồ)
  - ⛺ Cắm trại (Lều, Thảm, Túi ngủ, Nệm hơi, Gối, Ghế, Bàn)
  - 🔧 Phụ kiện (Kính, Bình nước, Dụng cụ, Gậy trekking)

- **Product Features**:
  - Chi tiết sản phẩm đầy đủ với hình ảnh, mô tả, specifications
  - Tìm kiếm và filter theo danh mục
  - Sorting (giá, tên, mới nhất)
  - Responsive product cards
  - Quick view modal
  - Stock status display

#### 2. Shopping Cart
- **Giỏ hàng thông minh**:
  - Add/remove/update quantity
  - Persistent cart (localStorage/session)
  - Real-time price calculation
  - Cart sheet/drawer UI
  - Stock validation
  - Empty cart state

#### 3. Checkout Process
- **Quy trình thanh toán mượt mà**:
  - Multi-step checkout flow
  - Order summary với breakdown chi tiết
  - Multiple payment methods
  - Address validation
  - Order confirmation

### 💳 Payment Integration

#### VNPay Gateway - Full Implementation
- **Create Payment**: Tạo URL thanh toán an toàn
- **Return Handler**: Xử lý callback từ VNPay
- **IPN (Instant Payment Notification)**: Nhận thông báo server-to-server
- **Query Transaction**: Truy vấn trạng thái giao dịch
- **Refund**: Xử lý hoàn tiền (toàn bộ/một phần)
- **Signature Verification**: HMAC SHA512 security
- **Payment Result Page**: Hiển thị kết quả thanh toán đẹp mắt

> 📖 **Chi tiết**: Xem [PAYMENT_PATH_STRUCTURE.md](./PAYMENT_PATH_STRUCTURE.md) và [VNPAY_IMPLEMENTATION_SUMMARY.md](./VNPAY_IMPLEMENTATION_SUMMARY.md)

### 🎨 User Experience

- **Responsive Design**: Mobile-first, hoàn hảo trên mọi screen size
- **Dark Mode**: Theme switcher với next-themes
- **Loading States**: Skeleton loaders, spinners
- **Error Handling**: Friendly error messages
- **Toast Notifications**: Sonner for beautiful toasts
- **Smooth Animations**: tailwindcss-animate
- **Accessibility**: ARIA labels, keyboard navigation

### 👤 User Management (Coming Soon)

- Đăng ký/Đăng nhập
- Profile management
- Order history
- Wishlist
- Reviews & ratings

---

## Công nghệ sử dụng

### Core Framework
- **Next.js 15.2.4**: React framework với App Router
- **React 19**: Latest React version
- **TypeScript 5**: Full type safety

### State Management
- **Zustand**: Global state (cart, user preferences)
- **TanStack Query**: Server state, caching, mutations
- **TanStack Router**: Type-safe routing

### UI & Styling
- **Tailwind CSS 4.1.9**: Utility-first CSS framework
- **shadcn/ui**: High-quality React components
- **Radix UI**: Unstyled, accessible component primitives
- **next-themes**: Dark mode support
- **Lucide React**: Beautiful icon library
- **Sonner**: Toast notifications
- **Embla Carousel**: Smooth carousels

### Forms & Validation
- **React Hook Form**: Performant forms
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Form validation integration

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting (implied)
- **TypeScript**: Static type checking

### Deployment & Analytics
- **Vercel**: Recommended deployment platform
- **@vercel/analytics**: Web analytics

### Payment Gateway
- **VNPay**: Vietnamese payment gateway
- **qs**: Query string parsing for VNPay

---

## Cấu trúc thư mục

```
freetrek-docs/
├── app/                              # Next.js App Router
│   ├── [[...routes]]/                # Catch-all route for TanStack Router
│   │   └── page.tsx                  # Router entry point
│   ├── api/                          # API Routes
│   │   ├── orders/                   # Orders API
│   │   │   └── route.ts
│   │   ├── products/                 # Products API
│   │   │   └── route.ts
│   │   ├── payment/                  # Payment creation (new path)
│   │   │   └── vnpay/
│   │   │       └── create/route.ts
│   │   └── vnpay/                    # VNPay Integration
│   │       ├── create-payment/       # Legacy create payment
│   │       │   └── route.ts
│   │       ├── return/               # Return handler
│   │       │   └── route.ts
│   │       ├── ipn/                  # IPN handler
│   │       │   └── route.ts
│   │       ├── query/                # Transaction query
│   │       │   └── route.ts
│   │       └── refund/               # Refund handler
│   │           └── route.ts
│   ├── checkout/                     # Checkout page (protected)
│   ├── payment/                      # Payment pages
│   │   └── vnpay/
│   │       ├── result/page.tsx       # Payment result page
│   │       └── page.tsx              # Payment method selector
│   ├── layout.tsx                    # Root layout
│   └── globals.css                   # Global styles
│
├── components/                       # React Components
│   ├── cart/                         # Cart components
│   │   ├── cart-button.tsx           # Cart button with badge
│   │   ├── cart-sheet.tsx            # Cart drawer/sheet
│   │   └── add-to-cart-button.tsx    # Add to cart button
│   ├── forms/                        # Form components
│   │   ├── user-form.tsx
│   │   └── post-form.tsx
│   ├── layout/                       # Layout components
│   │   ├── root-layout.tsx           # Main layout wrapper
│   │   ├── site-header.tsx           # Header with nav
│   │   ├── site-footer.tsx           # Footer
│   │   └── dashboard-layout.tsx      # Admin dashboard layout
│   ├── payment/                      # Payment components
│   │   └── VNPaymentForm.tsx         # VNPay payment form
│   ├── providers/                    # Context providers
│   │   └── query-provider.tsx        # TanStack Query provider
│   ├── ui/                           # UI Components (shadcn/ui)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   ├── sheet.tsx
│   │   ├── toast.tsx
│   │   └── ... (60+ components)
│   └── theme-provider.tsx            # Theme provider (dark mode)
│
├── lib/                              # Utility functions
│   ├── api/                          # API helpers
│   ├── constants/                    # Constants
│   │   └── categories.ts             # Product categories
│   ├── data/                         # Mock data
│   │   ├── mock-products.ts          # Sample products
│   │   └── mock-orders.ts            # Sample orders
│   ├── store/                        # Zustand stores
│   ├── validations/                  # Zod schemas
│   ├── api-client.ts                 # API client setup
│   ├── query-client.ts               # TanStack Query config
│   ├── query-keys.ts                 # Query key factory
│   ├── router.tsx                    # TanStack Router config
│   ├── route-tree.tsx                # Generated route tree
│   ├── utils.ts                      # Utility functions
│   └── vnpay.ts                      # VNPay utilities (228 lines)
│
├── routes/                           # TanStack Router routes
│   ├── account/                      # Account pages
│   │   ├── index.tsx                 # Account home
│   │   └── login.tsx                 # Login page
│   ├── api-demo.tsx                  # API demo page
│   ├── news.tsx                      # News/blog page
│   └── product-detail.tsx            # Product detail page
│
├── types/                            # TypeScript types
│   ├── vnpay.ts                      # VNPay types (276 lines)
│   └── product.ts                    # Product types
│
├── public/                           # Static assets
│   ├── images/
│   └── ...
│
├── styles/                           # Additional styles
│
├── docs/                             # Documentation
│
├── .env                              # Environment variables
├── .env.local                        # Local environment overrides
├── .env.vnpay.example                # VNPay env template
├── components.json                   # shadcn/ui config
├── next.config.mjs                   # Next.js configuration
├── package.json                      # Dependencies
├── tailwind.config.ts                # Tailwind configuration (implied)
├── tsconfig.json                     # TypeScript configuration
│
├── PAYMENT_PATH_STRUCTURE.md         # Payment flow documentation
├── VNPAY_IMPLEMENTATION_SUMMARY.md   # VNPay implementation guide
├── VNPAY_SIGNATURE_FIX.md            # Signature verification docs
└── README.md                         # This file
```

---

## Cài đặt và Khởi chạy

### Yêu cầu hệ thống

- **Node.js**: >= 18.x
- **npm** hoặc **pnpm** hoặc **yarn** hoặc **bun**
- **Git**: Latest version

### Bước 1: Clone repository

```bash
git clone <repository-url>
cd freetrek-docs
```

### Bước 2: Cài đặt dependencies

```bash
# Using npm
npm install

# Using pnpm
pnpm install

# Using yarn
yarn install

# Using bun
bun install
```

### Bước 3: Cấu hình môi trường

```bash
# Copy environment template
cp .env.vnpay.example .env.local

# Edit .env.local with your values
nano .env.local  # or use your favorite editor
```

### Bước 4: Chạy development server

```bash
# Using npm
npm run dev

# Using pnpm
pnpm dev

# Using yarn
yarn dev

# Using bun
bun dev
```

Mở trình duyệt tại [http://localhost:3000](http://localhost:3000)

### Bước 5: Build cho production

```bash
npm run build
npm run start
```

---

## Cấu hình môi trường

### File `.env.local`

Tạo file `.env.local` trong thư mục gốc của project:

```env
# ===========================================
# VNPay Payment Gateway Configuration
# ===========================================

# VNPay Merchant/Terminal Code
# Lấy từ VNPay Merchant Portal sau khi đăng ký
VNPAY_TMN_CODE=your_terminal_code_here

# VNPay Hash Secret
# Dùng để tạo và verify chữ ký HMAC SHA512
VNPAY_HASH_SECRET=your_hash_secret_here

# VNPay Gateway URL
# Sandbox (Testing): https://sandbox.vnpayment.vn/paymentv2/vpcpay.html
# Production: https://vnpayment.vn/paymentv2/vpcpay.html
VNPAY_URL=https://sandbox.vnpayment.vn/paymentv2/vpcpay.html

# VNPay API URL (for query/refund)
# Sandbox: https://sandbox.vnpayment.vn/merchant_webapi/api/transaction
# Production: https://vnpayment.vn/merchant_webapi/api/transaction
VNPAY_API=https://sandbox.vnpayment.vn/merchant_webapi/api/transaction

# ===========================================
# Application Configuration
# ===========================================

# Next.js URL (for return/IPN callbacks)
NEXT_PUBLIC_APP_URL=http://localhost:3000

# ===========================================
# Database Configuration (Optional)
# ===========================================

# PostgreSQL, MySQL, MongoDB, etc.
# DATABASE_URL=postgresql://user:password@localhost:5432/freetrek
# Uncomment and configure when implementing database

# ===========================================
# Authentication (Optional - Future)
# ===========================================

# NEXTAUTH_SECRET=your_nextauth_secret
# NEXTAUTH_URL=http://localhost:3000

# ===========================================
# Analytics & Monitoring (Optional)
# ===========================================

# NEXT_PUBLIC_ANALYTICS_ID=your_vercel_analytics_id
```

### Môi trường Sandbox vs Production

| Cấu hình | Sandbox (Test) | Production (Live) |
|----------|----------------|-------------------|
| **VNPAY_URL** | `https://sandbox.vnpayment.vn/paymentv2/vpcpay.html` | `https://vnpayment.vn/paymentv2/vpcpay.html` |
| **VNPAY_API** | `https://sandbox.vnpayment.vn/merchant_webapi/api/transaction` | `https://vnpayment.vn/merchant_webapi/api/transaction` |
| **VNPAY_TMN_CODE** | Sandbox merchant code | Production merchant code |
| **VNPAY_HASH_SECRET** | Sandbox hash secret | Production hash secret |
| **Tiền thật** | ❌ Không | ✅ Có |
| **Test Cards** | ✅ Có sẵn | ❌ Không |

### Lấy VNPay Credentials

#### Sandbox (Testing)
1. Truy cập: https://sandbox.vnpayment.vn/devreg/
2. Đăng ký tài khoản sandbox
3. Lấy `TMN_CODE` và `HASH_SECRET` từ merchant portal

#### Production
1. Liên hệ VNPay:
   - Email: support@vnpay.vn
   - Hotline: 1900 55 55 77
2. Hoàn tất thủ tục hợp đồng
3. Nhận production credentials

---

## Kiến trúc ứng dụng

### Tổng quan Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                          CLIENT (Browser)                            │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │  React Components (routes/, components/)                       │ │
│  │  - Product Catalog, Cart, Checkout, Account                   │ │
│  └────────────────────────────────────────────────────────────────┘ │
│                              ↕                                        │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │  State Management                                              │ │
│  │  - Zustand (Global State)                                      │ │
│  │  - TanStack Query (Server State)                               │ │
│  └────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
                              ↕ HTTP/HTTPS
┌─────────────────────────────────────────────────────────────────────┐
│                    NEXT.JS SERVER (App Router)                       │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │  API Routes (app/api/)                                         │ │
│  │  - Products API (/api/products)                                │ │
│  │  - Orders API (/api/orders)                                    │ │
│  │  - VNPay Integration (/api/vnpay/*, /api/payment/vnpay/*)     │ │
│  └────────────────────────────────────────────────────────────────┘ │
│                              ↕                                        │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │  Business Logic (lib/)                                         │ │
│  │  - VNPay Utils (signature, URL creation)                       │ │
│  │  - API Client                                                  │ │
│  │  - Data Validation (Zod)                                       │ │
│  └────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
                              ↕
┌─────────────────────────────────────────────────────────────────────┐
│                       EXTERNAL SERVICES                              │
│  ┌────────────────────┐         ┌──────────────────────┐            │
│  │   VNPay Gateway    │         │   Database (Future)  │            │
│  │  - Payment         │         │   - PostgreSQL       │            │
│  │  - IPN             │         │   - Prisma ORM       │            │
│  │  - Query/Refund    │         │   - Orders, Products │            │
│  └────────────────────┘         └──────────────────────┘            │
└─────────────────────────────────────────────────────────────────────┘
```

### Luồng dữ liệu chính

#### 1. Product Browsing Flow
```
User → Products Page → API /api/products → Mock Data → Display
                    ↓
               TanStack Query Cache
```

#### 2. Add to Cart Flow
```
User → Click "Add to Cart" → Zustand Store Update → Cart Sheet Update
                           ↓
                    LocalStorage Sync
```

#### 3. Checkout Flow
```
User → Cart → Checkout Page → Fill Info → Select Payment Method
                                                ↓
                                    POST /api/payment/vnpay/create
                                                ↓
                                    Redirect to VNPay
                                                ↓
                        User completes payment at VNPay
                                                ↓
                        ┌───────────────────────┴────────────────────┐
                        ↓                                            ↓
            GET /api/vnpay/return                        GET /api/vnpay/ipn
        (User redirect + display)                     (Server notification)
                        ↓                                            ↓
            /payment/vnpay/result                    Update Database
         (Show success/failure)                      (Order status)
```

#### 4. VNPay Payment Flow (Detailed)

Xem chi tiết trong [PAYMENT_PATH_STRUCTURE.md](./PAYMENT_PATH_STRUCTURE.md)

---

## Tích hợp thanh toán VNPay

### Tổng quan

Freetrek đã tích hợp đầy đủ cổng thanh toán VNPay với các tính năng:

✅ **Create Payment**: Tạo URL thanh toán
✅ **Return Handler**: Xử lý người dùng quay về
✅ **IPN Handler**: Nhận thông báo server-to-server
✅ **Query Transaction**: Truy vấn giao dịch
✅ **Refund**: Hoàn tiền toàn bộ/một phần
✅ **Signature Verification**: HMAC SHA512
✅ **TypeScript**: Full type safety

### Quick Start - VNPay Integration

#### 1. Cấu hình Environment
```bash
# .env.local
VNPAY_TMN_CODE=your_terminal_code
VNPAY_HASH_SECRET=your_hash_secret
VNPAY_URL=https://sandbox.vnpayment.vn/paymentv2/vpcpay.html
VNPAY_API=https://sandbox.vnpayment.vn/merchant_webapi/api/transaction
```

#### 2. Sử dụng VNPaymentForm Component
```tsx
import { VNPaymentForm } from '@/components/payment/VNPaymentForm'

export default function CheckoutPage() {
  const order = {
    id: 'ORDER_123',
    total: 500000, // 500,000 VND
  }

  return <VNPaymentForm order={order} />
}
```

#### 3. API Endpoints
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/payment/vnpay/create` | POST | Tạo payment URL |
| `/api/vnpay/return` | GET | User return callback |
| `/api/vnpay/ipn` | GET | Server IPN notification |
| `/api/vnpay/query` | POST | Query transaction |
| `/api/vnpay/refund` | POST | Process refund |

### Documentation

- 📖 **[PAYMENT_PATH_STRUCTURE.md](./PAYMENT_PATH_STRUCTURE.md)**: Chi tiết luồng thanh toán
- 📖 **[VNPAY_IMPLEMENTATION_SUMMARY.md](./VNPAY_IMPLEMENTATION_SUMMARY.md)**: Implementation guide (600+ dòng)
- 📖 **[VNPAY_SIGNATURE_FIX.md](./VNPAY_SIGNATURE_FIX.md)**: Signature verification

### Test Payment

1. Chạy dev server: `npm run dev`
2. Truy cập checkout page
3. Click "Thanh toán qua VNPay"
4. Sử dụng test card từ VNPay sandbox
5. Xem kết quả tại `/payment/vnpay/result`

---

## API Endpoints

### Products API

#### GET `/api/products`
Lấy danh sách sản phẩm

**Query Parameters**:
- `category` (optional): Filter by category
- `search` (optional): Search products
- `sort` (optional): Sort by price, name, date

**Response**:
```json
{
  "products": [
    {
      "id": "SP001",
      "name": "Lều cắm trại ngoài trời...",
      "slug": "leu-cam-trai-tu-bung-tre-trung",
      "price": 690000,
      "category": "cam-trai",
      "images": ["https://..."],
      "inStock": true,
      "stockQuantity": 30
    }
  ],
  "total": 100,
  "page": 1,
  "limit": 20
}
```

### Orders API

#### GET `/api/orders`
Lấy danh sách đơn hàng (yêu cầu authentication - future)

#### POST `/api/orders`
Tạo đơn hàng mới

**Request Body**:
```json
{
  "items": [
    {
      "productId": "SP001",
      "quantity": 2,
      "price": 690000
    }
  ],
  "customerInfo": {
    "name": "Nguyễn Văn A",
    "phone": "0901234567",
    "email": "email@example.com",
    "address": "123 Đường ABC, Q1, TP.HCM"
  },
  "paymentMethod": "vnpay"
}
```

### VNPay API

Xem chi tiết tại [PAYMENT_PATH_STRUCTURE.md](./PAYMENT_PATH_STRUCTURE.md)

---

## Quản lý State

### Zustand Store (Global State)

#### Cart Store
```typescript
// lib/store/cart-store.ts
interface CartStore {
  items: CartItem[]
  addItem: (product: Product, quantity: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
}
```

**Usage**:
```tsx
import { useCartStore } from '@/lib/store/cart-store'

function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore(state => state.addItem)

  return (
    <button onClick={() => addItem(product, 1)}>
      Add to Cart
    </button>
  )
}
```

### TanStack Query (Server State)

#### Products Query
```typescript
// Usage in component
import { useQuery } from '@tanstack/react-query'
import { productKeys } from '@/lib/query-keys'

function ProductList() {
  const { data, isLoading, error } = useQuery({
    queryKey: productKeys.list(),
    queryFn: () => fetch('/api/products').then(res => res.json())
  })

  // ... render logic
}
```

#### Query Keys Factory
```typescript
// lib/query-keys.ts
export const productKeys = {
  all: ['products'] as const,
  lists: () => [...productKeys.all, 'list'] as const,
  list: (filters: ProductFilters) => [...productKeys.lists(), filters] as const,
  details: () => [...productKeys.all, 'detail'] as const,
  detail: (id: string) => [...productKeys.details(), id] as const,
}
```

---

## UI Components

### shadcn/ui Components

Project sử dụng 60+ components từ shadcn/ui:

**Layout & Navigation**:
- `accordion`, `tabs`, `navigation-menu`, `menubar`

**Forms & Inputs**:
- `form`, `input`, `textarea`, `select`, `checkbox`, `radio-group`, `switch`, `slider`

**Feedback**:
- `alert`, `toast`, `dialog`, `alert-dialog`, `progress`, `skeleton`, `spinner`

**Display**:
- `card`, `badge`, `avatar`, `table`, `calendar`, `chart`, `carousel`

**Utility**:
- `button`, `dropdown-menu`, `popover`, `tooltip`, `sheet`, `drawer`, `separator`

### Custom Components

#### VNPaymentForm
```tsx
<VNPaymentForm
  order={{
    id: 'ORDER_123',
    total: 500000
  }}
/>
```

#### CartButton
```tsx
<CartButton />
// Displays cart icon with item count badge
```

#### AddToCartButton
```tsx
<AddToCartButton
  product={product}
  quantity={1}
/>
```

---

## Hướng dẫn phát triển

### Thêm sản phẩm mới

1. **Thêm vào mock data** (tạm thời):
```typescript
// lib/data/mock-products.ts
export const mockProducts: Product[] = [
  // ... existing products
  {
    id: "SP099",
    name: "Tên sản phẩm mới",
    slug: "ten-san-pham-moi",
    description: "Mô tả chi tiết",
    price: 450000,
    category: "balo",
    images: ["https://..."],
    inStock: true,
    stockQuantity: 25,
    sku: "SP099",
    tags: ["balo", "du lịch"],
    specifications: {
      "Dung tích": "40L",
      "Chất liệu": "Nylon chống nước",
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
]
```

2. **Với database** (future):
```typescript
// API route để create product
await prisma.product.create({
  data: {
    name: "...",
    slug: "...",
    // ... other fields
  }
})
```

### Thêm danh mục mới

```typescript
// lib/constants/categories.ts
export const categoryNames: Record<ProductCategory | "all", string> = {
  // ... existing
  "new-category": "Tên danh mục mới",
}

export const mainCategories = [
  // ... existing
  {
    key: "new-category",
    name: "Tên danh mục mới",
    subcategories: ["sub-cat-1", "sub-cat-2"],
  },
]
```

### Tạo API Route mới

```typescript
// app/api/your-endpoint/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Your logic here
    return NextResponse.json({ success: true, data: {} })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    // Your logic here
    return NextResponse.json({ success: true, data: {} })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
```

### Code Style Guidelines

1. **TypeScript**: Always use TypeScript, avoid `any`
2. **Naming**:
   - Components: PascalCase (`ProductCard.tsx`)
   - Utilities: camelCase (`formatPrice.ts`)
   - Constants: UPPER_SNAKE_CASE (`MAX_CART_ITEMS`)
3. **File Organization**:
   - One component per file
   - Co-locate related files (component + styles + tests)
   - Use barrel exports (`index.ts`) for cleaner imports
4. **Comments**:
   - Use JSDoc for functions
   - Explain "why", not "what"
   - Keep comments up-to-date

---

## Testing

### Unit Testing (Future)

**Setup Jest + React Testing Library**:
```bash
npm install -D jest @testing-library/react @testing-library/jest-dom
```

**Example test**:
```typescript
// __tests__/components/ProductCard.test.tsx
import { render, screen } from '@testing-library/react'
import { ProductCard } from '@/components/products/ProductCard'

describe('ProductCard', () => {
  it('renders product name', () => {
    const product = {
      id: 'SP001',
      name: 'Test Product',
      price: 100000,
      // ... other fields
    }

    render(<ProductCard product={product} />)
    expect(screen.getByText('Test Product')).toBeInTheDocument()
  })
})
```

### E2E Testing (Future)

**Setup Playwright**:
```bash
npm install -D @playwright/test
```

**Example test**:
```typescript
// e2e/checkout.spec.ts
import { test, expect } from '@playwright/test'

test('complete checkout flow', async ({ page }) => {
  await page.goto('/')
  await page.click('[data-testid="add-to-cart"]')
  await page.click('[data-testid="cart-button"]')
  await page.click('[data-testid="checkout-button"]')

  // Fill checkout form
  await page.fill('[name="name"]', 'Test User')
  await page.fill('[name="phone"]', '0901234567')

  // Complete payment
  await page.click('[data-testid="vnpay-payment"]')

  // Verify result page
  await expect(page).toHaveURL(/\/payment\/vnpay\/result/)
})
```

### Manual Testing Checklist

- [ ] Browse products by category
- [ ] Search products
- [ ] Add to cart
- [ ] Update cart quantities
- [ ] Remove from cart
- [ ] Proceed to checkout
- [ ] Fill checkout form
- [ ] Complete VNPay payment (sandbox)
- [ ] Verify payment result page
- [ ] Check dark mode toggle
- [ ] Test on mobile devices
- [ ] Test all breakpoints

---

## Deployment

### Vercel (Recommended)

Vercel là platform được recommend cho Next.js:

#### Bước 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Bước 2: Login
```bash
vercel login
```

#### Bước 3: Deploy
```bash
# Development/preview
vercel

# Production
vercel --prod
```

#### Bước 4: Configure Environment Variables
Trong Vercel Dashboard:
1. Project Settings → Environment Variables
2. Add các biến từ `.env.local`
3. Redeploy nếu cần

#### Bước 5: Configure VNPay Return URL
Sau khi deploy, update VNPay merchant portal với:
- **Return URL**: `https://your-domain.vercel.app/api/vnpay/return`
- **IPN URL**: `https://your-domain.vercel.app/api/vnpay/ipn`

### Alternative Platforms

#### Netlify
```bash
npm run build
# Deploy dist folder via Netlify CLI or dashboard
```

#### Railway / Render
```bash
# Connect GitHub repo
# Set build command: npm run build
# Set start command: npm run start
```

### Docker (Self-hosted)

```dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build the app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

**Build and run**:
```bash
docker build -t freetrek .
docker run -p 3000:3000 --env-file .env.local freetrek
```

### Production Checklist

- [ ] **Environment Variables**: Set production env vars
- [ ] **VNPay Credentials**: Switch to production credentials
- [ ] **VNPay URLs**: Update return/IPN URLs in VNPay portal
- [ ] **Database**: Set up production database
- [ ] **Analytics**: Configure Vercel Analytics or Google Analytics
- [ ] **Error Monitoring**: Set up Sentry or similar
- [ ] **Performance**: Test with Lighthouse
- [ ] **Security**: Run security audit (`npm audit`)
- [ ] **SEO**: Add meta tags, sitemap, robots.txt
- [ ] **SSL**: Ensure HTTPS is enabled
- [ ] **Domain**: Configure custom domain
- [ ] **Backup**: Set up database backups

---

## Xử lý sự cố

### Lỗi thường gặp

#### ❌ Module not found errors
```bash
# Clear cache và reinstall
rm -rf node_modules .next
npm install
npm run dev
```

#### ❌ VNPay signature invalid (Code 97)
**Nguyên nhân**: `VNPAY_HASH_SECRET` không đúng

**Giải pháp**:
1. Kiểm tra `.env.local`
2. Verify hash secret từ VNPay merchant portal
3. Restart dev server sau khi update env

#### ❌ Payment creation fails
**Nguyên nhân**: Missing env variables

**Giải pháp**:
```bash
# Check all VNPay env vars
echo $VNPAY_TMN_CODE
echo $VNPAY_HASH_SECRET
echo $VNPAY_URL
```

#### ❌ TypeScript errors
```bash
# Rebuild type definitions
npm run build
# or
rm -rf .next
npm run dev
```

#### ❌ Hydration errors
**Nguyên nhân**: Server/client mismatch

**Giải pháp**:
- Use `useEffect` for client-only code
- Use `suppressHydrationWarning` attribute
- Check for date/time rendering differences

### Debug Tips

1. **Enable Verbose Logging**:
```typescript
// Add to next.config.mjs
export default {
  // ...
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}
```

2. **Check API Responses**:
```typescript
// Use browser DevTools Network tab
// Or add console.logs in API routes
console.log('Request:', await request.json())
console.log('Response:', responseData)
```

3. **VNPay Payment Issues**:
- Check browser console for errors
- Check server logs for signature verification
- Verify all env variables are set
- Test with VNPay sandbox first

4. **Cart Issues**:
- Check localStorage in browser DevTools
- Check Zustand DevTools (if installed)
- Verify cart store initialization

---

## Roadmap

### Phase 1: Core E-Commerce (Current) ✅
- [x] Product catalog with categories
- [x] Shopping cart functionality
- [x] VNPay payment integration
- [x] Responsive design
- [x] Dark mode
- [x] Mock data for testing

### Phase 2: Backend & Database (In Progress) 🔄
- [ ] PostgreSQL database setup
- [ ] Prisma ORM integration
- [ ] API migration from mock to real data
- [ ] Order management system
- [ ] Inventory tracking
- [ ] Payment transaction logging
- [ ] IPN database updates

### Phase 3: User Management (Q2 2025) 📅
- [ ] User authentication (NextAuth.js)
- [ ] User registration/login
- [ ] Profile management
- [ ] Order history
- [ ] Wishlist functionality
- [ ] Product reviews & ratings
- [ ] Email notifications

### Phase 4: Admin Dashboard (Q2 2025) 📅
- [ ] Admin authentication
- [ ] Product management (CRUD)
- [ ] Order management
- [ ] Customer management
- [ ] Analytics dashboard
- [ ] Inventory management
- [ ] Refund management UI
- [ ] Sales reports

### Phase 5: Advanced Features (Q3 2025) 📅
- [ ] Product search with Algolia/Elasticsearch
- [ ] Recommendations engine
- [ ] Loyalty program
- [ ] Discount codes & promotions
- [ ] Multiple payment methods (MoMo, ZaloPay)
- [ ] Shipping integration
- [ ] Multi-language support (English)
- [ ] Blog/News section

### Phase 6: Optimization (Q4 2025) 📅
- [ ] Performance optimization
- [ ] SEO improvements
- [ ] Image optimization (CDN)
- [ ] PWA capabilities
- [ ] Offline support
- [ ] Push notifications
- [ ] A/B testing
- [ ] Advanced analytics

### Future Considerations
- Mobile app (React Native)
- AR product preview
- Live chat support
- Social media integration
- Gift cards
- Subscription boxes
- Marketplace (multi-vendor)

---

## Contributing

### Quy trình Contribute

1. **Fork repository**
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open Pull Request**

### Commit Message Convention

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Test additions/changes
- `chore`: Maintenance tasks

**Examples**:
```
feat(cart): add quantity selector to cart items

fix(payment): resolve VNPay signature verification issue

docs(readme): update installation instructions
```

---

## License

[Add your license here - MIT, Apache 2.0, etc.]

---

## Support & Contact

### Technical Support
- **Email**: support@freetrek.vn (example)
- **GitHub Issues**: [Create an issue](repository-url/issues)
- **Documentation**: This README & linked docs

### VNPay Support
- **Email**: support@vnpay.vn
- **Hotline**: 1900 55 55 77
- **Docs**: https://sandbox.vnpayment.vn/apis/

### Community
- **Discord**: [Join our server](#) (future)
- **Facebook**: [Freetrek Community](#) (future)

---

## Acknowledgments

- **Next.js Team**: For the amazing framework
- **Vercel**: For hosting and analytics
- **shadcn**: For beautiful UI components
- **VNPay**: For payment gateway integration
- **TanStack**: For Query and Router
- **All contributors**: Thank you for your contributions!

---

## Project Status

**Version**: 1.0.0
**Status**: 🟢 Active Development
**Last Updated**: 2025-10-20

**Core Features**: ✅ Complete
**Payment Integration**: ✅ Complete
**Database Integration**: ⚠️ Pending
**User Authentication**: 📅 Planned
**Admin Dashboard**: 📅 Planned

---

**Built with ❤️ by the Freetrek Team**

*Trang bị vững vàng, Tự do vững bước* 🏔️

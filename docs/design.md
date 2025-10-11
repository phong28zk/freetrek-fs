# Freetrek E-Commerce Platform - Design Document

## Executive Summary

This design document outlines the architecture for **Freetrek**, a modern e-commerce platform specializing in outdoor adventure gear, travel equipment, and camping supplies. The platform leverages NextJS 14+, ShadCN UI, Tanstack Router, and Tanstack Query to deliver a high-performance, type-safe, and scalable web application.

**Brand Identity**: Freetrek embodies freedom, exploration, and adventure with the tagline "Trang bị vững vàng – Tự do vững bước" (Well-equipped – Confidently free).

## Design Philosophy

### Visual Identity

- **Color Palette**: 
  - Primary: Fresh Green (#10B981) - represents nature and adventure
  - Secondary: Deep Black (#0F172A) - modern and bold
  - Accent: Pure White (#FFFFFF) - clean and spacious
  - Supporting: Slate Gray (#64748B) - for text and borders
  
- **Typography**:
  - Headings: Bold, modern sans-serif (Inter or similar)
  - Body: Clean, readable sans-serif
  - Emphasis on readability and accessibility

- **Design Principles**:
  - Modern, minimalist layout
  - Mobile-first responsive design
  - Dynamic and youthful aesthetic
  - Clear visual hierarchy
  - Generous white space

### User Experience Goals

1. **Intuitive Navigation**: Easy product discovery and checkout flow
2. **Performance**: Fast page loads and smooth interactions
3. **Accessibility**: WCAG 2.1 AA compliance
4. **Trust**: Clear product information and secure checkout
5. **Engagement**: Compelling content and social proof

## Architecture Overview

### High-Level System Architecture

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                     NextJS Application                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Tanstack   │  │   ShadCN UI  │  │   Tanstack   │      │
│  │    Router    │  │  Components  │  │    Query     │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                      API Layer                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Products   │  │    Orders    │  │   Payments   │      │
│  │     API      │  │     API      │  │     API      │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                   Backend Services                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Database   │  │   Payment    │  │   Storage    │      │
│  │  (Nhanh.vn)  │  │   Gateway    │  │   (Images)   │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
\`\`\`

### Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | NextJS 14+ | React framework with App Router |
| Routing | Tanstack Router | Type-safe client-side routing |
| State Management | Tanstack Query v5 | Server state and API caching |
| UI Components | ShadCN UI | Accessible, customizable components |
| Styling | Tailwind CSS v4 | Utility-first CSS framework |
| Type Safety | TypeScript | Static type checking |
| Forms | React Hook Form + Zod | Form handling and validation |
| Payments | Nhanh.vn Integration | E-commerce backend |

## Application Structure

### Directory Organization

\`\`\`
freetrek/
├── src/
│   ├── app/                      # NextJS App Router (minimal)
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── routes/                   # Tanstack Router routes
│   │   ├── __root.tsx
│   │   ├── index.tsx
│   │   ├── products/
│   │   │   ├── index.tsx
│   │   │   └── $productId.tsx
│   │   ├── cart.tsx
│   │   ├── checkout.tsx
│   │   ├── about.tsx
│   │   ├── blog/
│   │   └── contact.tsx
│   ├── components/
│   │   ├── ui/                   # ShadCN components
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── navigation.tsx
│   │   │   └── mobile-menu.tsx
│   │   ├── products/
│   │   │   ├── product-card.tsx
│   │   │   ├── product-grid.tsx
│   │   │   ├── product-filters.tsx
│   │   │   └── product-detail.tsx
│   │   ├── cart/
│   │   │   ├── cart-item.tsx
│   │   │   ├── cart-summary.tsx
│   │   │   └── cart-drawer.tsx
│   │   └── checkout/
│   │       ├── checkout-form.tsx
│   │       ├── payment-methods.tsx
│   │       └── order-summary.tsx
│   ├── lib/
│   │   ├── api/
│   │   │   ├── client.ts
│   │   │   ├── products.ts
│   │   │   ├── cart.ts
│   │   │   ├── orders.ts
│   │   │   └── nhanh.ts
│   │   ├── hooks/
│   │   │   ├── use-cart.ts
│   │   │   ├── use-products.ts
│   │   │   └── use-checkout.ts
│   │   ├── utils.ts
│   │   └── validations.ts
│   ├── types/
│   │   ├── product.ts
│   │   ├── cart.ts
│   │   ├── order.ts
│   │   └── api.ts
│   └── providers/
│       ├── query-provider.tsx
│       └── cart-provider.tsx
├── public/
│   ├── images/
│   └── icons/
└── docs/
    ├── design.md
    ├── requirements.md
    └── tasks.md
\`\`\`

## Core Features Design

### 1. Product Catalog

**Product Categories**:
1. Travel & Outdoor Clothing (Trang phục du lịch – dã ngoại)
2. Accessories (Phụ kiện)
3. Travel Utilities (Đồ du lịch tiện ích)
4. Camping Gear (Đồ cắm trại cơ bản)

**Product Card Design**:
- High-quality product image
- Product name and brief description
- Price with sale badge (if applicable)
- Quick add to cart button
- Wishlist icon
- Stock status indicator

**Product Detail Page**:
- Image gallery with zoom capability
- Detailed product description
- Size/color/variant selector
- Quantity selector
- Add to cart CTA
- Product specifications
- Related products section
- Customer reviews (future enhancement)

### 2. Shopping Cart

**Cart Features**:
- Persistent cart (localStorage + API sync)
- Real-time price calculations
- Quantity adjustment
- Remove items
- Apply discount codes
- Shipping cost estimation
- Cart drawer for quick access
- Empty cart state with recommendations

**Cart State Management**:
\`\`\`typescript
interface CartItem {
  productId: string
  variantId?: string
  quantity: number
  price: number
  product: Product
}

interface Cart {
  items: CartItem[]
  subtotal: number
  discount: number
  shipping: number
  total: number
  discountCode?: string
}
\`\`\`

### 3. Checkout Flow

**Multi-Step Checkout**:
1. **Customer Information**: Name, email, phone
2. **Shipping Address**: Address form with validation
3. **Payment Method**: COD, Bank Transfer, E-Wallet
4. **Order Review**: Final confirmation before submission

**Payment Integration**:
- Cash on Delivery (COD)
- Bank Transfer with QR code
- E-Wallet integration (Momo, ZaloPay)
- Secure payment processing via Nhanh.vn

### 4. Navigation & Layout

**Header Components**:
- Logo (clickable to home)
- Main navigation menu
- Search bar with autocomplete
- Cart icon with item count
- User account menu (future)
- Mobile hamburger menu

**Navigation Structure**:
\`\`\`
Home
├── Products
│   ├── Travel Clothing
│   ├── Accessories
│   ├── Travel Utilities
│   └── Camping Gear
├── About
├── Blog
└── Contact
\`\`\`

**Footer Components**:
- Company information
- Quick links
- Social media links (Facebook, Instagram, Zalo)
- Newsletter signup
- Payment method icons
- Copyright notice

### 5. Content Pages

**About Page**:
- Brand story and mission
- Core values
- Team introduction (optional)
- Brand promise

**Blog/News Page**:
- Travel tips and guides
- Product recommendations
- Destination suggestions
- Camping tutorials
- SEO-optimized content

**Contact Page**:
- Contact form
- Store address and map
- Phone and email
- Business hours
- Social media links

## Data Models

### Product Model

\`\`\`typescript
interface Product {
  id: string
  name: string
  slug: string
  description: string
  shortDescription: string
  category: ProductCategory
  price: number
  salePrice?: number
  images: string[]
  variants?: ProductVariant[]
  stock: number
  sku: string
  tags: string[]
  specifications: Record<string, string>
  createdAt: string
  updatedAt: string
}

interface ProductVariant {
  id: string
  name: string
  options: Record<string, string> // e.g., { size: "L", color: "Blue" }
  price: number
  stock: number
  sku: string
}

enum ProductCategory {
  CLOTHING = "clothing",
  ACCESSORIES = "accessories",
  UTILITIES = "utilities",
  CAMPING = "camping"
}
\`\`\`

### Order Model

\`\`\`typescript
interface Order {
  id: string
  orderNumber: string
  customer: CustomerInfo
  items: OrderItem[]
  subtotal: number
  discount: number
  shipping: number
  total: number
  status: OrderStatus
  paymentMethod: PaymentMethod
  shippingAddress: Address
  notes?: string
  createdAt: string
  updatedAt: string
}

interface OrderItem {
  productId: string
  variantId?: string
  quantity: number
  price: number
  productName: string
  productImage: string
}

enum OrderStatus {
  PENDING = "pending",
  CONFIRMED = "confirmed",
  PROCESSING = "processing",
  SHIPPING = "shipping",
  DELIVERED = "delivered",
  CANCELLED = "cancelled"
}

enum PaymentMethod {
  COD = "cod",
  BANK_TRANSFER = "bank_transfer",
  MOMO = "momo",
  ZALOPAY = "zalopay"
}
\`\`\`

## API Integration

### Nhanh.vn API Integration

**Key Endpoints**:
- `GET /api/products` - Fetch product catalog
- `GET /api/products/:id` - Get product details
- `POST /api/orders` - Create new order
- `GET /api/orders/:id` - Get order status
- `POST /api/cart/sync` - Sync cart with server

**Query Key Factory**:
\`\`\`typescript
export const queryKeys = {
  products: {
    all: ['products'] as const,
    lists: () => [...queryKeys.products.all, 'list'] as const,
    list: (filters: ProductFilters) => 
      [...queryKeys.products.lists(), filters] as const,
    details: () => [...queryKeys.products.all, 'detail'] as const,
    detail: (id: string) => 
      [...queryKeys.products.details(), id] as const,
  },
  cart: {
    all: ['cart'] as const,
    current: () => [...queryKeys.cart.all, 'current'] as const,
  },
  orders: {
    all: ['orders'] as const,
    lists: () => [...queryKeys.orders.all, 'list'] as const,
    details: () => [...queryKeys.orders.all, 'detail'] as const,
    detail: (id: string) => 
      [...queryKeys.orders.details(), id] as const,
  },
}
\`\`\`

## Performance Optimization

### Loading Strategies

1. **Image Optimization**:
   - NextJS Image component with lazy loading
   - WebP format with fallbacks
   - Responsive image sizes
   - Blur placeholder for better UX

2. **Code Splitting**:
   - Route-based splitting via Tanstack Router
   - Dynamic imports for heavy components
   - Lazy loading for below-the-fold content

3. **Caching Strategy**:
   - Tanstack Query automatic caching
   - Stale-while-revalidate for product data
   - Optimistic updates for cart operations
   - Service worker for offline support (future)

4. **Bundle Optimization**:
   - Tree shaking unused code
   - Minimize third-party dependencies
   - Bundle analysis and monitoring

## Security Considerations

### Data Protection

- HTTPS enforcement
- Secure cookie handling
- XSS prevention via input sanitization
- CSRF protection for mutations
- Rate limiting on API endpoints

### Payment Security

- PCI DSS compliance via Nhanh.vn
- No credit card data stored locally
- Secure payment gateway integration
- Order verification and fraud detection

## Accessibility

### WCAG 2.1 AA Compliance

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast ratios (4.5:1 minimum)
- Focus indicators
- Alt text for all images
- Form labels and error messages

## Responsive Design

### Breakpoints

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large Desktop: 1440px+

### Mobile-First Approach

- Touch-friendly UI elements (min 44x44px)
- Simplified navigation for mobile
- Optimized images for mobile bandwidth
- Bottom navigation for key actions
- Swipe gestures for product galleries

## Error Handling

### User-Facing Errors

- Friendly error messages
- Actionable error recovery steps
- Fallback UI for failed data loading
- Toast notifications for transient errors
- Error boundary for critical failures

### Developer Experience

- Detailed error logging
- Error tracking integration (Sentry)
- API error standardization
- Type-safe error handling

## Testing Strategy

### Testing Pyramid

1. **Unit Tests**: Components, utilities, hooks
2. **Integration Tests**: API integration, form flows
3. **E2E Tests**: Critical user journeys (checkout flow)
4. **Visual Regression**: Component visual consistency

### Key Test Scenarios

- Product browsing and filtering
- Add to cart and cart management
- Checkout flow completion
- Form validation
- Error handling
- Responsive design
- Accessibility compliance

## Deployment Architecture

### Hosting

- **Platform**: Vercel (recommended for NextJS)
- **CDN**: Automatic via Vercel Edge Network
- **Database**: Nhanh.vn backend
- **Images**: Vercel Blob or external CDN

### CI/CD Pipeline

1. Code push to GitHub
2. Automated tests run
3. Build and type checking
4. Preview deployment for PRs
5. Production deployment on merge to main

### Monitoring

- Performance monitoring (Vercel Analytics)
- Error tracking (Sentry)
- User analytics (Google Analytics)
- Uptime monitoring

## Future Enhancements

### Phase 2 Features

- User authentication and accounts
- Order history and tracking
- Wishlist functionality
- Product reviews and ratings
- Advanced search with filters
- Personalized recommendations

### Phase 3 Features

- Loyalty program
- Mobile app (React Native)
- Live chat support
- AR product preview
- Social commerce integration
- Multi-language support

---

**Document Version**: 1.0  
**Last Updated**: 2025-01-10  
**Status**: Draft

# Nhanh.vn API Integration Guide

## Overview

This application integrates with Nhanh.vn API for:
- Product management and inventory
- Order processing and fulfillment
- Shipping fee calculation
- Location data (cities, districts, wards)

## Configuration

### Environment Variables

Add these to your `.env.local` file:

\`\`\`env
NHANH_STORE_ID=your_store_id
NHANH_API_KEY=your_api_key
NHANH_SECRET_KEY=your_secret_key
\`\`\`

### Getting API Credentials

1. Log in to your Nhanh.vn account
2. Go to Settings > API Integration
3. Generate API Key and Secret Key
4. Copy your Store ID from the dashboard

## API Endpoints

### Products

- **GET /api/products** - Get products with filters
- **GET /api/products/[id]** - Get single product

### Orders

- **POST /api/orders** - Create new order
- **GET /api/orders** - Get user orders
- **GET /api/orders/[id]** - Get order details

## Features

### Product Sync

Products are fetched from Nhanh.vn in real-time with:
- Automatic inventory updates
- Price synchronization
- Category mapping
- Image management

### Order Processing

Orders are created in Nhanh.vn with:
- Customer information
- Product details and quantities
- Shipping address
- Payment method
- Order notes

### Fallback Mode

If Nhanh.vn API is not configured or fails:
- Application uses mock data
- All features remain functional
- No disruption to user experience

## Category Mapping

Map your Nhanh.vn categories to application categories in \`lib/api/nhanh-products.ts\`:

\`\`\`typescript
const categoryMap = {
  "1": "clothing",      // Your Nhanh category ID for clothing
  "2": "accessories",   // Your Nhanh category ID for accessories
  "3": "utilities",     // Your Nhanh category ID for utilities
  "4": "camping",       // Your Nhanh category ID for camping
}
\`\`\`

## Testing

1. **Without API**: Application works with mock data
2. **With API**: Configure environment variables and test:
   - Product listing
   - Product details
   - Order creation
   - Shipping calculation

## Support

For Nhanh.vn API documentation: https://nhanh.vn/api/
For issues: Contact Nhanh.vn support or check application logs
\`\`\`

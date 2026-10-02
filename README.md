# E-Commerce 2K23 CSM 26 — Sprint 2 Implementation

Node.js + Express.js + MongoDB + JWT implementation for the Sprint 2 catalog data foundation.

## Setup

1. Install Node.js 18+ and MongoDB.
2. Run `npm install`.
3. Copy `.env.example` to `.env` and change `JWT_SECRET` and admin credentials.
4. Start MongoDB.
5. Run `npm run seed` (add the script if desired: `node backend/seeders/catalogSeeder.js`) or run `node backend/seeders/catalogSeeder.js` directly.
6. Start with `npm run dev` or `npm start`.

## Test

`npm test`

## API

- `POST /api/v1/auth/login`
- `POST /api/v1/admin/categories`
- `GET /api/v1/admin/categories`
- `PATCH /api/v1/admin/categories/:id`
- `DELETE /api/v1/admin/categories/:id`
- `POST /api/v1/admin/products`
- `GET /api/v1/admin/products`
- `PATCH /api/v1/admin/products/:id`
- `POST /api/v1/admin/products/:id/variants`
- `POST /api/v1/admin/products/:id/skus`
- `PATCH /api/v1/admin/skus/:id`

Do not commit `.env` or secrets.

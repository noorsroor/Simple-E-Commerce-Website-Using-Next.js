# Simple-E-Commerce-Website-Using-Next.js

## Overview
This is a simple e-commerce website built using Next.js. It includes product listing, product details, and an About Us page with optimized SEO.

## Features
- **Home Page (`/`)**: Displays a welcome message and navigation links.
- **Products Page (`/products`)**: Lists all products with name and price.
- **Product Details Page (`/products/[id]`)**: Dynamic page showing detailed information with an "Add to Cart" button.
- **Custom 404 Page (`/404`)**: Displays a message and link to go back to the home page.
- **About Us Page (`/about`)**: Includes an image using Next.js Image component.
- **SEO Optimization**: Uses `<Head>` for better search engine visibility.
- **Styled with Tailwind CSS**: Responsive and modern design.
- **Data Fetching**: Implements SSR, SSG, and ISR for fetching product data.
- **Client & Server Components**: Optimized use of components for performance.

## Installation & Setup

### 1. Clone the repository:
```sh
git clone https://github.com/noorsroor/Simple-E-Commerce-Website-Using-Next.js.git
cd my-app
```

### 2. Install dependencies:
```sh
npm install
# or
yarn install
```

### 3. Start the development server:
```sh
npm run dev
# or
yarn dev
```

## Data Fetching Strategies
- **SSR (Server Side Rendering)**: Used for dynamic pages like `/products` to fetch data at request time.
- **SSG (Static Site Generation)**: Used for static pages that don't change often.
- **ISR (Incremental Static Regeneration)**: Enables on-demand page updates.

## Project Structure
```
/nextjs-ecommerce
│── pages
│   ├── page.js           # Home Page
│   ├── products
│   │   ├── page.js       # Products List Page (SSR)
│   │   ├── [id]
|   |       ├──page.js     # Product Details Page (Dynamic Routing)
│   ├── about.js           # About Us Page
│   ├── not-found.js             # Custom 404 Page
│── components
│   ├── Navbar.js          # Navigation Bar
│   ├── ProductCard.js     # Product Card Component
│── styles
│   ├── globals.css        # Global Styles
│── public
│   ├── images             # Static Images
│── utils
│   ├── api.js             # API Fetching Functions
│── next.config.js         # Next.js Configurations
│── package.json           # Project Dependencies
```




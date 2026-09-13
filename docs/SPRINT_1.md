## Section 1: Target Audience & Market Focus

**Primary Persona:**  
Avid fiction and non-fiction readers, literature enthusiasts, students, and casual book buyers looking for physical novels across diverse genres.

**User Profile:**  
Digital-savvy readers who prefer browsing, discovering, and purchasing physical novels online. They value detailed book synopses, author information, reader reviews, genre filtering, and flexible delivery options.

**Core Pain Point:**  
Local physical bookstores often have limited stock, lack niche genres, or fail to carry the latest releases and specific translations. Additionally, readers lack a single intuitive digital platform to discover new releases, read verified community reviews, and order physical copies directly to their doorstep.

**Domain Scope:**  
**Vertical Market:** E-Commerce & Retail (Books, Novels, and Literary Media).

**Catalog Focus:**  
* **Non-Fiction & Classics:** Literary classics, memoirs, self-help, and popular non-fiction.
* **Special Collections:** Author-signed editions, box sets, and curated bestseller lists.


## Section 2: Minimum Viable Product (MVP) Feature Scope

The Minimum Viable Product (MVP) focuses on core user workflows necessary for browsing, searching, reviewing, purchasing, and managing physical novel orders within the system scope.

| Category | Feature Name | Description | Priority |
| :--- | :--- | :--- | :--- |
| **Authentication** | User Registration & Authentication | Secure user sign-up, login, and session handling using password hashing and JWT-based authentication. Supports reader profile management. | High (MVP) |
| **Catalog** | Book Browsing & Search | Interactive novel catalog with genre-based filtering, author searches, pricing filters, and keyword search functionality. | High (MVP) |
| **Reviews** | Book Reviews & Ratings | Reader rating and review system on product pages allowing verified users to leave star ratings and textual feedback. | High (MVP) |
| **Cart** | Shopping Cart Management | Persistent shopping cart enabling users to add novels, modify quantities, view item subtotals, and remove titles before checking out. | High (MVP) |
| **Checkout** | Order Processing & Payment | Multi-step checkout system for capturing shipping addresses, calculating shipping fees, and executing mock/Stripe payment gateway transactions. | High (MVP) |
| **Admin** | Inventory & Novel Management | Administrative dashboard for store managers to conduct CRUD operations on novel metadata (author, genre, ISBN, price, stock levels). | Medium |

## Section 3: Tech Stack Selection & Justification

### Frontend Framework: HTML, CSS, JavaScript (Bootstrap)
* **Selected Technology**: HTML5, CSS3, JavaScript (Vanilla / Bootstrap)
* **Justification**: Using HTML, CSS, and Bootstrap enables rapid, lightweight development of responsive web layouts without the overhead of complex build tools. It provides standard UI components for building clean book display grids, detailed synopsis viewports, and mobile-friendly shopping cart interfaces.

### Backend Infrastructure: Node.js with Express
* **Selected Technology**: Node.js / Express.js
* **Justification**: Node.js handles concurrent web requests efficiently using an event-driven, non-blocking I/O model. Express simplifies backend routing and REST API design for querying book catalogs, processing customer reviews, and managing user carts.

### Database Management System: MongoDB (NoSQL)
* **Selected Technology**: MongoDB
* **Justification**: MongoDB’s document-based structure maps directly to novel catalog metadata, easily storing varying fields like ISBN, multiple author credits, genres, page counts, and user review arrays in JSON-like documents. Its flexible schema allows adding new book attributes without complex database migration scripts.

### Authentication & Payment Integration
* **Authentication**: JSON Web Tokens (JWT) for secure, stateless user session authorization and identity management.
* **Payment Processing**: Stripe API (Test Mode) for handling payment gateway processing, transaction verification, and order confirmation.

## Section 4: Entity-Relationship Diagram (ERD)

### Database Schema Overview
The relational schema models the core entities required for the novel e-commerce platform: user authentication, book catalog management, genres, reader reviews, shopping carts, and order processing.

```mermaid
erDiagram
    USERS ||--o{ ORDERS : places
    USERS ||--o{ CART : owns
    USERS ||--o{ REVIEWS : writes
    GENRES ||--o{ BOOKS : categorizes
    BOOKS ||--o{ REVIEWS : receives
    BOOKS ||--o{ ORDER_ITEMS : included_in
    BOOKS ||--o{ CART_ITEMS : contains
    ORDERS ||--|{ ORDER_ITEMS : consists_of
    CART ||--o{ CART_ITEMS : holds

    USERS {
        int id PK
        string full_name
        string email
        string password_hash
        string role
        string created_at
    }

    GENRES {
        int id PK
        string name
        string description
    }

    BOOKS {
        int id PK
        int genre_id FK
        string title
        string author
        string isbn
        decimal price
        int stock_quantity
        string cover_image_url
        string created_at
    }

    REVIEWS {
        int id PK
        int user_id FK
        int book_id FK
        int rating
        string comment
        string created_at
    }

    CART {
        int id PK
        int user_id FK
        string updated_at
    }

    CART_ITEMS {
        int id PK
        int cart_id FK
        int book_id FK
        int quantity
    }

    ORDERS {
        int id PK
        int user_id FK
        decimal total_amount
        string order_status
        string payment_status
        string created_at
    }

    ORDER_ITEMS {
        int id PK
        int order_id FK
        int book_id FK
        int quantity
        decimal unit_price
    }


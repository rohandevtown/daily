# Library Managment System

## Rouets and Endpoints

### /users

POST: Create a new user
GET: Get all list of users

### /users/{id}

GET: Get a user by ID
PUT: Update a user by ID
DELETE: Delete a user by ID (check if user has any issued books) & (check if user have any fine to be paid)

#### Subscriptions

    >> 3 months
    >> 6 months
    >> 12 months

### /users/subscription-details/{id}

GET: Get user subscription details >> Date of subscription >> Till when its valid >> Fine if any exists

#### /books

GET: Get all books
POST: Create/Add a new book

#### /books/{id}

GET: Get a book by ID
PUT: Upadte a book by ID

#### /books/issued

GET: Get all issued books

#### /books/issued/withFine

GET: Get all issued books with fine

# Subscription Types

    >> Basic (3 months)
    >> Standard (6 months)
    >> Premium (12 months)


MVC Architecture: 
    >> Model (Structure od MongoDb Collection/Schema)
    >> Views (React)
    >> Controllers (Brain of our routes)


React?
    >> SPA (Single Page Application) => Your entire appln contains only single HTML Page
    >> Virtual DOM  
    >> Components
            >> Class Component (Old)
            >> Function Component
    >> Props

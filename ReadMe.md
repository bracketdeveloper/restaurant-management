# Restaurant Management App 🍽️

A full-featured restaurant management application built with Vue.js, allowing users to register, authenticate, and manage their restaurants with complete CRUD functionality.

## 📋 Features

- **User Authentication**
  - User registration with form validation
  - Secure login with password hashing (bcryptjs)
  - Email duplication check
  - Session management with localStorage
  - Automatic redirects based on authentication state

- **Restaurant Management**
  - Add new restaurants (with duplicate prevention per user)
  - View all restaurants for logged-in user
  - Edit restaurant details
  - Delete restaurants
  - User-specific restaurant filtering

- **User Management**
  - View all registered users
  - Display restaurant count per user
  - User data in table format

- **Additional Pages**
  - Home page with user's restaurant list
  - About Us page
  - Contact Us page
  - Responsive design with Bootstrap

## 🛠️ Technologies Used

- **Frontend Framework:** Vue.js 3
- **Routing:** vue-router
- **HTTP Client:** Axios
- **Backend API:** JSON Server
- **Password Security:** bcryptjs
- **Styling:** Bootstrap 5
- **State Management:** Vue Composition API / Options API

## 📁 Project Structure

```
restaurant-management-app/
├── src/
│   ├── components/
│   │   ├── static/
│   │   │   ├── HeaderComponent.vue
│   │   │   └── FooterComponent.vue
│   │   ├── SignUpComponent.vue
│   │   ├── SignInComponent.vue
│   │   ├── HomeComponent.vue
│   │   ├── UsersComponent.vue
│   │   ├── AboutUsComponent.vue
│   │   ├── ContactUsComponent.vue
│   │   ├── AddRestaurantComponent.vue
│   │   ├── EditRestaurantComponent.vue
│   │   └── functions.js
│   ├── assets/
│   │   ├── logo.png
│   │   ├── signUp.png
│   │   ├── restaurant.png
│   │   └── about-us.png
│   ├── routes.js
│   ├── App.vue
│   └── main.js
├── public/
│   ├── index.html
│   └── favicon.ico
├── db/
│   └── db.json
├── package.json
├── vue.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone  https://github.com/bracketdeveloper/restaurant-management.git
   cd restaurant-management-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install required packages**
   ```bash
   npm install vue-router axios bcryptjs
   npm install -g json-server
   ```

4. **Setup Bootstrap in Vue.js**
   
   Follow this tutorial to integrate Bootstrap:
   ```
   https://www.youtube.com/watch?v=oZ9zlS5V5WU
   ```

### Setting up JSON Server

1. **Create the database folder and file**
   ```bash
   mkdir db
   cd db
   touch db.json
   ```

2. **Add the following content to `db/db.json`**
   ```json
   {
     "users": [],
     "restaurants": []
   }
   ```

3. **Start JSON Server**
   ```bash
   json-server --watch db/db.json --port 3000
   ```

   The API will be available at `http://localhost:3000`

   **Available endpoints:**
   - GET/POST `http://localhost:3000/users`
   - GET/POST/PUT/DELETE `http://localhost:3000/restaurants`

### Running the Application

1. **Start the development server**
   ```bash
   npm run serve
   ```

2. **Open your browser**
   Navigate to `http://localhost:8080`

3. **Make sure JSON Server is running**
   In a separate terminal, ensure JSON Server is running on port 3000

## 📄 Pages Overview

### 1. **Sign Up Page**
- User registration form with validation
- Fields: Name, Email, Password, Confirm Password
- Email duplication check
- Password hashing before storage
- Automatic redirect to home after successful registration

### 2. **Sign In Page**
- User login form
- Email and password validation
- Authentication against stored users
- localStorage session management
- Redirect to home on successful login

### 3. **Home Page**
- Displays all restaurants added by the logged-in user
- Add new restaurant functionality
- Edit existing restaurants
- Delete restaurants
- User-specific filtering (prevents duplicate restaurants per user)

### 4. **Users Page**
- Table displaying all registered users
- Shows user information (Name, Email)
- Displays restaurant count for each user
- Read-only view of system users

### 5. **About Us Page**
- Information about the application
- Purpose and features overview

### 6. **Contact Us Page**
- Contact information
- User inquiry form (if implemented)

### 7. **Header & Footer**
- Static header with navigation (using Vue Teleport)
- Conditional navigation based on authentication state
- Sign out functionality
- Static footer (using Vue Teleport)

## 🔑 Key Functionalities

### Authentication Flow
1. User signs up → Data saved in JSON Server → localStorage set → Redirect to home
2. User signs in → Credentials verified → localStorage set → Redirect to home
3. User signs out → localStorage cleared → Redirect to sign in page

### Restaurant Management Flow
1. Add restaurant → Check for duplicates (user_id) → Save to JSON Server → Display on home
2. Edit restaurant → Load data → Update → Save changes → Refresh list
3. Delete restaurant → Confirm → Remove from JSON Server → Update display

### Page Access Control
- `mounted()` lifecycle hook checks localStorage
- Redirects unauthenticated users to sign in page
- Redirects authenticated users away from sign in/up pages

## 📦 API Structure

### Users Endpoint
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "password": "hashedPassword123"
}
```

### Restaurants Endpoint
```json
{
  "id": 1,
  "name": "Pizza Paradise",
  "address": "123 Main St",
  "contact": "555-1234",
  "user_id": 1
}
```

## 🧰 Utility Functions (functions.js)

Centralized functions for:
- Form validation
- API calls (GET, POST, PUT, DELETE)
- Authentication checks
- localStorage management
- Route protection
- Data formatting

## 🔒 Security Features

- Password hashing with bcryptjs
- Email uniqueness validation
- User-specific data access
- Session management with localStorage
- Protected routes based on authentication state

## 🎨 Styling

- Bootstrap 5 for responsive design
- Custom CSS for component styling
- Mobile-friendly interface
- Consistent design across all pages

## 📝 Future Enhancements

- Role-based access control (Admin/User)
- Restaurant categories and tags
- Image upload for restaurants
- Advanced search and filtering
- Email verification
- Password recovery
- Backend migration from JSON Server to a real database
- Deployment to production

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](https://github.com/bracketdeveloper/restaurant-management?tab=MIT-1-ov-file).


## 👨‍💻 Author

Built as part of a Vue.js learning journey - turning theory into practice.

---

**Happy Coding! 🚀**
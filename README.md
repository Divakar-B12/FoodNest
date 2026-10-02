# 🍔 FoodNest – Food Ordering Website

A modern, responsive food ordering website developed using **React.js** and **Vite**. The application allows users to explore food items, browse different food categories, add items to the cart, place orders, and access a Sign In / Sign Up popup through a clean and user-friendly interface.

## 🚀 Features

- 📱 Fully responsive design
- 🏠 Home page with food menu and food items
- 🍽️ Explore different food categories
- 🛒 Add food items to the cart
- ➕ Increase and decrease food quantities
- 🗑️ Remove food items from the cart
- 📦 Place Order page
- 🔐 Sign In / Sign Up popup
- 🧩 Reusable React components
- 🗂️ Global cart state management using Context API
- 🧭 Navigation between different pages
- ⚡ Fast development with Vite
- 🎨 Custom CSS styling
- 📱 Optimized for desktop, tablet, and mobile devices

## 🛠️ Technologies Used

- **React.js**
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**
- **Vite**
- **Context API**
- **React Hooks**

## 📂 Project Structure

```text
foodnest/
│
├── public/
│
├── src/
│   ├── assets/
│   │   ├── admin_assets/
│   │   └── frontend_assets/
│   │
│   ├── components/
│   │   ├── AppDownload/
│   │   │   ├── AppDownload.jsx
│   │   │   └── AppDownload.css
│   │   │
│   │   ├── ExploreMenu/
│   │   │   ├── ExploreMenu.jsx
│   │   │   └── ExploreMenu.css
│   │   │
│   │   ├── FoodDisplay/
│   │   │   ├── FoodDisplay.jsx
│   │   │   └── FoodDisplay.css
│   │   │
│   │   ├── FoodItem/
│   │   │   └── FoodItem.jsx
│   │   │
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   │
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   │
│   │   ├── LoginPopup/
│   │   │   ├── LoginPopup.jsx
│   │   │   └── LoginPopup.css
│   │   │
│   │   └── Navbar/
│   │       ├── Navbar.jsx
│   │       └── Navbar.css
│   │
│   ├── Context/
│   │   └── StoreContext.jsx
│   │
│   ├── pages/
│   │   ├── Cart/
│   │   │   ├── Cart.jsx
│   │   │   └── Cart.css
│   │   │
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.css
│   │   │
│   │   └── PlaceOrder/
│   │       ├── PlaceOrder.jsx
│   │       └── PlaceOrder.css
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
└── README.md
```

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/FoodNest.git
```

### 2. Navigate to the Project

```bash
cd FoodNest
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will usually be available at:

```text
http://localhost:5173
```

## 🧠 React Concepts Used

This project helped me practice and understand several important React concepts.

### React Components

The application is divided into reusable components such as:

- `Navbar`
- `Header`
- `ExploreMenu`
- `FoodDisplay`
- `FoodItem`
- `LoginPopup`
- `AppDownload`
- `Footer`

### React Hooks

The project uses React Hooks for managing component state and application behavior.

- `useState`
- `useContext`

### Context API

The `StoreContext` is used to manage shared application state, particularly the food cart.

It allows different components to access and update cart data without passing props through multiple component levels.

## 🧩 Main Components

| Component | Purpose |
|---|---|
| `Navbar` | Website navigation and cart/login actions |
| `Header` | Main hero section of the website |
| `ExploreMenu` | Displays different food categories |
| `FoodDisplay` | Displays food items based on the selected category |
| `FoodItem` | Displays individual food items and cart actions |
| `LoginPopup` | Sign In / Sign Up interface |
| `AppDownload` | Mobile application promotion section |
| `Footer` | Website footer and additional information |

## 📄 Main Pages

| Page | Purpose |
|---|---|
| `Home` | Displays the main food ordering interface |
| `Cart` | Displays selected food items and cart details |
| `PlaceOrder` | Allows users to enter order details and place an order |

## 🛒 Cart Functionality

The shopping cart allows users to:

- Add food items
- Increase item quantity
- Decrease item quantity
- Remove items
- View selected items
- Calculate cart-related information
- Proceed to the order page

The cart state is managed centrally using the **Context API**.

## 🔐 Sign In / Sign Up

FoodNest includes a popup-based authentication interface that allows users to switch between:

- Sign In
- Sign Up

The popup is implemented as a reusable React component.

## 📱 Responsive Design

The website is designed to provide a consistent user experience across different screen sizes.

- 💻 Desktop
- 📱 Mobile
- 📲 Tablet

CSS media queries and responsive layouts are used to adapt the navigation, food items, images, buttons, and other components for different devices.

## 🎯 What I Learned

While developing this project, I learned and practiced:

- Building a React.js application from scratch
- Creating reusable React components
- Using React Hooks
- Managing state using `useState`
- Managing global state using Context API
- Using `useContext`
- Passing data between components
- Conditional rendering
- Handling click events
- Building cart functionality
- Managing food item quantities
- Structuring React applications
- Creating responsive layouts using CSS
- Working with Vite
- Building a real-world frontend project

## 🌐 Deployment

The project can be deployed using platforms such as:

- **Vercel**

## 🔗 Live Website

**Live Demo:**  
Add your deployed Vercel URL here.

```text
https://your-foodnest-project.vercel.app
```

## 👨‍💻 Developer

### Divakar

Frontend Developer specializing in **React.js** and modern web development.

**Portfolio:**  
Add your portfolio URL here.

This project was developed as a **React.js food ordering website** to practice modern frontend development, component architecture, state management, and responsive web design.

© 2026 FoodNest. All rights reserved.

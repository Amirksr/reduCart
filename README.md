# 🛒 reduCart

**reduCart** is a simple and elegant shopping cart application built with **React** and **Redux**. The main purpose of this project is to **refactor the reducer logic using safe immutability techniques** (like `.map()` and object spread) to ensure clean and predictable state updates.

## 🎯 Project Objectives

- Refactor Redux reducers using **safe immutable patterns** to prevent direct state mutations.
- Improve **code clarity** and **maintainability** by organizing the project into modular components and folders.
- Demonstrate best practices in **React state management** using Redux.

## 🚀 Live Demo

Check out the live version of the project here: [reduCart Demo on Vercel](https://redu-cart.vercel.app)

## 🛠️ Tech Stack

- **React** — UI Library  
- **Redux (Vanilla)** — Global state management  
- **Vite** — Development server and bundler  
- **JavaScript (ES6)**  
- **CSS Modules** — For scoped and modular styles  

## 📁 Folder Structure

```
reduCart/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── index.css
│   ├── db.js
│   ├── Redux/
│   │   ├── store.js
│   │   └── reducer.js
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── cart/
│   │   │   ├── Cart.jsx
│   │   │   ├── Cart.css
│   │   │   ├── ProductItemInCart.jsx
│   │   │   └── ProductItemInCart.css
│   │   ├── footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   └── products/
│   │       ├── ProductItem.jsx
│   │       ├── ProductItem.css
│   │       ├── ProductsList.jsx
│   │       └── ProductsList.css
│   ├── pages/
│   │   ├── home/
│   │   │   ├── HomePage.jsx
│   │   │   └── HomePage.css
│   │   └── cart/
│   │       ├── CartPage.jsx
│   │       └── CartPage.css
├── index.html
├── vite.config.js
├── package.json
├── package-lock.json
├── eslint.config.js
└── .gitignore
```

## 🔍 Reducer Refactoring

The reducer logic in `src/Redux/reducer.js` has been **refactored using `.map()` and object spread syntax** to create new references for updated data. This technique:

- Ensures immutability of state
- Prevents accidental state mutation
- Supports Redux principles for pure reducer functions
- Makes debugging and testing more reliable

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Amirksr/reduCart.git
cd reduCart
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open your browser at [http://localhost:5173](http://localhost:5173)

## 📌 Features

- Browse and view products
- Add or remove products from the cart
- Adjust product quantities
- Responsive and modular UI components
- Immutability ensured using `.map()` and object spread

## 🚧 Future Improvements

- Add persistent cart storage with localStorage
- Integrate product search and filters
- Improve accessibility and animations
- Add backend integration (e.g., Firebase or Express)

## 🤝 Contribution

Feel free to fork this repository, open issues, or submit PRs to help improve the project!

## 📄 License

This project is licensed under the MIT License.

**Made with ❤️ using React & Redux**

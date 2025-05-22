# 🛒 reduCart

**reduCart** is a simple and elegant shopping cart application built with **React** and **Redux**. The main purpose of this project is to **refactor the reducer logic using deep copy concepts** to ensure state immutability and maintain cleaner state transitions.

## 🎯 Project Objectives

- Refactor Redux reducers using **deep copy** to prevent direct state mutations.
- Improve **code clarity** and **maintainability** by organizing the project into modular components and folders.
- Demonstrate best practices in **React state management** using Redux.

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

## 🔍 Deep Copy Refactoring

The heart of this project lies in the file `src/Redux/reducer.js`, where the reducer logic has been **refactored using deep copy** (`JSON.parse(JSON.stringify(...))`) to avoid mutating nested objects within the state. This ensures:

- Predictable state updates
- Better debugging and testing
- Compliance with Redux best practices

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
- Deep copy based reducer logic

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

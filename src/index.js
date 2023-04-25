import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductsList from './ProductsList/ProductsList';
import ViewProduct from './ViewProduct/ViewProduct';
import NavBar from './NavBar/NavBar';
import LoginPage from './LoginPage/loginPage'
import RegisterPage from'./RegisterPage/RegisterPage';
import Orders from './Orders/Orders';
import Confirmation from './Confirmation/Confirmation';
import CartDetailsTest from './CartDetails/CartDetailsTest';
import CartPage from './ProductsList/CartPage';
import SeeMore from './LandingPage/SeeMore/SeeMore';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<App />} />
        <Route path='/login' exact element={<LoginPage />} />
        <Route path='/register' exact element={<RegisterPage />} />
        <Route path='/products' element={<ProductsList />} />
        <Route path='/view/:id' exact element={<ViewProduct />} />
        <Route path='https://main--iridescent-bienenstitch-136fba.netlify.app/orders' exact element={<Orders />} />
        <Route path='/cart' exact element={<CartPage />} />
        <Route path='/seemore/:email' exact element={<SeeMore />} />
        <Route path='/cartDetails/:bill'  element={<CartDetailsTest />} />
        <Route path='/confirmation/:email' exact element={<Confirmation />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

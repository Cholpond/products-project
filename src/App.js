import { useContext, useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponent from './components/CardComponent';
import { MyContext, MyContextProvider } from './context/MyContext';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import CheckoutForm from './components/CheckoutForm';



const App = () => {
  return (
    <MyContextProvider>
      <Navbar/>
      
      <Routes>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/:id" element={<ProductDetails/>}/>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/checkout" element={<CheckoutForm/>}/>
      {/* <Route path="/*" element={<Navigate to="/" />} /> */}
      </Routes>
      
    </MyContextProvider>
  );
}

export default App;

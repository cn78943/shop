import React, { useState, useEffect } from 'react';
import "./App.css";

import Category from './components/Category';
import Header from './components/Header';
import Products from './components/Products';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Cart from './components/Cart';


export default function App() {
  const [productList, setProductList] = useState([]);
  const [nowSelectedCategory, setSelectedCategory] = useState("");


  useEffect(() => {
    fetch('http://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProductList(data);
        // console.log(data);
      });
  }, []);

  const handleCategory = (category) => {
    setSelectedCategory(category);

    if (category === 'all') {
      fetch('http://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
          setProductList(data);
        });
    } else {
      fetch('http://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
          setProductList(data.filter(product => product.category === category));
        });

    }

  };

  return (
    <div className='App w-screen h-screen'>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Category productList={productList} setSelectedCategory={setSelectedCategory} selectedCategory={handleCategory} />
            <Products productList={productList} nowSelectedCategory={nowSelectedCategory} />
          </>
        } />

        <Route path="login" element={
          <>
            <Header />
            <Login />
          </>
        } />

        <Route path="cart" element={
          <>
            <Header />
            <Cart />
          </>
        } />

      </Routes>
    </div>
  )
}

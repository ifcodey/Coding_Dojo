import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Main from './views/Main';
import Product from './views/Product';
import UpdateProduct from './views/UpdateProduct'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/products/:id" element={<Product/>}/>
      <Route path="products/:id/edit" element={<UpdateProduct/>}/>
    </Routes>
  );
}

export default App;

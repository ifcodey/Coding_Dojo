import Main from './views/Main'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/products/:id" element={<Product />} />
    <Route path="/products/:id/edit" element={<UpdateProduct />} />
  </Routes>
  );
}

export default App;

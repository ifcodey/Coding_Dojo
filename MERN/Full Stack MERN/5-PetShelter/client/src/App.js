import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from './views/Main'
import Create from './views/Create'
import Update from './views/Update'
import ListProject from './components/ListProject'

function App() {
  return (
    <>
      <Routes>
        {/* -------Main--------- */}
        <Route path="/*" element={<Main />} />

        {/* -------Adding--------- */}
        <Route path="/pet/:id" element={<Create />} />

        {/* --------Updating-------- */}
        <Route path="/update/:id" element={<Update />} />

        {/* --------Detail-------- */}
        {/* <Route path="/details/:id" element={<Details />} /> */}

        {/* --------Status-------- */}
        {/* <Route path="/sts/game/:num" element={<Details />} /> */}

      </Routes>
      {/* 
      <Home path="/players/list"/>
      <Main path = "/players/list/new"/>
      <Status path="/sts/game/:num"/>
      <Details path ="/details/:id"/>
      <Update path="/update/:id"/> */}
    </>
  );
}

export default App;

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./views/Main";
import Create from "./views/Create";
import Detail from "./views/Detail";
import VoteDetails from "./views/Detail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/competitions/new" element={<Create />} />
        <Route path="/competitions/:id" element={<Detail />} />
        <Route path="/competition/:id/edit" element={<Update />} />
        <Route path="/votes/:id" element={<VoteDetails />} />
      </Routes>
    </>
  );
}

export default App;

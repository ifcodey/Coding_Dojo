import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./views/Main";
import Create from "./views/Create";
import PlayerStatus from "./views/PlayerStatus";

function App() {
  return (
    <>
      <Routes>
        {/* -------Main--------- */}
        <Route path="/*" element={<Main />} />

        {/* -------Adding--------- */}
        <Route path="/player/:id" element={<Create />} />

        {/* --------Updating-------- */}
        <Route path="/status/:id/game" element={<PlayerStatus />} />
      </Routes>
    </>
  );
}

export default App;

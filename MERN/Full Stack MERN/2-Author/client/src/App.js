import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./views/Main";
import Create from "./views/Create";
import Update from "./views/Update";
import "./App.css";

function App() {
  const [authors, setAuthors] = useState([]);
  const [errors, setErrors] = useState([]);
  
  return (
    <>
      <Routes>
        {/* -------Main--------- */}
        <Route
          path="/*"
          element={<Main authors={authors} setAuthors={setAuthors} />}
        />

        {/* -------AddAuthor--------- */}
        <Route
          path="/authors/:id"
          element={
            <Create
              authors={authors}
              setAuthors={setAuthors}
              errors={errors}
              setErrors={setErrors}
            />
          }
        />

        {/* --------UpdateAuthor-------- */}
        <Route
          path="/authors/:id/edit"
          element={
            <Update
              authors={authors}
              setAuthors={setAuthors}
              errors={errors}
              setErrors={setErrors}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;

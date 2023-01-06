import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./views/Main";
import Create from "./views/Create";
import DetailVote from "./components/DetailVote";


function App() {
  const [errors, setErrors] = useState([]);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [competitoner, setCompetitoner] = useState([]);

  return (
    <>
      <Routes>
        {/* -------Main--------- */}
        <Route path="/*" element={<Main competitoner={competitoner} setCompetitoner={setCompetitoner} />} />

        {/* -------Adding--------- */}
        <Route path="/vote/new" element={<Create errors={errors} setErrors={setErrors}
          counter1={counter1} counter2={counter2} counter3={counter3} />} />

        {/* --------DetailVote-------- */}
        <Route path="/counter/:id" element={<DetailVote errors={errors} setErrors={setErrors}
          counter1={counter1} setCounter1={setCounter1}
          counter2={counter2} setCounter2={setCounter2}
          counter3={counter3} setCounter3={setCounter3}
          competitoner={competitoner} setCompetitoner={setCompetitoner} />} />
      </Routes>
    </>
  );
}

export default App;

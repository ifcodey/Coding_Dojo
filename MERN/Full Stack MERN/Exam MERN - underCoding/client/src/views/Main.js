import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import CompList from '../components/CompList';

const Main = (props) => {
    const [errors, setErrors] = useState([]);
    const [competitoner, setCompetitoner] = useState([]);


    const removeFromDom = (compId) => {
        setCompetitoner(competitoner.filter((comp) => comp._id != compId));
    };


    return (
        <div>
            <Header />
            <CompList
                competitoner={competitoner}
                setCompetitoner={setCompetitoner}
                removeFromDom={removeFromDom}
                errors={errors}
            />
        </div>
    );
};

export default Main;
import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import ListVote from '../components/ListVote';

const Main = (props) => {
    const { competitoner, setCompetitoner } = props;

    const removeFromDom = (compId) => {
        setCompetitoner(competitoner.filter((comp) => comp._id != compId));
    };

    return (
        <div>
            <Header />

            <ListVote
                competitoner={competitoner}
                setCompetitoner={setCompetitoner}
                removeFromDom={removeFromDom}
            />
        </div>
    );
};

export default Main;






// const [questions, setQuestions] = useState([]);
// const [country1, setCountry1] = useState([]);
// const [country2, setCountry2] = useState([]);
// const [country3, setCountry3] = useState([]);

// questions = { questions }
// setQuestions = { setQuestions }
// country1 = { country1 }
// country2 = { country2 }
// country3 = { country3 }
// setCountry1 = { setCountry1 }
// setCountry2 = { setCountry2 }
// setCountry3 = { setCountry3 }
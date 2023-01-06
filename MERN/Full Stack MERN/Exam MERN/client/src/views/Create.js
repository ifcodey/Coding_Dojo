import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import FormData from "../components/FromData";
import Header from "../components/Header";

const Create = (props) => {
    // Get props from App.js.
    const [competitoner, setCompetitoner] = useState([]);
    const { errors, setErrors, counter1, counter2, counter3 } = props;

    let navigate = useNavigate();

    // Post a data from form to controller.
    const handleCreate = (createCompetition) => {
        axios
            .post("http://localhost:8000/vote/new", createCompetition)
            .then((res) => {
                console.log(res);
                setCompetitoner([...competitoner, res.data]);
                navigate("/");
            })
            .catch((err) => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            });
    };

    return (
        <div>
            <Header />
            <FormData
                initialQuestion=""
                initialCountry1=""
                initialCountry2=""
                initialCountry3=""
                counter1={counter1}
                counter2={counter2}
                counter3={counter3}
                onSubmitHandler={handleCreate}
                errors={errors}
            />
        </div>
    );
};

export default Create;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import FormData from "../components/FromData";
import Header from "../components/Header";

const Create = () => {
    const [competitoner, setCompetitoner] = useState([]);
    const [errors, setErrors] = useState([]);

    let navigate = useNavigate();

    // Post a data from form to controller.
    const handleCreate = (createCompetition) => {
        axios
            .post("http://localhost:8000/api/competitions/new", createCompetition)
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
                onSubmitHandler={handleCreate}
                errors={errors}
            />
        </div>
    );
};

export default Create;

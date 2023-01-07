import React, { useEffect, useState, navigate } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from 'axios';
import ListProject from "../components/ListProject";

const Main = () => {
    const [pets, setPets] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    let navigate = navigate

    useEffect(() => {
        axios.get('http://localhost:8000/api/Pets')
            .then(res => {
                setPets(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    const createPet = pet => {
        axios.post('http://localhost:8000/api/users/', pet)
            .then(res => {
                setPets([...pets, res.data]);
                navigate("/players/list")
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })

    }

    const removeFromDom = (petID) => {
        setPets(pets.filter((pet) => pet._id != petID));
    };

    return (
        <div>
            <Form onSubmitProp={createPlayer} initialName="" initialType="" initialDescreption="" initialSkillOne="" initialSkillTwo="" initialSkillThree="" >
                {errors.map((err, index) => <p key={index}>{err}</p>)}
            </Form>

            <hr />

        </div>
};

export default Main;
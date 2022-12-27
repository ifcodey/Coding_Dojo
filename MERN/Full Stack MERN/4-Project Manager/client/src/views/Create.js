import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, Link,useNavigate } from "react-router-dom";
import FormData from '../components/FromData'

const Create = () => {
    const [project, setProject] = useState([])
    const [errors, setErrors] = useState([])
    let navigate = useNavigate();
    
    const createProject = createProject => {
        axios.post('http://localhost:8000/projects/new', createProject)
            .then(res => {
                setProject([...project, res.data])
                navigate("/projects")
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }
    return (
        <div>
            <h2> a new Project</h2>
            <FormData handleSubmit={createProject} initialName="" initialDate="" errors={errors} />
        </div>
    )
}

export default Create

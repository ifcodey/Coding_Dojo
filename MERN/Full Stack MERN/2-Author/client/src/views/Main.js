import React, { useState } from 'react'
import { Router } from 'react-router-dom';
import FormAuthor from '../components/FormAuthor'

const Main = () => {
    const [name , setName] = useState("");
    const [names , setNames] = useState([]);
    const [error , setError] = useState([]);

    const onSubmitProp  = (content) =>{
        axios.post()
    }

    return (
        <div>
            <Router>
                <TableAuthors path="/" />
                <FormAuthor  onSubmitProp = {onSubmitProp} setName={setName} setNames={setNames} path="/new" />
            </Router>
        </div>
    )
}

export default Main

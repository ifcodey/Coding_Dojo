import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/Form";

const Edit = (props) => {
    const {_id} = useParams();
    const [form, setForm] = useState(false);

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pirates/${_id}`)
            .then(res=>{
                setForm(res.data.results);
            })
            .catch(err=> console.log(err))
    })

    return(
        <div>
            <h1>Edit Pirate Info:</h1>
            {
                form &&
                <Form formData={form} requestType="patch" submitURL={`http://localhost:8000/api/pirates/update/${_id}`}/>
            }
        </div>
    )
}

export default Edit;
import React from 'react';
import {Link} from 'react-router-dom';
import Form from '../components/Form';

const AddPirate = (props) => {
    const form = {
        name: "",
        imgURL: "",
        position: "Captain",
        treasures:"",
        phrase:"",
        pegLeg: false,
        eyePatch: false,
        handHook: false,
    }


    return (
        <div>
            <h1>Add a New Pirate</h1>
            <Form formData={form} className="" requestType="post" submitURL="http://localhost:8000/api/pirates/new"/>
            <Link to={'/'} className="btn btn-md btn-dark">Crew Board</Link>
        </div>
    )
}

export default AddPirate;
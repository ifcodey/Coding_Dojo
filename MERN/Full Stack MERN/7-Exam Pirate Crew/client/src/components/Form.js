import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = (props) => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: props.formData.name,
        imgURL: props.formData.imgURL,
        position: props.formData.position,
        treasures: props.formData.treasures,
        phrase: props.formData.phrase,
        pegLeg: props.formData.pegLeg,
        eyePatch: props.formData.eyePatch,
        handHook: props.formData.handHook
    })
    const [error, setError] = useState({});

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios[props.requestType](props.submitURL, form)
            .then(res => {
                console.log(res.data);

                if(res.data.results){
                    navigate('/');
                }
                else{
                    setError(res.data.error.errors);
                }
            })
            .catch(err=> console.log(err))
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
            <div className="form-group">
                    <label htmlFor="name">Pirate Name:</label>
                    <input type="text" name="name" className="form-control" onChange={onChangeHandler} value={form.name}/>
                    <span className="alert-danger">{error.name && error.name.message}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="position">Crew Position:</label>
                    <select className="form-select" name="position" onChange={onChangeHandler} value={form.position}>
                        <option>Select One</option>
                        <option value="captain">Captain</option>
                        <option value="firstMate">First Mate</option>
                        <option value="quarterMaster">Quarter Master</option>
                        <option value="boatswain">Boatswain</option>
                        <option value="powderMonkey">Powder Monkey</option>
                    </select>
                    <span className="alert-danger">{error.position && error.position.message}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="imgURL">Image URL:</label>
                    <input type="text" name="imgURL" className="form-control" onChange={onChangeHandler} value={form.imgURL}/>
                    <span className="alert-danger">{error.imgURL && error.imgURL.message}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="treasures"># of Treasure Chests:</label>
                    <input type="number" name="treasures" className="form-control" onChange={onChangeHandler} value={form.treasures}/>
                    <span className="alert-danger">{error.treasures && error.treasures.message}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="phrase">Pirate Catch Phrase:</label>
                    <input type="text" name="phrase" className="form-control" place-holder ="catch phrase "onChange={onChangeHandler} value={form.phrase}/>
                    <span className="alert-danger">{error.phrase && error.phrase.message}</span>
                </div>
                <div className="form-group">
                <p>Peg Leg</p>
                    <input type ="checkbox" name="pegLeg" checked={form.pegLeg} onChange={onChangeHandler} />
                    <span className = "alert-danger">{error.pegLeg && error.pegLeg.message}</span>
                </div>
                <div className="form-group">
                <p>Eye Patch</p>
                    <input type ="checkbox" name="eyePatch" checked={form.eyePatch} onChange={onChangeHandler} />
                    <span className = "alert-danger">{error.eyePatch && error.eyePatch.message}</span>
                </div>
                <div className="form-group">
                <p>Hand Hook</p>
                    <input type ="checkbox" name="handHook" checked={form.handHook} onChange={onChangeHandler} />
                    <span className = "alert-danger">{error.handHook && error.handHook.message}</span>
                </div>

                <input type="submit" className="btn btn-primary btn-lg mt-2"/>
            </form>
        </div>
    )
}

export default Form;
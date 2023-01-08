import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


const PirateCard = (props) => {
    const { name, imgURL, position, treasures, phrase, pegLeg, eyePatch, handHook } = props.data;

    const onDeleteHandler = (_id) => {
        console.log(_id);

        axios.delete(`http://localhost:8000/api/pirates/delete/${_id}`)
            .then(res => {

                console.log(res);
                props.setLoaded(prevState => !prevState);
            })
            .catch(err => console.log(err));
    }


    return (
        <div className="PirateCard" style={{ display: "flex" }}>

            <div style={{ flex: 1, textAlign: "center" }}>
                <h4> <h3>{name}</h3>
                    <img src={imgURL} alt="name" />
                    <p><i>Position:{position}</i></p>
                    <p>Treasures:{treasures}</p>
                    <p>Catch Phrase:{phrase}</p>
                    <p>Peg Leg:{pegLeg}</p>
                    <p>Eye Patch:{eyePatch}</p>
                    <p>Hand Hook:{handHook}</p>
                </h4>
            </div>

            <div style={{ flex: 1, textAlign: "center" }}>
                <button className="delete btn-danger" onClick={() => onDeleteHandler(props.data._id)}>Walk the Plank</button>
                <button className="btn-primary">
                    <Link to={`/pirates/${props.data._id}`} style={{ color: 'black', textDecoration: 'none' }} href="#">View Pirate</Link>
                </button>
            </div>


        </div>
    )
}

export default PirateCard;

// <div style={{ display: "flex" }} className="PirateCard" >

// <h4>
//     <h3>{name}</h3>
//     <div style={{ flex: 1, textAlign: "center" }}>
//         <img src={imgURL} alt="name" />
//     </div>
// </h4 >
// <div style={{ flex: 1, textAlign: "center" }}>
//     <button className="btn-primary">
//         <Link to={`/pirates/${props.data._id}`} class="text-dark" href="#">View Pirate</Link>
//     </button>
//     <button className="delete btn-danger" onClick={() => onDeleteHandler(props.data._id)}>Walk the Plank</button>
// </div>
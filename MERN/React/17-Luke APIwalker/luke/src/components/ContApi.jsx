import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { useParams } from 'react-router-dom'


const ContApi = (props) => {
    const [result, setResult] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [err, setErr] = useState([]);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${props.search}/${props.id}`)
            .then((response) => {
                setResult(response.data)
            })
            .then(setLoaded(true))
            .catch(() => setErr("error"));

    }, [props.id, props.search]);

    if (loaded && err === "error") {
        return (
            <>
                <h1>Not found check again {props.search}</h1>
            </>
        )
    } else if (loaded && result === "people") {
        return (
            <>
                <h3>Name : {result.name}</h3>
                <p>Height : {result.height}</p>
                <p>Mass : {result.mass}</p>
                <p>Hair Color : {result.hair_color}</p>
                <p>Skin Color : {result.skin_color}</p>
            </>
        )
    } else if (result === "planets") {
        return (
            <>
                <h3>Name : {result.name}</h3>
                <p>Climate : {result.climate}</p>
                <p>Surface Water : {result.surfacee}</p>
                <p>Population : {result.hair_color}</p>
            </>
        )
    } else {
        return (
            <>
                <h3>Name : {result.name}</h3>
                <p>Model : {result.model}</p>
                <p>Manufacturer: {result.manufacturer}</p>
                <p>Passenger : {result.passengers}</p>
                <p>Consumables : {result.consumables}</p>
            </>
        )
    }
}

export default ContApi

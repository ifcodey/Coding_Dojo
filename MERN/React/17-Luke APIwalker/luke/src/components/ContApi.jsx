import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContApi = (props) => {
    const [search, setSearch] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [err, setErr] = useState([]);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/` + props.search + `/` + props.id)
            .then(response => { setSearch(response.data) })
            .catch(() => setErr("error"));

    }, [props.id]);

    if (err == "error") {
        return (
            <>
                <h1>Not found check again {props.search}</h1>
            </>
        )
    } else if (props.search == "people") {
        return (
            <>
                <h3>Name : {search.name}</h3>
                <p>Height : {search.height}</p>
                <p>Mass : {search.mass}</p>
                <p>Hair Color : {search.hair_color}</p>
                <p>Skin Color : {search.skin_color}</p>
            </>
        )
    } else if (props.search == "planets") {
        return (
            <>
                <h3>Name : {search.name}</h3>
                <p>Climate : {search.climate}</p>
                <p>Surface Water : {search.surfacee}</p>
                <p>Population : {search.hair_color}</p>
            </>
        )
    }
}

export default ContApi

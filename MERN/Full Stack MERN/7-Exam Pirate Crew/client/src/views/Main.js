import React from "react";
import axios from 'axios';
import{ useEffect, useState } from 'react';
import PirateCard from "../components/PirateCard";

const Main = (props)=>{
    const [pirates, setPirates] = useState([]);
    const [loaded, setLoaded] = useState();

    useEffect(()=> {
        axios.get("http://localhost:8000/api/pirates")
        .then(res => {
        setPirates(res.data.results);
    })
        .catch(err=>console.log(err))
    },[loaded])


    return (
        <div className="PirateTable">
            {
                pirates.map((item, i)=>{
                    return <PirateCard key={i} data={item} setLoaded = {setLoaded} />
                })
            }
        </div>
        
        );
}



export default Main;
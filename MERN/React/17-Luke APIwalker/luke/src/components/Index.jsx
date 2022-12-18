import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


const Index = () => {
    const [id, setId] = useState("");
    const [search, setSearch] = useState("");
    // const [respData, setRespData] = useState([]);
    // const [loaded, setLoaded] = useState(false);

    const function_Select = (e) => {
        setSearch(e.target.value);
    }

    const function_Submit = (e) => {
        e.preventDefault();

        // will send me to ContApi page.
        navigate("/" + search + "/" + id);
    }

    return (
        <div>
            <form onSubmit={function_Submit} style={{ marginTop: "15px" }}>

                <label>Search For :</label>
                <select value={search} onChange={function_Select}>
                    <option value="select">select one</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="starships">StarShips</option>
                </select>

                <label>ID :</label>
                <input type="number" onChange={(e) => setId(e.target.value)}></input>
                <button> Search </button>

            </form>
        </div>
    )
}

export default Index

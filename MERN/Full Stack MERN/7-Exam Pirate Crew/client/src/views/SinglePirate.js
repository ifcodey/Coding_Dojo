import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PirateCard from '../components/PirateCard';
import { useParams, Link } from 'react-router-dom';

const SinglePirate = (props) => {
    const [pirates, setPirates] = useState({});
    const { _id } = useParams();

    useEffect(() => {
        console.log(_id);
        axios.get("http://localhost:8000/api/pirates/" + _id)
            .then(res => setPirates(res.data.results))
            .catch(err => console.log(err))
    }, [_id])

    return (
        <div><h2 id="columns-with-auto-width" class="mt-5"><strong>Pirate Profile</strong></h2>
            <PirateCard data={pirates} />
            {/* <Link to={`/pirates/update/${_id}`} className="btn btn-md btn-warning">Edit</Link><br/> */}
            <Link to={'/'} className="btn btn-md btn-dark">Home Page</Link>
        </div>
    )
}

export default SinglePirate;
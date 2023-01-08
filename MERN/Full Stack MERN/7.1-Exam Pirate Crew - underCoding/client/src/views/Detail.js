import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from '../components/Header'
import { useNavigate, Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";

const DetailVote = (props) => {
    const { id } = useParams
    const [competition, setCompetition] = useState({})
    const [loaded, setLoaded] = useState(false);

    let navigate = useNavigate();

    const deletePerson = (competitionId) => {
        axios.delete('http://localhost:8000/api/competitions/' + competitionId)
            .then(res => {
                navigate("/");
            })
            .catch(err => console.error(err));
    }
    useEffect(() => {
        axios.get('http://localhost:8000/api/competitions/' + id)
            .then(res => setCompetition(res.data))
            .catch(err => console.error(err));


    }, []);
    const voteCountry1 = (id, cCounter1) => {
        const response = axios.put(`http://localhost:8000/api/competitions/${id}/edit`, { counter1: cCounter1 + 1 })
        navigate("/votes/" + id)
    }

    const voteCountry2 = (id, cCounter2) => {
        const response = axios.put(`http://localhost:8000/api/competitions/${id}/edit`, { counter2: cCounter2 + 1 })
        navigate("/votes/" + id)
    }

    const voteCountry3 = (id, cCounter3) => {
        const response = axios.put(`http://localhost:8000/api/competitions/${id}/edit`, { counter3: cCounter3 + 1 })
        navigate("/votes/" + id)
    }

    return (
        <>
            <Header />
            <div>
                <p>
                    <Link to={"/"}>
                        Home
                    </Link>
                </p>
                <h1> {competition.question}</h1>
                <hr/>

                <div style={{ height: '6em', display: "flex", backgroundColor: "gold", width: "40%", margin: '0 auto', textAlign: "center" }}>
                    <h3 style={{ flex: 1 }}> {competition.country1}</h3>
                    <br></br>
                    <button onClick={() => voteCountry1(competition._id, competition.vote1)}>Vote {competition.country1}</button>
                    <h3 style={{ flex: 1 }}> {competition.country2}</h3>
                    <button onClick={() => voteCountry2(competition._id, competition.vote2)}>Vote {competition.country2}</button>
                    <h3 style={{ flex: 1 }}> {competition.country3}</h3>
                    {competition.country3 ?

                        <button onClick={() => voteCountry3(competition._id, competition.vote3)}>Vote {competition.country3}</button> : <p></p>}
                    {competition.vote1}
                    {competition.vote2}

                </div>

            </div>
            {/* <CounterVote />
            {loaded && competitoner.map((item, i) => {
                <div key={i}>
                    <div style={{ display: "flex" }}>
                        {item.question}
                        <div style={{ flex: 1 }}>
                            {item.country1}
                            <Button
                                variant="outlined"
                                color="primary"
                                disableElevation
                                type="submit"
                                onClick={handleUpdate}
                            >
                                Vote{" "}
                            </Button>

                        </div>
                        <div style={{ flex: 1 }}>
                            {item.country2}
                            <Button
                                variant="outlined"
                                color="primary"
                                disableElevation
                                type="submit"
                                onClick={handleUpdate}
                            >
                                Vote{" "}
                            </Button>
                        </div>

                    </div>
                </div>
            })} */}
        </>
    )
}

export default DetailVote

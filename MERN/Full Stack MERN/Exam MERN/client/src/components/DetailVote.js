import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from './Header'
import { useNavigate, Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import CounterVote from '../components/CounterVote'

const DetailVote = (props) => {
    const { id } = useParams
    const { errors, setErrors, counter1, setCounter1, counter2, setCounter2, counter3,
        setCounter3, competitoner, setCompetitoner } = props;

    const [comp, setComp] = useState({});
    const [loaded, setLoaded] = useState(false);

    let navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:8000/vote")
            .then((res) => setComp(res.data));
        // console.log(comp)
        setLoaded(true);
        // console.log(loaded)
    }, [comp]);


    const handleUpdate = (createComp) => {
        axios
            .patch(`http://localhost:8000/vote/${id}/counter1`, createComp)
            .then((res) => {
                setCompetitoner([...competitoner, comp]);
                console.log(competitoner)
            })
            .then((res) => navigate("/"))
            .catch((err) => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            });
    };

    return (
        <>
            <Header />
            <CounterVote />
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
            })}
        </>
    )
}

export default DetailVote

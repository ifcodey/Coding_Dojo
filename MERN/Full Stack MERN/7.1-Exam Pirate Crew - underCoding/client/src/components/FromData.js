import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import TextareaAutosize from '@mui/base/TextareaAutosize';

const FormData = (props) => {
    // Get props from Create.js / Update.js
    const { initialQuestion, initialCountry1, initialCountry2, initialCountry3, errors } = props;

    const [question, setQuestion] = useState(initialQuestion);
    const [country1, setCountry1] = useState(initialCountry1);
    const [country2, setCountry2] = useState(initialCountry2);
    const [country3, setCountry3] = useState(initialCountry3);

    const [questionError, setQuestionError] = useState("");
    const [country1Error, setCountry1Error] = useState("");
    const [country2Error, setCountry2Error] = useState("");

    const handleForm = (e) => {
        e.preventDefault();
        // Lifting function a form data -> field name of comp.
        props.onSubmitHandler({ question, country1, country2, country3 });
    };

    // frontend validation.
    const handleQuestion = (e) => {
        if (e.target.value.length < 10 && e.target.value.length > 0) {
            setQuestion(e.target.value);
            setQuestionError("Question must be at least 10 characters long");
        } else {
            setQuestion(e.target.value);
            setQuestionError("");
        }
    }

    const handleCountry1 = (e) => {
        if (e.target.value.length < 3 && e.target.value.length > 0) {
            setCountry1(e.target.value);
            setCountry1Error("Country must be at least 3 characters long");
        } else {
            setCountry1(e.target.value);
            setCountry1Error("");
        }
    }

    const handleCountry2 = (e) => {
        if (e.target.value.length < 3 && e.target.value.length > 0) {
            setCountry2(e.target.value);
            setCountry2Error("Country must be at least 3 characters long");
        } else {
            setCountry2(e.target.value);
            setCountry2Error("");
        }
    }

    return (
        <div>
            <form action="" onSubmit={handleForm}>
                <p>
                    <Link to="/">
                        <Button>
                            <Typography variant="p" component="p" align="left" sx={{ m: 2 }}>
                                Back to Home
                            </Typography>
                        </Button>
                    </Link>
                </p>
                {/* error map in form. */}
                {errors.map((err, i) => (
                    <p key={i}>{err}</p>
                ))}
                Questions:{" "}
                <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Fill a Question"
                    value={question}
                    name="question"
                    onChange={handleQuestion}
                    style={{ width: 200, height: 50 }}
                />
                <p style={{ color: 'red' }}>{questionError}</p>
                <br /><br />

                Country1:{" "}
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    type="text"
                    value={country1}
                    name="country1"
                    onChange={handleCountry1}
                />
                <p style={{ color: 'red' }}>{country1Error}</p>
                <br /><br />

                Country2:{" "}
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    type="text"
                    value={country2}
                    name="country2"
                    onChange={handleCountry2}
                />
                <p style={{ color: 'red' }}>{country2Error}</p>
                <br /><br />

                Country3:{" "}
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    type="text"
                    value={country3}
                    name="country3"
                    onChange={(e) => setCountry3(e.target.value)}
                />
                <p>
                    <Button
                        variant="outlined"
                        color="primary"
                        disableElevation
                        type="submit"
                        value="submit"
                    >
                        Add{" "}
                    </Button>

                </p>
            </form>
        </div>
    );
};

export default FormData;
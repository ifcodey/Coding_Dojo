import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import TextareaAutosize from '@mui/base/TextareaAutosize';

const FormData = (props) => {
    // Get props from Create.js / Update.js
    const { initialQuestion, initialCountry1, initialCountry2, initialCountry3, errors, counter1, counter2, counter3 } = props;

    const [question, setQuestion] = useState(initialQuestion);
    const [country1, setCountry1] = useState(initialCountry1);
    const [country2, setCountry2] = useState(initialCountry2);
    const [country3, setCountry3] = useState(initialCountry3);



    // const [country, setCountry] = useState({ country1: "", country2: "", country3: "" });

    const handleForm = (e) => {
        e.preventDefault();
        // Lifting function a form data -> field name of comp.
        props.onSubmitHandler({ question, country1, country2, country3, counter1, counter2, counter3 });
    };
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
                    onChange={(e) => setQuestion(e.target.value)}
                    style={{ width: 200, height: 50 }}
                />
                <br /><br />

                Country1:{" "}
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    type="text"
                    value={country1}
                    name="country1"
                    onChange={(e) => setCountry1(e.target.value)}
                />
                <br /><br />

                Country2:{" "}
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    type="text"
                    value={country2}
                    name="country2"
                    onChange={(e) => setCountry2(e.target.value)}
                />
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
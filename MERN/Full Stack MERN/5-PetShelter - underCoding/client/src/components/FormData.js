import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

const FormData = (props) => {
    // Get props from Create.js / Update.js
    const { initialName, initialType, initialDescreption, initialSkillOne, initialSkillTwo, initialSkillThree, onSubmitProp } = props;

    const [name, setName] = useState(initialName);
    const [type, setType] = useState(initialType);
    const [descreption, setDescreption] = useState(initialDescreption);
    const [skill1, setSkill1] = useState(initialSkillOne);
    const [skill2, setSkill2] = useState(initialSkillTwo);
    const [skill3, setSkill3] = useState(initialSkillThree);

    const handleForm = (e) => {
        e.preventDefault();
        onSubmitProp({ name, type, descreption, 'skills.skill1': skill1, 'skills.skill2': skill2, 'skills.skill3': skill3 });
    };

    return (
        <div>
            <Link to={"/players/list"}>Back To Dashboard</Link>
            <form action="" onSubmit={handleForm}>
                {/* error map in form. 
                {errors.map((err, i) => (
                    <p key={i}>{err}</p>
                ))} */}
                Name:{" "}
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    type="text"
                    value={name}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                />
                <br />

                Type:{" "}
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    type="text"
                    value={type}
                    name="type"
                    onChange={(e) => setType(e.target.value)}
                />
                <br />

                Descreption :{" "}
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    type="text"
                    value={descreption}
                    name="descreption"
                    onChange={(e) => setDescreption(e.target.value)}
                />
                <br />

                Skill 1 :{" "}
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    type="text"
                    value={skill1}
                    name="skill1"
                    onChange={(e) => setSkill1(e.target.value)}
                />
                <br />

                Skill 2 :{" "}
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    type="text"
                    value={skill2}
                    name="skill2"
                    onChange={(e) => setSkill2(e.target.value)}
                />

                Skill 3 :{" "}
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    type="text"
                    value={skill3}
                    name="skill3"
                    onChange={(e) => setSkill3(e.target.value)}
                />

                <p>

                    <Button
                        variant="outlined"
                        color="primary"
                        disableElevation
                        type="submit"
                        value="submit"
                    >
                        submit{" "}
                    </Button>
                    &nbsp;

                    <Button
                        variant="outlined"
                        color="primary"
                        disableElevation
                        type="submit"
                        value="submit"
                    >
                        <Link to={"/"} style={{ textDecoration: "none" }}>
                            Cancel
                        </Link>{" "}
                    </Button>

                </p>

            </form>
        </div>
    );
};

export default FormData;

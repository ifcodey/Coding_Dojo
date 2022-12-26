import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

const FormData = (props) => {
  // Get props from Create.js / Update.js
  const { initialName, initialPosition, errors } = props;

  const [name, setName] = useState(initialName);
  const [position, setPosition] = useState(initialPosition);
  const [status, setStatus] = useState({ game1: 0, game2: 0, game3: 0 });

  const handleForm = (e) => {
    e.preventDefault();
    // Lifting function a form data -> field name of author.
    props.onSubmitHandler({ name, position, status });
  };
  return (
    <div>
      <form action="" onSubmit={handleForm}>
        {/* <p>
          <Link to="/">
            <Typography variant="p" component="p" align="left" sx={{ m: 2 }}>
              Home
            </Typography>
          </Link>
        </p> */}
        {/* error map in form. */}
        {errors.map((err, i) => (
          <p key={i}>{err}</p>
        ))}
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
        <p> </p>
        Position:{" "}
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          type="text"
          value={position}
          name="position"
          onChange={(e) => setPosition(e.target.value)}
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

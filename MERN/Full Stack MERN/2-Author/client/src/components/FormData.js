import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const AuthorForm = (props) => {
  // Get props from Create.js / Update.js
  const { intialName, errors } = props;
  const [name, setName] = useState(intialName);

  const handleForm = (e) => {
    e.preventDefault();
    // Lifting function a form data -> field name of author.
    props.onSubmitHandler({ name });
  };
  return (
    <div>
      <form action="" onSubmit={handleForm}>
        <p>
          <Link to="/">Home</Link>
        </p>
        {/* error map in form. */}
        {errors.map((err, i) => (
          <p key={i}>{err}</p>
        ))}
        {/* <label>Author Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" value="submit" /> */}
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

export default AuthorForm;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import FormData from "../components/FormData";

const Create = (props) => {
  // Get props from App.js.
  const [players, setPlayers] = useState([]);
  const [errors, setErrors] = useState([]);

  let navigate = useNavigate();

  // Post a data from form to controller.
  const handleCreate = (createPlayer) => {
    axios
      .post("http://localhost:8000/teams/new", createPlayer)
      .then((res) => {
        console.log(res);
        setPlayers([...players, res.data]);
        navigate("/");
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
          // authors.map((item, i) => {
          //   if (item.data === {}) {
          //     errorArr.push("there is empty text");
          //   }
          // });
        }
        setErrors(errorArr);
      });
  };

  return (
    <div>
      <h2>
        {" "}
        <Link to={"/"}>List</Link> |{" "}
        <Link to={"/player/addplayer/"}>Add Player</Link>
      </h2>

      <h4>Add Players</h4>
      <FormData
        initialName=""
        initialPosition=""
        onSubmitHandler={handleCreate}
        errors={errors}
      />
    </div>
  );
};

export default Create;

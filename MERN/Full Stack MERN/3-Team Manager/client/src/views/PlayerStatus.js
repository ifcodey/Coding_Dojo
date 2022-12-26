import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import PlayerStatus from "../components/PlayerStatus";

const PlayersStatus = (props) => {
  return (
    <div>
      <br></br>
      Player Status - Game{props.id} :<br></br>
      <br></br>
      <Link to="/status/1/game">Game1</Link> |{" "}
      <Link to="/status/2/game">Game2</Link> |{" "}
      <Link to="/status/3/game">Game3</Link>
      <PlayerStatus id={props.id} />
    </div>
  );
};

export default PlayersStatus;

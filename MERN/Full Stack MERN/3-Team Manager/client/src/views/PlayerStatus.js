import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useParams } from "react-router-dom";
import PlayerStatus from "../components/PlayerStatus";
import axios from "axios";

const PlayersStatus = () => {
  const {id} = useParams;
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/teams")
      .then((res) => setPlayers(res.data));
    setLoaded(true);
  }, [players]);

  return (
    <div>
      <br></br>
      Player Status - Game{id} :<br></br>
      <br></br>
      <Link to="/status/1/game">Game1</Link> |{" "}
      <Link to="/status/2/game">Game2</Link> |{" "}
      <Link to="/status/3/game">Game3</Link>
      <PlayerStatus id={id} players={players} setPlayers={setPlayers} player={player} setPlayer={setPlayer} loaded={loaded} />
    </div>
  );
};

export default PlayersStatus;

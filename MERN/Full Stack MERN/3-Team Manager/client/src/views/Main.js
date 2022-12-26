import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ListPlayers from "../components/ListPlayer";

const Main = () => {
  const [players, setPlayers] = useState([]);

  const removeFromDom = (playerId) => {
    setPlayers(players.filter((player) => player._id != playerId));
  };

  return (
    <div>
      <h2>
        {" "}
        <Link to={"/"}>List</Link> | <Link to={"/player/add/"}>Add Player</Link>{" "}
        | <Link to={"/status/1/game"}>Status</Link>
      </h2>
      <ListPlayers
        players={players}
        setPlayers={setPlayers}
        removeFromDom={removeFromDom}
      />
    </div>
  );
};

export default Main;

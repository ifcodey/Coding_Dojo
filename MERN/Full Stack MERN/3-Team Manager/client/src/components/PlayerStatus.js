import React, { useEffect, useState } from "react";
import axios from "axios";

const PlayerStatus = (props) => {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState([]);

  const [loaded, setLoaded] = useState(false);
  const [click, setClick] = useState(0);
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8000/teams")
      .then((res) => setPlayers(res.data));
    setLoaded(true);
  }, [players]);

  const UpdateStatus = (num, id) => {
    console.log(id);
    axios
      .put(
        `http://localhost:8000/teams/${id}/edit`,
        props.id == 1
          ? { "status.game1": num }
          : props.id == 2
          ? { "status.game2": num }
          : { "status.game3": num }
      )
      .then((res) => {
        console.log(res);
      });
    // setPlayers(players.status.game1=1)
  };

  return <div>PlayerStatus</div>;
};

export default PlayerStatus;

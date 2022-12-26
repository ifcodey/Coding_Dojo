import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
} from "@mui/material";

const ListPlayer = (props) => {
  const [loaded, setLoaded] = useState(false);
  const { removeFromDom, players, setPlayers } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8000/teams")
      .then((res) => setPlayers(res.data));
    setLoaded(true);
  }, []);

  return (
    <div>
      {" "}
      <Paper>
        <TableContainer>
          <Table aria-label="Author Table">
            <TableHead>
              <TableRow>
                <TableCell align={"center"}>Name</TableCell>
                <TableCell align={"center"}>Position</TableCell>
                <TableCell align={"center"}>Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {loaded &&
                players.map((player, i) => (
                  <TableRow hover key={i}>
                    <TableCell align={"center"}>{player.name}</TableCell>
                    <TableCell align={"center"}> {player.position}</TableCell>
                    <TableCell align={"center"}>
                      <DeleteButton
                        id={player._id}
                        removeFromDom={() => removeFromDom(player._id)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default ListPlayer;

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

const PlayerStatus = (props) => {
  const { id, players, player, setPlayer, setPlayers, loaded } = props

  const UpdateStatus = (num, id) => {
    console.log(id);
    axios
      .put(
        `http://localhost:8000/teams/${id}/edit`,
        id == 1
          ? { "status.game1": num }
          : id == 2
            ? { "status.game2": num }
            : { "status.game3": num }
      )
      .then((res) => {
        console.log(res);
      });
    // setPlayers(players.status.game1=1)
  };

  return (
    <div>
      PlayerStatus
      {" "}
      <Paper>
        <TableContainer>
          <Table aria-label="Author Table">
            <TableHead>
              <TableRow>
                <TableCell align={"center"}>Name</TableCell>
                <TableCell align={"center"}>Actions</TableCell>
              </TableRow>
            </TableHead>
            
            <TableBody>
              {loaded &&
                players.map((player, i) => (
                  <TableRow hover key={i}>
                    <TableCell align={"center"}>{player.name}</TableCell>
                    <TableCell align={"center"}>

                      {/* First Step */}
                      {id == 1 ?
                        <div>
                          <Button variant="outlined" disableElevation type="submit"
                            value="submit" onClick={(e) => {UpdateStatus(0, player._id)}} style={{
                              backgroundColor: player.status.game1 == 0 ?
                                "yellow" : ""
                            }}>Undecided</Button>

                          <Button variant="outlined" disableElevation type="submit"
                            value="submit" onClick={(e) => UpdateStatus(1, player._id)} style={{
                              backgroundColor: player.status.game1 == 1 ?
                                "green" : ""
                            }}>Playing</Button>

                          <Button variant="outlined" disableElevation type="submit"
                            value="submit" onClick={(e) => UpdateStatus(2, player._id)} style={{
                              backgroundColor: player.status.game1 == 2 ?
                                "red" : ""
                            }}>Playing</Button>

                        </div> :

                        id == 2 ?
                          <div>
                            <Button variant="outlined" disableElevation type="submit"
                              value="submit" onClick={(e) => UpdateStatus(0, player._id)} style={{
                                backgroundColor: player.status.game2 == 0 ?
                                  "yellow" : ""
                              }}>Undecided</Button>

                            <Button variant="outlined" disableElevation type="submit"
                              value="submit" onClick={(e) => UpdateStatus(1, player._id)} style={{
                                backgroundColor: player.status.game2 == 1 ?
                                  "green" : ""
                              }}>Playing</Button>

                            <Button variant="outlined" disableElevation type="submit"
                              value="submit" onClick={(e) => UpdateStatus(2, player._id)} style={{
                                backgroundColor: player.status.game2 == 2 ?
                                  "red" : ""
                              }}>Playing</Button>

                          </div> :

                          <div>
                            <Button variant="outlined" disableElevation type="submit"
                              value="submit" onClick={(e) => UpdateStatus(0, player._id)} style={{
                                backgroundColor: player.status.game3 == 0 ?
                                  "yellow" : ""
                              }}>Undecided</Button>

                            <Button variant="outlined" disableElevation type="submit"
                              value="submit" onClick={(e) => UpdateStatus(1, player._id)} style={{
                                backgroundColor: player.status.game3 == 1 ?
                                  "green" : ""
                              }}>Playing</Button>

                            <Button variant="outlined" disableElevation type="submit"
                              value="submit" onClick={(e) => UpdateStatus(2, player._id)} style={{
                                backgroundColor: player.status.game3 == 2 ?
                                  "red" : ""
                              }}>Playing</Button>

                          </div>
                      }
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  )
};

export default PlayerStatus;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
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

const ListVote = (props) => {
  const [loaded, setLoaded] = useState(false);
  const { removeFromDom, competitoner, setCompetitoner } = props;


  useEffect(() => {
    axios
      .get("http://localhost:8000/vote")
      .then((res) => setCompetitoner(res.data));
    setLoaded(true);
  }, [competitoner]);


  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        disableElevation
        type="button"
        aria-label="right"
        sx={{ m: 2 }}
      >
        <Link to="/vote/new" style={{ textDecoration: 'none' }}>
          Create your Own Competition
        </Link>
      </Button>
      {" "}
      <Paper>
        <TableContainer>
          <Table aria-label="Author Table">
            <TableHead>
              <TableRow>
                <TableCell align={"center"}>All Competition</TableCell>
                <TableCell align={"center"}>Top 3 Competition</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {loaded &&
                competitoner.map((player, i) => (
                  <TableRow hover key={i}>
                    <TableCell align={"center"}>
                      <Link to={`/counter/${player._id}`} style={{ textDecoration: 'none' }}> {player.question}</Link>
                      <br />
                      <span>{player.country1}</span>{"  "} <span>{player.counter1} Vote</span>
                      <br />
                      <span>{player.country2}</span>{"  "}<span>{player.counter2} Vote</span>
                      <p>{player.createdAt}</p>

                    </TableCell>

                    <TableCell align={"center"}>
                      <Link to={`/counter/${player._id}`} style={{ textDecoration: 'none' }}>{player.question}</Link>
                      <br />
                      <span>{player.country1}</span>{"  "} <span>{player.counter1} Vote</span>
                      <br />
                      <span>{player.country2}</span>{"  "}<span>{player.counter2} Vote</span>
                      <p>{player.createdAt}</p>
                    </TableCell>

                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  )
}

export default ListVote


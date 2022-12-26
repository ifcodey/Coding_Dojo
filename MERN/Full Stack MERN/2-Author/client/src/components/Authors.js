import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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

const Authors = (props) => {
  const { removeFromDom, authors, setAuthors } = props;

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/authors/${id}/delete`)
      .then((res) => {
        removeFromDom(id);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Paper>
        <TableContainer>
          <Table aria-label="Author Table">
            <TableHead>
              <TableRow>
                <TableCell align={"center"}>Author</TableCell>
                <TableCell align={"center"}>Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {authors.map((author, i) => (
                <TableRow hover key={i}>
                  <TableCell align={"center"}>
                    <Link to={`/authors/${author._id}`}>{author.name}</Link>
                  </TableCell>
                  <TableCell align={"center"}>
                    <Link to={`/authors/${author._id}/edit`}>
                      <Button color="secondary">edit</Button>
                    </Link>
                    <Button
                      variant="outlined"
                      color="error"
                      disableElevation
                      onClick={(e) => {
                        handleDelete(author._id);
                      }}
                    >
                      {" "}
                      delete
                    </Button>
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

export default Authors;

import React, { useEffect, useState } from "react";
import { Router, Link } from "react-router-dom";
import axios from "axios";
import Authors from "../components/Authors";
import Button from "@mui/material/Button";

const Main = (props) => {
  const [loaded, setLoaded] = useState(false);
  const { authors, setAuthors } = props;

  // Delete from DOM.
  const removeFromDom = (id) => {
    setAuthors(authors.filter((author) => author._id !== id));
  };

  // Get all Author
  useEffect(() => {
    axios
      .get("http://localhost:8000/authors")
      .then((res) => {
        setAuthors(res.data);
        setLoaded(true);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {/* go to create form */}
      <Link to="/authors/new">
        <Button variant="outlined" color="primary" disableElevation>
          Add new author
        </Button>
      </Link>

      {/* view a author name */}
      <h4>We have a qoutes by :</h4>
      {loaded && (
        <Authors
          authors={authors}
          setAuthors={setAuthors}
          removeFromDom={removeFromDom}
        />
      )}
    </div>
  );
};

export default Main;

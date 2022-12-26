import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import FormData from "../components/FormData";

const Create = (props) => {
  // Get props from Dashboard.
  const { authors, setAuthors, errors, setErrors } = props;
  let navigate = useNavigate();

  // Post a data from form to controller.
  const handleCreate = (author) => {
    axios
      .post("http://localhost:8000/authors/new", author)
      .then((res) => {
        console.log(res);
        setAuthors([...authors, res.data]);
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
      <h2>new Author</h2>
      <FormData initialName="" onSubmitHandler={handleCreate} errors={errors} />
    </div>
  );
};

export default Create;

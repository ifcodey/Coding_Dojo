import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import FormData from "../components/FormData";

const Update = ({ authors, setAuthors, errors, setErrors }) => {
  const { id } = useParams();
  const [author, setAuthor] = useState({});
  const [loaded, setLoaded] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/authors/" + id).then((res) => {
      setAuthor(res.data);
      console.log(res.data);
      setLoaded(true);
    });
  }, []);

  const handleUpdate = (author) => {
    axios
      .put("http://localhost:8000/authors/" + id + "/edit", author)
      .then((res) => {
        setAuthors([...authors, author]);
      })
      .then((res) => navigate("/"))
      .catch((err) => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
  };

  return (
    <div>
      <h2>Edit Author</h2>
      {loaded && (
        <FormData
          onSubmitHandler={handleUpdate}
          initialName={author}
          errors={errors}
        />
      )}
    </div>
  );
};

export default Update;

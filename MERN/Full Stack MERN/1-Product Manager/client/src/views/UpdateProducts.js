import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UpdateProduct = (props) => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/products/" + id).then((res) => {
      setTitle(res.data.title);
      setDescription(res.data.description);
      setPrice(res.data.description);
    });
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/products/" + id + "/edit", {
        title,
        description,
        price,
      })
      .then((res) => console.log(res))
      .then(navigate("/"))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form action="" onSubmit={handleUpdate}>
        <h2>Edit Product</h2>
        <p>
          Title:{" "}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>
        <p>
          Description:{" "}
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </p>
        <p>
          Price:{" "}
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </p>

        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default UpdateProduct;

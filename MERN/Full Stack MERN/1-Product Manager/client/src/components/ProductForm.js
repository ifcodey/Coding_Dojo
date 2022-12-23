import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import App from "../App.css";

const ProductForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/products/new", {
      title,
      description,
      price,
    });
    // navigate("/results");
  };

  return (
    <form action="" onSubmit={handleSubmit} className="App">
      <h2>The New Products</h2>
      <p>
        Title &nbsp;
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </p>

      <p>
        Description &nbsp;
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </p>

      <p>
        Price &nbsp;
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </p>

      <input type="submit" value="submit" />
    </form>
  );
};
export default ProductForm;

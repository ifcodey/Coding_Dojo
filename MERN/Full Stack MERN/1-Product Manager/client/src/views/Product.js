import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import App from "../App.css";

const Product = (props) => {
  let { id } = useParams();
  let [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/products/" + id)
      .then((res) => {
        // product -> controller.
        setProduct(res.data.product);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      Product
      <div>
        <p>Name: {product.title}</p>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <div>
          {" "}
          <Link to={`/products/${product._id}/edit`}>
            {" "}
            <button>edit</button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};
export default Product;

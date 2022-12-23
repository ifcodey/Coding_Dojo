import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import AllProducts from "./AllProducts";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/products")

      .then((res) => {
        setProducts(res.data.products);
        setLoaded(true);
        console.log(res.data.products);
      })

      .catch((err) => console.log(err));
  }, []);

  //   LIFTING -> productId coming from ((  AllProdcut.js  ))
  const removeFromDom = (productId) => {
    setProducts(products.filter((product) => product._id != productId));
  };

  return (
    <div>
      <ProductForm />
      {loaded && (
        <AllProducts allproducts={products} removeFromDom={removeFromDom} />
      )}
    </div>
  );
};

export default Main;

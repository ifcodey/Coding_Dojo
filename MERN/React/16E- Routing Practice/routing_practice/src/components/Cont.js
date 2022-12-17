import React from "react";
import { navigate } from "@reach/router";

const Cont = () => {
  const navigation = () => {
    alert("you will go to about route");
    navigate("/about");
  };
  return (
    <div>
      <p>Main page</p>
      <button onClick={navigation}>About</button>
    </div>
  );
};

export default Cont;

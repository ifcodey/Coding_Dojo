import React, { useState, useEffect } from "react";
import axios from "axios";

const Axios_Api = () => {
  const [ourdata, setOurdata] = useState([null]);
  const [clickButton, setClickButton] = useState(false);
  const [nameArr, setNameArr] = useState("Pokemons");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=50")
      .then((respone) => {
        setOurdata(respone.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    // clickButton ? setClickButton(false) : setClickButton(true);
    if (clickButton) {
      setClickButton(false);
      setNameArr("");
      setNameArr("show Pokemons");
    } else {
      setClickButton(true);
      setNameArr("");
      setNameArr("hide Pokemons");
    }
  };

  const handleClick2 = () => {
    setClickButton(null);
  };

  return (
    <div>
      <button onClick={(e) => handleClick()}>{nameArr}</button>&nbsp;
      <button onClick={(e) => handleClick2()}>Delete Pokemons</button>
      {clickButton &&
        ourdata.map((item, i) => {
          return (
            <p key={i}>
              {i} - {item.name}
            </p>
          );
        })}
    </div>
  );
};

export default Axios_Api;

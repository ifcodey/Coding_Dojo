import React, { useState } from 'react'

const Display = (props) => {
    const[color, setColor] = useState("");
    const [box,setBox] = useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setColor(color);
        setBox(box => [...box,color]);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"/>
        Send  <input type = "submit" value="Ok"/>
      </form>
      <br></br>
      {box.map((

      ))}
    </div>
  )
}

export default Display

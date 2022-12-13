import React from 'react'
import { useState } from 'react'

const Tabs = () => {
  const [tab, setTab] = useState("");
  const arr = ["Tab1", "Tab2", "Tab3"];

  const itemsFun = (item) => {
    // e.preventDefualt();
    setTab(`This is the ${item}`)
  }


  return (
    <div>
      {arr.map((item) =>
        <button style={{ widith: "90px", height: "50px", margin: "10px" }} onClick={() => itemsFun(item)}>{item}</button>
      )}
      <h2>{tab}</h2>
    </div>
  )
}

export default Tabs

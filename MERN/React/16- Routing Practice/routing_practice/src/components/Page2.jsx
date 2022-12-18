import React from 'react'

const Page2 = (props) => {
    const spongStyle={
        backgroundColor:props.back_color,
        color:props.font_color,
        border:"2px solid black",
        width:"500px",
        height:"80px",
        margin:"0 auto",
        marginTop:"20px",
        
    }
  return (
    <div>
      <div style={spongStyle}>
      {isNaN(props.name)?<h2>the word is: {props.word}</h2>:<h2>the number is: {props.word}</h2>}
      </div>
    </div>
  )
}

export default Page2

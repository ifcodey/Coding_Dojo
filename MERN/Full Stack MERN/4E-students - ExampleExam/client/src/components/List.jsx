import React from 'react'

const List = (props) => {
  return (
    <div>
      {props.students.map((stu,i)=>
      <div>{stu.name} <button style={stu.status=="testing"?{backgroundColor:"yellow"}:{backgroundColor:"red"}} onClick={stu.status=="testing"?(e)=>props.update(stu._id):(e)=>props.delete(stu._id)}>{stu.status=="testing"?"move to pass":"Delete student"}</button></div>
)}
    </div>
  )
}

export default List

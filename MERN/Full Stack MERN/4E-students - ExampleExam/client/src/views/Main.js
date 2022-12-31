import React, { useEffect, useState } from 'react'
import List from '../components/List';
import axios from 'axios'
import Form from '../components/Form';
const Main = () => {
    const [students,setStudents]=useState([]);
    const [loaded,setLoaded]=useState(false);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/getAllStudents")
        .then(res=>{setStudents(res.data);setLoaded(true)})
        .catch(err=>console.log(err))
    },[])

    const createStudent=(stu)=>{
        axios.post("http://localhost:8000/api/createNewStudent",{
            name:stu,
          status:"testing"  
        })
        .then(res=>setStudents([...students,res.data]))
        .catch(err=>console.log(err))

    }

    const deleteStudent=(id)=>{
        axios.delete("http://localhost:8000/api/students/"+id)
        .then(res=>{
            setStudents(students.filter(stu=>stu._id!=id))
        })
    }

    const updateStudent=(id)=>{

        axios.put("http://localhost:8000/api/students/"+id,{status:"pass"})
        .then(res=>{
            const objIndex = students.findIndex((obj => obj._id == id));
        const students1 = [ ...students.slice(0, objIndex), { ...students[objIndex], "status": "pass" } ,...students.slice(objIndex+1)];
        setStudents(students1);
        
})
    }
const testing=[]
const pass=[]
students.map((st,i)=>{
  if(st.status=="testing"){
    testing.push(st);
  }
else if(st.status=="pass"){
pass.push(st);
}
})

    
  return (
    <div>
      <Form fun={createStudent}/>

      <div style={{display:"flex"}}>
        <div style={{flex:1}}>
      {loaded && <List students={testing} delete={deleteStudent} update={updateStudent}/>}
      </div>
      <div style={{flex:1}}>
      {loaded && <List students={pass} delete={deleteStudent} update={updateStudent}/>}
      </div>
      </div>
    </div>
  )
}

export default Main

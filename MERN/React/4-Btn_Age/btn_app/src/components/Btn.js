import React ,{useState} from 'react'

function Btn(props) {
    const [counter, setCounter] = useState(props.age);

    const handleSubmit = (e) => {
       // e.preventDefault();
      //  setCounter(counter);
        setCounter(counter + 1);
        // setCounter(counter => [...counter]);
    }
    return (
        <div>
            <h2>First Name : {props.firstname}</h2>
            <p>Last Name : {props.lastname}</p>
            <p>Color : {props.Color}</p>
            <p>Age : {counter} </p>

            <button onClick={() => handleSubmit()}> Birthday </button>
        </div>
    )
}

export default Btn

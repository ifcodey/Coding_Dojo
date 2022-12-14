import React from 'react'
import { useState } from 'react'

const Todolist = () => {
    const [newToDoList, setNewDoList] = useState("");
    const [doList, setDoList] = useState([]);

    // connect checbox and text => in object.
    const todoitems = {
        text: newToDoList,
        complete: false,
    }

    //when submit.
    const pusherToArray = (e) => {
        e.preventDefault();

        if (newToDoList.length === 0) {
            return;
        }
        setDoList([...doList, todoitems]);
        setNewDoList("");
    }

    // delete the item.
    const deleteItem = (index) => {
        const filterMyArray = doList.filter((item, i) => {
            return i !== index;
        });
        setDoList(filterMyArray);
    }

    // check a clickbox.
    const check_if_clicked = (index) => {
        const updateToDos = doList.map((item, i) => {

            if (index === i) {
                item.complete = !item.complete;
                // or
                // To avoid mutating the item directly , do this :
                // const updateToDo = {...item , complete : !item.complete };
                // return updateToDo;
            }
            return item;
        });
        setDoList(updateToDos);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <form onSubmit={(e) => { pusherToArray(e) }}>
                <input type="text" onChange={(e) => setNewDoList(e.target.value)} value={newToDoList} />
                <div>
                    <button>Add</button>
                </div>
            </form >
            <br></br>

            {doList.map((item, i) =>

                <div key={i}>
                    <input type="checkbox" checked={item.complete} onChange={(e) => { check_if_clicked(i) }} />
                    <span style={{ textDecoration: item.complete ? 'line-through' : 'none' }}> {item.text} </span>

                    <button onClick={(e) => {
                        deleteItem(i);
                    }}>Delete</button>
                </div>
            )}
        </div >
    )
}

export default Todolist

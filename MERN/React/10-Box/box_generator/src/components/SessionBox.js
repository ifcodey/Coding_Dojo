import React, { useState } from 'react'
import { Component } from 'react';

const SessionBox = () => {
    const [box, setBox] = useState("");
    const [allBox, setAllBox] = useState([]);

    const handelSubmit = (e) => {
        e.preventDefault();
        setAllBox([...allBox, box]);
    }

    const setColorValue = (e) => {
        setBox({
            [e.target.name]: e.target.value,
        });
    }

    const stylers = (item) => {
        return ({
            "backgroundColor": item.colorBox,
            display: 'inline-block',
            margin: '10px',
            height: "150px",
            width: "150px",
            boxShadow: "5px 10px #888888",
        })
    }

    return (
        <>
            <form onSubmit={handelSubmit}>
                <label> Add Color </label>
                <input onChange={setColorValue} name="colorBox" />
                <input type="submit" />
            </form>

            {allBox.map((item, index) => {
                return (
                    <div >
                        <div style={stylers(item)} > </div>
                    </div>
                )
            })}
        </>
    )
}

export default SessionBox;
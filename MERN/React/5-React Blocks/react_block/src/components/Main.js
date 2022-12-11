import React from 'react'
// import { Component } from 'react'
import SubContents from "./SubContents";
import Advertisement from "./Advertisement ";

const styleNormal = {
    height: '25rem',
    display: 'flex',
    justifyContent: 'space-around',
};
const styleMain = {
    backgroundColor: ' #e06666',
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'column',
    height: '30rem',
    width: '70%',
    float: 'right',
    marginTop: '1rem',
    padding: '2em',
    
};

const Main = () => {
    return (
        <div style={styleMain}>
            <div style={styleNormal}>
                <SubContents />
                <SubContents />
                <SubContents />
            </div>
            <Advertisement />
        </div>
    )
}

export default Main

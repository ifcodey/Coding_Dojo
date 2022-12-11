import React from 'react'
import Header from './Header'
import Main from './Main'
import Navigation from './Navigation'

const styleNormal = {
  backgroundColor: 'gray',
  hieght: 'max-content',
};
const styleNormal2 = {
margin:'10px',

};
const Containor = () => {
  return (
    <div style={styleNormal}>
      <Header />

      <div style={styleNormal2}>
        <Main />
        <Navigation />
      </div>

    </div>
  )
}

export default Containor

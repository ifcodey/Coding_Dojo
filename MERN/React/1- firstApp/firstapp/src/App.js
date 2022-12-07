import logo from './logo.svg';
import './App.css';
import Apper from './components/Apper';

function App() {
  return (
    //jsx
    <div>
      <Apper data={"shalash"}/>
      <Apper data={"khalid"}  shalash={'hellllllllo'}  />
      <Apper data={"amin"}/>
      <Apper data={"dojo"}/>

    </div>
  );
}

export default App;

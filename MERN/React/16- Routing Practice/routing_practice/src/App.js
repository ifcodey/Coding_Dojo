import logo from './logo.svg';
import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import { Router, Link } from "@reach/router";

function App() {
  let x = "Send Name in route";
  return (
    <div className="App">

      <Link to="/:Hello Sir /red/white"><button>{x}</button><p></p></Link>
      <Link to="/"><button>Home</button></Link>
      <Router>
        <Page1 path=":name" />
        <Page2 path=":word/:back_color/:font_color" />
      </Router>

    </div>
  );
}

export default App;
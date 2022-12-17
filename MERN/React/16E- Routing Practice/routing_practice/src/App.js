import Cont from "./components/Cont";
import Cont1 from "./components/Cont1";
import Cont2 from "./components/Cont2";
import { Router, Link } from "@reach/router";

function App() {
  return (
    <>
      <p>
        <Link to="/">Home Page</Link>
      </p>
      <p>
        <Link to="/about">About page</Link>
      </p>

      <Router>
        <Cont path="/" />
        <Cont1 path="/about" />
        <Cont2 path="/:name" />
      </Router>
    </>
  );
}

export default App;

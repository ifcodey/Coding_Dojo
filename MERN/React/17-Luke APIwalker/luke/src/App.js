import "./App.css";
import Index from "./components/Index";
import Home from "./components/Home";
import ContApi from "./components/ContApi";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Home />
      <Index />
      <Router>
        <ContApi path="/:search /:id" />
      </Router>
    </div>
  );
}

export default App;

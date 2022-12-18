import './App.css';
import Index from './components/Index';
import ContApi from './components/ContApi';
import { Router } from '@reach/router';
import { Link, navigate } from '@reach/router';


function App() {
  return (
    <div className="App">

      <Index />

      <Router>
        <ContApi path="/:search /:id" />
      </Router>

    </div>
  );
}

export default App;

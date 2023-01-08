import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddPirate from './views/AddPirate';
import Main from './views/Main';
import SinglePirate from './views/SinglePirate';
import EditPirate from './views/EditPirate';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState("Pirate Crew");
  return (
    <div className="App">
      <BrowserRouter>
        <div class name="header">
          <h1>{title}</h1>
          <Link to="/api/pirates/new" class="text-dark" href="#"><h5>Add a Pirate</h5></Link>
        </div>
        <Routes>
          {/* NEW FORMAT FOR ROUTES */}
          <Route path="/" element={<Main title={title}/>} />

          <Route path="/api/pirates/new" element={<AddPirate title={title}/>} />

          <Route path="/pirates/:_id" element={<SinglePirate title={title}/>} />

          <Route path="/pirates/update/:_id" element={<EditPirate title={title}/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

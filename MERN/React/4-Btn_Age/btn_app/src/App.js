import logo from './logo.svg';
import './App.css';
import Btn from './components/Btn';

function App() {
  return (
    <div className="App">
      <Btn firstname="Jane" lastname="Doe" age={45} Color="Black" /><br></br>
      <Btn firstname="Jone" lastname="Smith" age={88} Color="Brown" /><br></br>
      <Btn firstname="Johnson" lastname="Fillmore" age={50} Color="Brown" /><br></br>
      <Btn firstname="Maria" lastname="Maria" age={62} Color="Brown" /><br></br>

    </div>
  );
}

export default App;

import './App.css';
import Personal_card from './components/Personal_card';
function App() {
  return (
    <div className="App">
      
      <Personal_card firstname ="Jane"  lastname="Doe" age={45} Color="Black" /><br></br>
      <Personal_card firstname ="Jone" lastname="Smith" age={88} Color="Brown" /><br></br>
      <Personal_card firstname ="Johnson" lastname="Fillmore" age={50} Color="Brown" /><br></br>
      <Personal_card firstname ="Maria" lastname="Maria" age={62} Color="Brown" /><br></br>
    
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      <EventBind/>
      {/* <FunctionClick></FunctionClick> */}
      {/* <ClassClick/> */}
      {/* <Counter></Counter> */}
      {/* <Greet name="Carms" alias="ASTRO fan"/> */}
      {/* <Welcome name="Carms" alias="ASTRO fan"/> */}
    </div>
  );
}

export default App;

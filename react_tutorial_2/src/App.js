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
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Form from './components/Form';
import HookForm from './Hooks/HookForm';
import NavBarHook from './Hooks/NavBarHook';
import Navbar2 from './Hooks/Navbar2';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router className="App">
      <Navbar2/>
      {/* <NavBarHook/> */}
      {/* <HookForm/> */}
      {/* <Form/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <ClassClick/> */}
      {/* <Counter></Counter> */}
      {/* <Greet name="Carms" alias="ASTRO fan"/> */}
      {/* <Welcome name="Carms" alias="ASTRO fan"/> */}
    </Router>
  );
}

export default App;

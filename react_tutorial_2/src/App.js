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
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Hooks/pages/Home'
import Services from './Hooks/pages/Services'
import Blog from './Hooks/pages/Blog'
import Help from './Hooks/pages/Help'
import SignUp from './Hooks/pages/SignUp'
import Users from './Hooks/pages/Users';
import AddUser from './Hooks/pages/AddUser';

function App() {
  return (
    <Router className="App">
      <Navbar2/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/services' exact component={Services}/>
        <Route path='/blog' exact component={Blog}/>
        <Route path='/help' exact component={Help}/>
        <Route path='/signup' exact component={SignUp}/>
        <Route path='/users' exact component={Users}/>
        <Route path='/add_user' exact component={AddUser}/>
      </Switch>
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

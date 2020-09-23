import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Error from "./pages/Error";
import Rooms from "./pages/Rooms";
import SingleRooms from './pages/SingleRooms';
import Navbar from "./components/navbar"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/rooms/" component={Rooms}/>
          <Route exact path="/rooms/:Slug" component={SingleRooms}/>
          <Route component={Error} />
      </Switch>
    </Router>
    
     
    
  );
}

export default App;

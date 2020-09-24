import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import Home from './component/pages/Home';
import Navbar from './component/layout/Navbar';
import NotFound from './component/pages/NotFound';
import  AddUser from './component/user/AddUser';
import EditUser from './component/user/EditUser';
import User from './component/user/User';
 import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

function App() {
  return (
     <Router>
    <div className="App">
     <Navbar/> 

     <Switch>
        <Route exact path ="/" component ={Home}/>
        <Route exact path ="/user/add" component ={AddUser}/> 
        <Route exact path ="/user/edit/:id" component ={EditUser}/> 
        <Route exact path ="/user/:id" component ={User}/>
        <Route component = {NotFound}/>

    </Switch> 
     
  </div>
   </Router> 
  );
}

export default App;

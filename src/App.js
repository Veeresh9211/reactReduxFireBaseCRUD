import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ListBus from './components/listBuses/listbus';
import AddBus from './components/addBus/addBus';
import UpdateBus from './components/updateBus/updateBus';
import Dashboard from './components/dashboard/dashboard';
import Navbar from './components/layout/navbar';
import $ from 'jquery';



function App() {

  const showFilter=()=>{
    var element = document.getElementById("subContainer2");
    $($(element).children()[0]).toggleClass("closed")
    $($(element).children()[1]).toggleClass("opened")
    element.classList.toggle("myStyle");
  }
  return (
    <BrowserRouter>
    <div className="app">
      <div className="mainContainer">
        <div id="subContainer1">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/listBus" component={ListBus}/>
            <Route path="/addBus" component={AddBus}/>
            <Route path="/updateBus/:id" component={UpdateBus}/>   
          </Switch>
        </div>        
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ListSong from './components/listSong/listsong';
import AddSong from './components/addSong/addSong';
import UpdateSong from './components/updateSong/updateSong';
import Dashboard from './components/dashboard/dashboard';
import Navbar from './components/layout/navbar';


function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/listSong" component={ListSong}/>
        <Route path="/addSong" component={AddSong}/>
        <Route path="/updateSong/:id" component={UpdateSong}/>   
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

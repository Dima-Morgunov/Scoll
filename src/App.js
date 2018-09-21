import React, { Component } from 'react';


import './App.css';
import MainPage from './domains/MainPage'
import {Route} from "react-router-dom";
import {PostList} from './domains/adminPages/TestAdmin'
import TestAdmin from "./domains/adminPages/TestAdmin";


class App extends Component {
  render() {
    return (
        <div>
          <Route path="/" exact component={MainPage}/>
          <Route path="/admin" exact component={TestAdmin}/>
            <Route/>
        </div>
    );
  }
}

export default App;

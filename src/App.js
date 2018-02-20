import React, { Component } from 'react';
import Search from './components/Search'
import EverythingContainer from './components/EverythingContainer'
import {
  Route,
  NavLink,
  withRouter
} from "react-router-dom";
import { Divider} from 'semantic-ui-react'
import {connect} from 'react-redux'
import './App.css';

class App extends Component {
  handleClick = (event) => {
    event.preventDefault()
    this.props.history.push("/")
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <div className="nav">
          <div className= "behindImage">
            <img onClick={this.handleClick} className="weWork" src={require('./weworklogo.png')}/>
          </div>
        </div>
        <Divider/>
        <Route exact path="/" component={Search}/>
        <Route id="everythingContainer"exact path="/results" component={EverythingContainer}/>
        
      </div>
    );
  }
}

export default withRouter(connect(null)(App));

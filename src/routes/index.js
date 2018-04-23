import React, { Component } from 'react';
import { BrowserRouter,  Route, browserHistory} from 'react-router-dom';
import MainPage from '../components/MainPage';
import LoginPage from '../components/LoginPage';
import {connect} from 'react-redux';

class Router extends Component {
  constructor(props){
    super(props)
    this.isAuthorized = this.isAuthorized.bind(this)
  }
  isAuthorized(){
    if(this.props.loggedIn){
      return (
        <MainPage />
      )
    } else {
      return (
        <LoginPage />
      )
    }
  }

  render(){
    return (
      <BrowserRouter>
          <Route path="/" render={this.isAuthorized} />
      </BrowserRouter>
    )
  }
};

const mapStateToProps = (state) => ({loggedIn: state.loggedIn});
export default connect(mapStateToProps)(Router);

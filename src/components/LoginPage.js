import React, { Component } from 'react';
import logIn from '../actions/logIn.js';
import {connect} from 'react-redux';
import '../css/LoginPage.css'

class LoginPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      googleKey: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e){
    this.setState({googleKey: e.target.value})
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.logIn(this.state.googleKey);
  }
  render() {
    return (
      <div className="LoginPage">
        <h2>Enter Google API key</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}/>
          <input type="submit" value="Confirm"/>
        </form>
      </div>
    )
  }
};

export default connect(null, logIn)(LoginPage);

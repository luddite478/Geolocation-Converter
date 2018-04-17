import React, { Component } from 'react';
import '../css/ConvertButton.css';
import {connect} from 'react-redux';
import convert from '../actions/convert.js';

class ConvertButton extends Component {
  constructor(props){
    super(props)
    this.handleConvert = this.handleConvert.bind(this)
  }
  handleConvert(){
    this.props.convert(this.props.appState)
  }
  render(){
    return (
      <button className="ConvertButton" onClick={this.handleConvert}>Convert &#10227;</button>
    )
  }
}
const mapStateToProps = state => ({appState: state});
export default connect(mapStateToProps, convert)(ConvertButton);

import React, { Component } from 'react';
import '../css/AddressInput.css';
import {connect} from 'react-redux';

class AddressInput extends Component {
  constructor(props){
    super(props)
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }
  handleKeyUp(e){
    this.props.updateAdress(e.target.value)
  }
  render(){
    return (
        <div className="AddressInput">
          <label>Address:</label>
          <textarea value={this.props.address} onChange={this.handleKeyUp}></textarea>
        </div>
    )
  }
}

const mapStateToProps = state => ({address: state.address});
const mapDispatchToProps = dispatch => ({
  updateAdress: address => {
    dispatch({type: 'UPDATE_ADDRESS', payload: address})
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(AddressInput);

import React, { Component } from 'react';
import '../css/CoordInput.css';
import {connect} from 'react-redux';

class CoordInput extends Component {
  constructor(props){
    super(props)
    this.handleLatUpd = this.handleLatUpd.bind(this)
    this.handleLngUpd = this.handleLngUpd.bind(this)
  }
  handleLatUpd(e){
    this.props.updateLat(e.target.value)
  }
  handleLngUpd(e){
    this.props.updateLng(e.target.value)
  }
  render(){
    return (
      <div className="CoordInput">
        <label>Latitude:</label>
        <input type="text" value={this.props.lat} onChange={this.handleLatUpd} />
        <label>Longitude:</label>
        <input type="text" value={this.props.lng} onChange={this.handleLngUpd} />
      </div>
    )
  }
}

const mapStateToProps = state => ({lng: state.lng, lat: state.lat});
const mapDispatchToProps = dispatch => ({

    updateLat: lat => {
      dispatch({type: 'UPDATE_LAT', payload: lat})
    },
    updateLng: lng => {
      dispatch({type: 'UPDATE_LNG', payload: lng})
    }
  });

export default connect(mapStateToProps,mapDispatchToProps)(CoordInput);

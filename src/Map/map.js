import React, { Component } from 'react';
// import logo from './logo.svg';
import firebase from '../config/firebase';
import { BrowserRouter as Router, Route ,Link} from "react-router-dom";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
// import Image from '../../screen/userImg';

import '../App.css';


var db=firebase.database();
class Map extends Component {
constructor(props){
  super(props)

  this.state={
    coords:null
  }
this.setPosition=this.setPosition.bind(this)

this.dragLocation=this.dragLocation.bind(this)
this.saveLatiandLang=this.saveLatiandLang.bind(this);
}
componentDidMount(){
  this.setPosition()
}
setPosition=()=>{
  navigator.geolocation.getCurrentPosition((position) =>
  this.setState({coords:position.coords})
  )
  
}
dragLocation(e){
  var lati = e.latLng.lat()
  var langi = e.latLng.lng()
  console.log(lati);
  console.log(langi);
  this.setState({coords:{latitude:e.latLng.lat(),longitude:e.latLng.lng()}})
  

}
saveLatiandLang(){
  const coordsData=this.state.coords;
  var userID = firebase.auth().currentUser.uid;
  db.ref(`Users/${userID}/Map_Location/`).set(coordsData)
  this.props.history.push('/dashboard');
}
  render() {
     const {coords}=this.state
    // console.log(coords);
    return (
      <div className="App">
      <h1>Google Map</h1>
     <br/>
     {coords && <MyMapComponent
  isMarkerShown
  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
  coords ={coords}
  setPosition={this.dragLocation}
/>}
  <br/>
  <br/>
  <button onClick={this.saveLatiandLang}>Next</button>
      </div>
    );
  }
}
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={14}
    center={{ lat: props.coords.latitude,lng:props.coords.longitude }}
  >
    {props.isMarkerShown && <Marker onDraggableChanged={props.position}onDragEnd={props.setPosition} position={{ lat: props.coords.latitude, lng:props.coords.longitude}}
    draggable ={true} />}
     
  </GoogleMap>
))

export default Map;

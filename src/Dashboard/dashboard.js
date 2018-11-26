import React, { Component } from 'react';
//import Cards, { Card } from 'react-swipe-deck';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from '../../src/App';

import firebase from '../../src/config/firebase';



// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
//import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
 //import Button from '@material-ui/core/Button';
// import { withStyles } from '@material-ui/core/styles';
// import DeleteIcon from '@material-ui/icons/Delete'



var db = firebase.database();
// const fadeImages = [
//     `${image_1}`,
//     `${image_2}`,
//     `${image_3}`
//   ];

//   const fadeProperties = {
//     duration: 5000,
//     transitionDuration: 500,
//     infinite: false,
//     indicators: true
//   }  


class Dashboard extends Component{
  constructor(props){
    super(props)

    this.state={

    }
    this.setMeeting=this.setMeeting.bind(this);
  }
  setMeeting(){
   this.props.history.push('/set-meeting');
  }
  render(){
    return(
         <div className="App">
            <h1>Dashboard</h1>
            <br/>
            <button onClick={this.setMeeting}>Set A Meeting</button>
    </div>
    )
  }
}
export default Dashboard;

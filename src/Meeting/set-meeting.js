import React, { Component } from 'react';
import Cards, { Card } from 'react-swipe-deck';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import App from '../App';
//import search from '../images/search.svg';
import firebase from '../config/firebase';

import cross from '../images/cross.png';
import tick from '../images/green-tick.jpg';


//import { Fade } from 'react-slideshow-image';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
//import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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


class Setmeeting extends Component {
  constructor(props) {
    super(props)
    

    this.state = {
      profImg_1: null,
      profImg_2: null,
      profImg_3: null,
      nickName:null,
      hasImages:false,
      open: false,
      main:false,
      allImages:'',
      
    }
    this.actionLeft=this.actionLeft.bind(this);
    this.actionRight=this.actionRight.bind(this);
    this.signOut=this.signOut.bind(this);
    this.handleClose=this.handleClose.bind(this);
  }
  componentWillMount() {
    const userID = localStorage.getItem('userId');
    if(userID === null){
      alert('Please Login')
    this.props.history.replace('/App');
    }
    
    else {
    db.ref(`Users/${userID}/`).once('value', (snapshot) => {
      const userData = snapshot.val()
      // console.log(userData);
      
      const a = userData.userImages.url_1;
      const b = userData.userImages.url_2;
      const c = userData.userImages.url_3;
      const userName=userData.nickName;
      this.setState({ profImg_1: a, profImg_2: b, profImg_3: c,hasImages:true,nickName:userName })
      

    })
  }


  }
  componentDidMount(){
    const allImages =this.state;
    db.ref(`Users/`).once('value', (snapshot) => {
         const allUserData=snapshot.val();
         console.log(allUserData);
          for(var key in allUserData){
        //    //console.log(key);
        //    //console.log(allUserData[key].userImages)
            this.setState({allImages:allUserData[key].userImages})
          }
    })
  }


actionLeft(){
  this.setState({ open: true });
  
}
signOut(){
  firebase.auth().signOut()
  .then((success) => {
      localStorage.clear();
      this.props.history.replace('/App');
  })
}
handleClose = () => {
  this.setState({ open: false });
};
actionRight(){
  this.props.history.push('/meeting');
}
goMeet(){
    this.props.history.push('/meeting');
}


  render() {
      const {profImg_1,profImg_2,profImg_3,nickName,allImages}=this.state;
      var data = [profImg_1,profImg_2,profImg_3];
      console.log(allImages);
      return (
        <div className="App">

        <h1>Wellcome Profile Screen</h1>
        
        <br/>
        {/* {allImages.map(item=>{
          return Object.keys(item).map(img =>{
            return <div>
              {console.log(img)}
            </div>
          })
        })} */}
                <div className="image-container">
        <Cards onEnd={this.action} className="root">
        {data.map(item =>
          <Card
            onSwipeLeft={this.actionLeft}
            onSwipeRight={this.actionRight}>
            {/* <h2>{item}</h2> */}
            <img src={item} className="user-imgs"/>
            
            <span> {nickName}</span>
            
          </Card>
          
        )}
        </Cards> 
        <button className="cross" onClick={this.actionLeft}><img src={cross} /></button>
        <button className="tick" onClick={this.goMeet.bind(this)}><img src={tick} /></button>
                 
      </div>
      <div>
      <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Are You Sure Cancel Meeting ?"}</DialogTitle>
            <DialogContent>
              {/* <DialogContentText id="alert-dialog-description">
                Let Google help apps determine location. This means sending anonymous location data to
                Google, even when no apps are running.
              </DialogContentText> */}
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Disagree
              </Button>
              <Button onClick={this.signOut} color="primary" autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
      </div>
  
      </div>
    );
  
    
  }
  
}


export default Setmeeting;

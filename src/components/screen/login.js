import React, { Component } from 'react';

import firebase from '../../config/firebase';
import { BrowserRouter as Router, Route ,Link} from "react-router-dom";
// import App from '../App';
import Addform from './addForm';
// import Routes from '../Routers/router';

import '../../App.css';
 




const provider = new firebase.auth.FacebookAuthProvider();

class Login extends Component {
constructor(props){
  //console.log(props);
  super(props)

  this.state={
    addForm:false,
    login:true,
  }

this.login=this.login.bind(this)

}
login(){
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  
}
  render() {
    
    return (
      
      <div className="App">
        
        <h1>Tender Application</h1>
        <br/>
        <button onClick={this.login}>Login With Facebook</button>
        <br/>
        {/* <Profile/> */}
        <br/>
        {/* {login && <App/>} */}
        {/* {addForm && <Addform/>} */}
        {/* <Route exact path='/'/> */}
        {/* <Routes/> */}

      
       {/* <button className="profileBtn" onClick={()=>{this.props.myFunc('addForm')}}>Next</button> */}
       
       <Link to="/addForm"><button className="profileBtn">Next</button></Link>
       
     
      </div>
      
       
      
    );
  }
}

export default Login;

/////////Code copy//////




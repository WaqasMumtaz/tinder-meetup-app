import React, { Component } from 'react';
// import logo from './logo.svg';
//import Login from './components/screen/login';
import firebase from '../src/config/firebase';
// import Addform from '../src/screen/addForm';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import Routes from '../src/Routers/router';

//import Image from './screen/userImg';
import './App.css';
//console.log(Routes);
 
// const provider = new firebase.auth.FacebookAuthProvider();
class App extends Component {
constructor(props){
  super(props)

  this.state={
    // addForm:false,
    // login:true,
    // images:false,
    // userObj:{}
  }
  
  // this.myFunc=this.myFunc.bind(this);
  // this.backToPage=this.backToPage.bind(this);
  // this.userStateValue=this.userStateValue.bind(this);
  // this.pickUserObj=this.pickUserObj.bind(this);

  }
  
  // backToPage(reverseToPage){
  //  if(reverseToPage === 'App'){
  //    this.setState({addForm:false,login:true})
  //  }
  //  else if(reverseToPage === 'userImg'){
  //   this.setState({addForm:true,login:false,images:false})
  //  }
  // }
  // myFunc(behaviour){
    //console.log('chal jay ga ');
//     if(behaviour === 'addForm'){
//      this.setState({addForm:true,login:false})
//   }
//   else if(behaviour === 'userImg'){
//     this.setState({addForm:false,login:false,images:true})
//   }
//   else {
//     this.setState({addForm:false,login:true})
//   }
// }
// userStateValue(comingState){
// console.log(comingState);
// }
// pickUserObj(obj){
//      this.setState({
//     userObj:obj
      
//      })
// }
  render() {
    // const {login,addForm,images,userObj} =this.state;
    return (
       <Router>
      <div className="App"className="backColor">

      <Routes/>
      
      {/* {login && <Login myFunc={this.myFunc}/>}
      {addForm && <Addform myFunc={this.myFunc} previousBtn={this.backToPage} pickUserObj={this.pickUserObj}/>} 
      {images && <Image previousBtn={this.backToPage} userStateValue={this.userStateValue} sendObj={userObj} />} */}
             
        
      </div>
       </Router>
      
    );
  }
}

export default App;

/////////Code copy//////




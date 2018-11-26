import React, { Component } from 'react';
import {Link} from "react-router-dom";
import firebase from '../../config/firebase';
import Image from '../screen/userImg';
// import App from '../App';
 import history from '../../History/history';


import '../../App.css';
 
var db = firebase.database();
var user;
class Addform extends Component {
constructor(props){
  
  super(props)

  this.state={
    user:'',
    
  }
  // this.formFunc=this.formFunc.bind(this);
  //   this.handleClick=this.handleClick.bind(this);
   // this.funcTo=this.funcTo.bind(this);
    this.handleClick=this.handleClick.bind(this);
}

formFunc(){
  const nickName=this.refs.inputText.value;
  const userNumber=this.refs.inputTextNumber.value;
  // console.log('nickName*****',nickName )
  // console.log('userNumber*****',userNumber )
  this.setState({user:{nickName:nickName,userNumber:userNumber}})
    user={
    nickName:nickName,
    userNumber:userNumber
  }
//  this.props.pickUserObj(user) 
var userID = firebase.auth().currentUser.uid;
   db.ref(`Users/${userID}/userInfo`).set(user);
  // db.ref('Users/').once('value', (snapshot) => {
  //   // const userData=snapshot.val()
  //   for (var key in snapshot.val()){

  //     console.log(key);
  //   }
  // })
  
  //  const setData =localStorage.setItem('Data',JSON.stringify(user))
   
  this.refs.inputText.value ='';
  this.refs.inputTextNumber.value='';
  // this.props.previousBtn('App')
  // funcTo();

}
//  funcTo = ()=>{this.props.myFunc('userImg')}
  
    

  
// handleClick(){
  
//   this.formFunc();
//   this.funcTo();
  
  
//  }

componentWillMount() {
  const userID = localStorage.getItem('userId');
  if(userID === null){
    alert('Please Login')
  this.props.history.replace('/App');
  }
}


handleClick(){
  const nickName=this.refs.inputText.value;
  const userNumber=this.refs.inputTextNumber.value;
  // console.log('nickName*****',nickName )
  // console.log('userNumber*****',userNumber )
  this.setState({user:{nickName:nickName,userNumber:userNumber}})
    user={
    nickName:nickName,
    userNumber:userNumber
  }
  let userID = firebase.auth().currentUser.uid;
  db.ref(`Users/${userID}`).set(user);
//  this.props.pickUserObj(user) 
// db.ref(`Users`).push(user);
// db.ref(`Users`).push(user);
// db.ref('Users/').once('value', (snapshot) => {
//   const userData=snapshot.val()
  //console.log(userData);
//   for (var key in snapshot.val()){
//      //console.log(key);
//      localStorage.setItem('userkey',key);
//   }
// })
this.refs.inputText.value ='';
this.refs.inputTextNumber.value='';
this.props.history.push('/userImg');
 
}
  render() {
    const {user} =this.state;
    const userId=firebase.auth().currentUser.uid;
    localStorage.setItem('userId',userId);
    console.log(userId);
    // const {userStateValue}=this.props;
    // console.log(userStateValue);  
    return (
      
      <div className="App">
        <h1>Add Form</h1>
        
        <input type="text" placeholder="write nick name here" ref="inputText"/>
        <br/>
        <br/>
        <input type="number" placeholder="type your number" ref="inputTextNumber"/>
        <br/>
        
        {/* {images && <Image/>} */}
        {/* <button onClick={myFunc(user)}>Submit</button> */}
        {/* <Link to={`/userImg`}><button className="userImgForm" onClick={this.formFunc}>Next</button></Link> */}
        {/* <button onClick={()=>{this.props.previousBtn('App')}}>Back</button> <button className="userImgForm" onClick={this.handleClick}>Next</button>  */}
        <button className="userImgForm"onClick={this.handleClick}>Next</button> 
     
      </div>
            
    );
  }
}

export default Addform;






import React, { Component } from 'react';
import {Link} from "react-router-dom";
import firebase from '../../config/firebase';
import Map from '../../Map/map';
import history from '../../History/history';


import '../../App.css';
 
var baseImgURL_1;
var baseImgURL_2;
var baseImgURL_3;
var db = firebase.database();
//var userAuth=firebase.auth().currentUser.uid;
class Image extends Component {
constructor(props){
  // console.log(props);
  super(props)

  this.state={
    
  }
  
  
  this.imageFunc_1=this.imageFunc_1.bind(this);
  this.imageFunc_2=this.imageFunc_2.bind(this);
  this.imageFunc_3=this.imageFunc_3.bind(this);
  // this.addImageInDatabase=this.addImageInDatabase.bind(this);
  this.pickUserId=this.pickUserId.bind(this);
}

pickUserId(){
  const userImgs ={
    url_1:baseImgURL_1,
    url_2:baseImgURL_2,
    url_3:baseImgURL_3,

  }
//   console.log(baseImgURL_1);
 var userID = firebase.auth().currentUser.uid;
 db.ref(`Users/${userID}/userImages/`).set(userImgs)
// console.log(userID)
// db.ref('Users/').once('value', (snapshot) => {
    //  const userData=snapshot.val()
     //console.log(userData);
    //for (var key in snapshot.val()){

      //console.log(key);
       
      
   //})
  localStorage.setItem('profImgs',JSON.stringify(userImgs));
   this.props.history.push('/menu');
}
imageFunc_1(){
  
  const for_image =this.refs.img_1;
  var filesSelected = for_image.files;
  
  if (filesSelected.length > 0) {
    var fileToLoad = filesSelected[0];
    
    var fileReader = new FileReader();
    
    fileReader.onload = function(fileLoadedEvent) {
        var srcData = fileLoadedEvent.target.result; // <--- data: base64
        baseImgURL_1=srcData;
         console.log(baseImgURL_1) ;
    }
    fileReader.readAsDataURL(fileToLoad);
  }
}
imageFunc_2(){
  // var baseImgURL;
  
   const for_image2 =this.refs.img_2;
  
  var filesSelected = for_image2.files;
  
  if (filesSelected.length > 0) {
    var fileToLoad = filesSelected[0];
    
    var fileReader = new FileReader();
    
    fileReader.onload = function(fileLoadedEvent) {
        var srcData = fileLoadedEvent.target.result; // <--- data: base64
        baseImgURL_2=srcData;
        // console.log(baseImgURL) ;
    }
    fileReader.readAsDataURL(fileToLoad);
  }
}
imageFunc_3(){
  // var baseImgURL;
  const for_image3 =this.refs.img_3;
  var filesSelected = for_image3.files;
  if (filesSelected.length > 0) {
    var fileToLoad = filesSelected[0];
    
    var fileReader = new FileReader();
    
    fileReader.onload = function(fileLoadedEvent) {
        var srcData = fileLoadedEvent.target.result; // <--- data: base64
        baseImgURL_3=srcData;
        // console.log(baseImgURL) ;
    }
    fileReader.readAsDataURL(fileToLoad);
  }
}

// addImageInDatabase(){
//   db.ref('Users/').push(baseImgURL);
//   console.log(baseImgURL);
// }


  render() {
    //console.log(this.props)
    return (
      
      <div className="App">
        <h1>Profile Images Page</h1>
        
        <input type="file" placeholder="Insert Pics" onChange={this.imageFunc_1} ref="img_1"/>
        <br/>
        <br/>
        <input type="file" placeholder="Insert Pics"onChange={this.imageFunc_2} ref="img_2"/>
        <br/>
        <br/>
        <input type="file" placeholder="Insert Pics"onChange={this.imageFunc_3} ref="img_3"/>
        
        <br/>
        {/* <button onClick={()=>{this.props.previousBtn('userImg')}}>Back</button>  */}
        <button className="profileBtn" onClick={this.pickUserId}>Next</button>
              
      </div>
            
    );
  }
}

export default Image;












import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import firebase from '../../config/firebase';
import history from '../../History/history';

import '../../App.css';
import { pathToFileURL } from 'url';
var db = firebase.database();
class Menu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            beverages: {},
            timeData:{},
        }
        this.handleChange = this.handleChange.bind(this);
        this.checkData = this.checkData.bind(this);
        this.timeDuration = this.timeDuration.bind(this);
    }

    handleChange(e) {
        // console.log(e.target);
        const name = e.target.name;
        const checked1 = e.target.checked;
        // console.log(e.target.name)
        //   console.log('checked--->',checked1);
        const nameCheck1 = e.target.name;
        //console.log('name--->',nameCheck1);

        //let myOBJ = { waqas: 'yele' };
        const valueCheck1 = e.target.value;
        //console.log('value--->',valueCheck1);
        //var userID = firebase.auth().currentUser.uid;
        if (checked1 === true) {
            // db.ref(`Users/${userID}/Beverages/${name}`).set(valueCheck1).then(()=>{
            const obj = this.state.beverages;
            obj[name] = valueCheck1;
            this.setState({ beverages: obj });
            
            // })
        }
        else {
            const obj = this.state.beverages;
            delete obj[name];
            // db.ref(`Users/${userID}/Beverages`).child(name).remove().then(()=>{
            this.setState({ beverages: obj });
            // })button dikhe next wala
        }


        console.log(this.state.beverages);
    }

    checkData() {
        const obj = this.state.beverages;
        var isSave = window.confirm('Are you Sure save it ??');
        //console.log(isSave)
        
        var userID = firebase.auth().currentUser.uid;
        if (isSave) {
            db.ref(`Users/${userID}/Beverages`).set(obj).then(()=>{
                //console.log('done');
                alert('Your Data Has Been Submitted...');

            })
            this.props.history.push('/map');
        }
        
    }
timeDuration(e){
const name = e.target.name;
const checked1 = e.target.checked;
// console.log(e.target.name)
// console.log('checked--->',checked1);
const nameCheck1 = e.target.name;
// console.log('name--->',nameCheck1);

const valueCheck1 = e.target.value;
// console.log('value--->',valueCheck1);
var userID = firebase.auth().currentUser.uid;
if (checked1 === true) {
    // db.ref(`Users/${userID}/Beverages/${name}`).set(valueCheck1).then(()=>{
    const obj = this.state.timeData;
    obj[name] = valueCheck1;
    
    this.setState({ timeData: obj });
    

    // })
}
 else {
     const obj = this.state.timeData;
     delete obj[name];
    // db.ref(`Users/${userID}/Beverages`).child(name).remove().then(()=>{
    this.setState({ timeData: obj });
    // })button dikhe next wala
}
//console.log(this.state.timeData);
const timeData =this.state.timeData;
db.ref(`Users/${userID}/time_duration/`).set(timeData)
}
    
    render() {
        
        return (
            <div>
                <div className="parent">
                <h1>Select Beverages</h1>
                <br />
                </div>
                <div className="childBeverages">
                <label class="container">COFEE
                <input type="checkbox" name="check1" value="Cofee" onChange={e => this.handleChange(e)} />
                    <span class="checkmark"></span>
                </label>

                <label class="container">JUICE
                    <input type="checkbox" name="check2" value="Juice" onChange={e => this.handleChange(e)} />
                    <span class="checkmark"></span>
                </label>

                <label class="container">COCTAIL
                        <input type="checkbox" name="check3" value="Cocktail" onChange={e => this.handleChange(e)} />
                    <span class="checkmark"></span>
                </label>

                <label class="container">COOLDRINK
                            <input type="checkbox" name="check4" value="Cooldrink" onChange={e => this.handleChange(e)} />
                    <span class="checkmark"></span>
                </label>
                </div> 
                 <div className="duration">
                 <h1>Select Time Duration</h1>
                 <br/>
                 </div>
                 <div className="timeChilds">
                 <label class="container">30 mint
                <input type="checkbox" name="half-hr" value="30" onChange={e => this.timeDuration(e)} />
                    <span class="checkmark"></span>
                </label>

                <label class="container">60 mint
                    <input type="checkbox" name="one-hr" value="60" onChange={e => this.timeDuration(e)} />
                    <span class="checkmark"></span>
                </label>

                <label class="container">120 mint
                        <input type="checkbox" name="two-hr" value="120" onChange={e => this.timeDuration(e)} />
                    <span class="checkmark"></span>
                </label>
                </div>
                <br />
                
                <div className="btn"><button onClick={this.checkData} >Next</button></div>

            </div>
        );
    }


}

export default Menu;
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from '../App'
import * as Screens from '../components/screen/index';
import history from '../History/history';
//console.log(Screens.Addform);

const Routes =()=>(
    <Router history={history}>
        <div>
             <Route exact path="/App" component={Screens.Login}/>  
              <Route  path="/addForm" component={Screens.Addform}/> 
              <Route path="/userImg" component={Screens.Image}/>
             <Route path="/menu" component={Screens.Menu}/>
             <Route path="/map" component={Screens.Map}/>
             <Route path="/dashboard" component={Screens.Dashboard}/>
             <Route path="/set-meeting" component={Screens.Setmeeting}/>
             <Route path="/meeting" component={Screens.Meeting}/>


     </div>
    </Router>
);

export default Routes;
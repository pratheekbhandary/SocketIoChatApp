import React, { Component } from 'react';
import '../App.css';

export default class Friend extends Component{
    constructor(){
        super();
    }
    
    render(){
        return(
        <div className="aFriend">
            <div className="profilePic">pic</div> 
            <div className="friendName ">friend name</div>
            <div className="friendLastMessage">Last Message</div>
        </div>
        );
    }
}
import React, { Component } from 'react';
import '../App.css';
import Chat from './Chat';

export default class ChatHistory extends Component{
    constructor(){
        super();
    }
    
    render(){
        return(
        <div className="rightMenu" id="style-1">
            <Chat/>
        </div>
            
        );
    }
}
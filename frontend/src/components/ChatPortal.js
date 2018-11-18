import React, { Component } from 'react';
import '../App.css';
import StyledButton from '../genericComponents/StyledButton';
import ChatHistory from'./ChatHistory';

export default class ChatPortal extends Component{
    constructor(){
        super();
    }
    
    render(){
        return(
            <div>
            <ChatHistory/>
            <input className="textSpace" type="text"></input>
            <div className="sendButton">
                <StyledButton >Send</StyledButton></div>
            </div>
        );
    }
}
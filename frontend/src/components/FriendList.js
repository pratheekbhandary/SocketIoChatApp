import React, { Component } from 'react';
import '../App.css';
import Friend from './Friend';
import SearchFriend from'./SearchFriend';

export default class FriendList extends Component{
    constructor(){
        super();
    }
    
    render(){
        return(
            <span>
                <SearchFriend/>
                <div className="friendlist">
                    <Friend/>
                </div>
            </span>
            
        );
    }
}
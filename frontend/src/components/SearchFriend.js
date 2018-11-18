import React, { Component } from 'react';
import '../App.css';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';


export default class FriendList extends Component{
    constructor(){
        super();
    }
    
    render(){
        return(
            <div className="friendSearchBar">
                <span className="searchIcon"><Icon>search</Icon></span>
                <span className="searchField">
                <TextField id="input-with-icon-grid" label="Search friends"/>
                </span> 
            </div>            
        );
    }
}
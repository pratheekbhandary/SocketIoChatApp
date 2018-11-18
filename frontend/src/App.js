import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';
import TopNavBar from './components/TopNavBar';
import FriendList from './components/FriendList';
import ChatPortal from './components/ChatPortal';
import AvailableFreiendsModal from './components/AvailableFreiendsModal';

class App extends Component {
  constructor(){
    super();
    this.selectUser=this.selectUser.bind(this);
    this.state={
      user:undefined,
    }
  }

  selectUser(user){
    this.setState({user})
  }

  

  render(){
    return(
      <div className="App">
      {!this.state.user && <AvailableFreiendsModal/>}
        <TopNavBar/>
        <div className="leftMenu" id="style-1">
          <FriendList/>
        </div>
        <ChatPortal/>
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default App;
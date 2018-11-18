import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';

import '../App.css';

export default class AvailableFreiendsModal extends Component{
    constructor(){
        super();
        this.state = {
            open: true,
          };
    }

    handleOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };
    
    render(){
        return(
            <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
        >
        <div className="center">Select Any Charecter</div>
        </Modal>
        );
    }
}
//ADD FRIENDS BUTTON & DIALOGUE

import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Styles from './adminpanelstyle.css';




function InviteFriend () {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    //Handles cancel/close modal without action  
    const handleClose = () => {
      setOpen(false);
    };

    //Handles OK/invite  
    const handleOK = (Name) => {
      alert(Name + "has been added to this tournament as a player, but we'll need their Gamer Tag to include their performance stats.  They will now receive an invitation to update us with their Gamer Tag.")
    }

    return (
      <div className="adminPanel">
        <Button id="inviteFriendBtn" variant="contained" color="secondary" className="adminBtn" onClick={handleClickOpen}>
          Invite A Friend
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Invite A Friend</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To invite a friend to join Bragging Rights and participate in a tournament, enter their name and email here.
            </DialogContentText>
            <TextField
            //   autoFocus
              margin="dense"
              id="name"
              label="Name"
              variant="outlined"
              type="string"
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Email Address"
              variant="outlined"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" color="secondary" className="adminBtn" onClick={handleClose}>
              Cancel
            </Button>
            <Button id="addFriendBtn" color="secondary" className="adminBtn" variant="outlined" type="submit" onClick={handleOK}>
              Invite
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  
export default InviteFriend;
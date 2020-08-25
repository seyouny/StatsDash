//ADD FRIENDS BUTTON & DIALOGUE

import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



function InviteFriend () {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      alert("(Name) has been added to this tournament as a player, but we'll need their Gamer Tag to include their performance stats.  They will now receive an invitation to update us with their Gamer Tag.")
    };
  
    return (
      <div className="adminPanel">
        <Button id="inviteFriendBtn" variant="outlined" color="primary" onClick={handleClickOpen}>
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
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button id="addFriendBtn" type="submit" onClick={handleClose} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  
export default InviteFriend;
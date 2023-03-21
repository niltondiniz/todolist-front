import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface Props{
    propsOpen: boolean;
    taskId: number;
    handleClose: any;
    dialogTitle: string;
    dialogMessage: string;
    dialogLabel: string;
    dialogButtonCancelText: string;
    dialogButtonConfirmText: string;
}

export default function DialogFormComponent(props: Props) {

  return (
    <div>      
      <Dialog open={props.propsOpen} onClose={props.handleClose}>
        <DialogTitle>{props.dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.dialogMessage}
          </DialogContentText>
          {          
          props.dialogLabel !== "" ?
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={props.dialogLabel}
            type="text"
            fullWidth
            variant="standard"            
          /> : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>{props.dialogButtonCancelText}</Button>
          <Button onClick={props.handleClose}>{props.dialogButtonConfirmText}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
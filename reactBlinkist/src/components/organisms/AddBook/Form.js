import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '../../atoms/Text/TextField';
import { Container } from '@material-ui/core';
import Button from '../../atoms/Button/Button';
import { withStyles } from "@material-ui/core/styles";

import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));




const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
    
  );
});


const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);
export default function BasicTextFields({ parentCallback }) {


  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [time, setTime] = useState('');
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    parentCallback();
    setOpen(false);
  };

  const sendData = () => {
    const tempBook = {
      title,author,category,image: "image.png",time,status: "true"
  };

   fetch('http://localhost:8000/allBooks/', {
    method: 'POST',
    body: JSON.stringify(tempBook),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
  parentCallback();
};

return (
  <Container maxWidth='md'>
  <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add Book
        </DialogTitle>
        <DialogContent dividers>


    <TextField id="outlined-basic" data-testid='form1' value='' name="Title" variant="outlined" onChange={event => { setTitle(event.target.value); }} /><br></br>
    <TextField id="outlined-basic" data-testid='form2' value='' name="Author" variant="outlined" onChange={event => { setAuthor(event.target.value); }} /><br></br>
    <TextField id="outlined-basic" data-testid='form3' value='' name="Category" variant="outlined" onChange={event => { setCategory(event.target.value); }} /><br></br>
    <TextField id="outlined-basic" data-testid='form4' value='' name="Time" variant="outlined" onChange={event => { setTime(event.target.value); }} /><br></br>
    
    <Button name='Submit' data-testid='form5' onClick={() => sendData()} endIcon={null}/>
</DialogContent></Dialog>
</Container>
  
);
}

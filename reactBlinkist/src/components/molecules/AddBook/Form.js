import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '../../atoms/Text/TextField';
import { Container } from '@material-ui/core';
import Button from '../../atoms/Button/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields({ parentCallback }) {


  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const sendData = () => {
    var tempBook = {
      title,author,category,image: "image.png",status: "true"
  }

  fetch('http://localhost:8000/blogs/', {
    method: 'POST',
    body: JSON.stringify(tempBook),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  parentCallback();
}

return (
  <Container maxWidth='md'>

    <TextField id="outlined-basic" name="Your Name" variant="outlined" onChange={event => { setTitle(event.target.value); }} /><br></br>
    <TextField id="outlined-basic" name="Book Name" variant="outlined" onChange={event => { setAuthor(event.target.value); }} /><br></br>
    <TextField id="outlined-basic" name="Category" variant="outlined" onChange={event => { setCategory(event.target.value); }} /><br></br>
    <Button name='Submit' onClick={() => sendData()} endIcon={null}/>

  </Container>
);
}

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '../../atoms/Button/Button';
import Form from '../../molecules/AddBook/Form'
import Logo from '../../atoms/Logo/Logo'
import BooksCollection from '../ToolBar/BooksCollection'
import { Container } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import MainMenuBar from './MainMenuBar';
import TextField from '../../atoms/Text/TextField'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const [search, setSearch] = useState('');
  const [tempTitle, setTempTitle] = useState('temporary');
  const [tempAuthor, setTempAuthor] = useState();
  const [tempCategory, setTempCategory] = useState();
  const [status, setStatus] = useState(false);
  const callBackFunction = () => {
      setValue(0);
  }

  
  const changeState1 = (val) =>{
    setValue(val);
  }

  const textSearch = (text) =>{
    setSearch(text);
  }

  const changeState = (val) => {
    if(val === 2)
    {
      setSearch('');
      setValue(0);
    }
    else
    {
      
      setValue(2);
    }
  }
  return (
    <Container maxWidth='md'>
      <div className={classes.root}>
        <AppBar position="static" elevation={0}>
          <Toolbar>
            <Logo />
            <Button endIcon={<SearchSharpIcon />} onClick={() => changeState(value)}/>
            { (value===0||value===1) && <MainMenuBar onPress={(val)=>changeState1(val)}/>}
            { value===2 && <TextField onChange={event => textSearch(event.target.value) }/>}
            <Button name='Logout' variant='danger' endIcon={null}/>
          </Toolbar>
        </AppBar>
        <div>
          {value === 1 && <Form parentCallback={()=>callBackFunction()} />}
          {(value === 0||value ===2) && <BooksCollection search={search}/>}
        </div>
      </div>
    </Container>
  );
}

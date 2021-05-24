import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Form from '../AddBook/Form';
import Logo from '../../atoms/Logo/Logo';
import BooksCollection from '../ToolBar/BooksCollection';
import { Container } from '@material-ui/core';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import MainMenuBar from './MainMenuBar';
import TextField from '../../atoms/Text/TextField';
import Library from '../Library/Library';
import LoginButton from '../Login/Login';
import Profile from '../Login/Profile';
import IconButton from '../../atoms/Button/Icon';

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
const useThisStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function ButtonAppBar() {
  const menuClasses = useThisStyle();
  const classes = useStyles();
  const anchorRef = React.useRef(null);
  const [value, setValue] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = useState('');


  const callBackFunction = () => {
      setValue(0);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }
  
  const changeState1 = (val) =>{
    setValue(val);
    if(val === 3)
    {
      
      setOpen((prevOpen) => !prevOpen);
    }
  };

  const textSearch = (text) =>{
    setSearch(text);
  };

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
  };

  const [exploreCategory, setExploreCategory] = useState('');
  const categorySearch = category => {
    setExploreCategory(category);
    setValue(4);
  };

  return (

    <Container maxWidth='md'>
      <div style={{float: 'right'}}>
      <LoginButton/>
            <Profile/>
            </div>
      <div className={classes.root}>
        <AppBar position="static" elevation={0}>
          <Toolbar>
            <Logo />
            <IconButton endIcon={<SearchSharpIcon />} onClick={() => changeState(value)}/>
            
            { (value===0||value===1||value===3||value===4) && <MainMenuBar categorySearch={(category)=>categorySearch(category)} onPress={(val)=>changeState1(val)}/>}
            { value===2 && <TextField name="Search for books,authors" onChange={event => textSearch(event.target.value) }/>}
            
           
          </Toolbar>
         
        </AppBar>
        
          <div id='content' style={{opacity: "1"}}>
          {value === 4 && <Library search={exploreCategory}/>}
          {value === 1 && <Form parentCallback={()=>callBackFunction()} />}
          {(value === 0||value === 1||value ===2||value === 3) && <BooksCollection search={search}/>}
         
        </div>
      </div>

    </Container>


  );
}

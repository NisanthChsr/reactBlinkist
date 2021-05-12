import React, { useState } from 'react';
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
import MenuBar from './MenuBar';
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

export default function ButtonAppBar({onPress}) {
  const classes = useStyles();

  const [value, setValue] = useState(0);


  //setStatus(false);
    const handleEvent = val => {
        onPress(val);
    }

  return (
    
    <Toolbar>
            <Button name='Explore' endIcon={<ExpandMoreIcon /> } />
            <Button name='My Library' onClick={()=>handleEvent(0)} endIcon={null}/>
            <Button name='Add Book' onClick={()=>handleEvent(1)} endIcon={null}/>
            
           </Toolbar>
          
  );
}

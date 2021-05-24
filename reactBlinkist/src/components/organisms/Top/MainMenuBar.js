import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '../../atoms/Button/Button';
import Explore from '../Explore/Explore';
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

export default function ButtonAppBar({ onPress, categorySearch}) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  
  const handleEvent = val => {
    
    onPress(val);

  };

  const getExploreCategory = category => {
    categorySearch(category);
  };
  return (

    <Toolbar>
      <Explore getExploreCategory={(category)=>getExploreCategory(category)}/>
      <Button name='My Library' onClick={() => handleEvent(0)} endIcon={null} />
      <Button name='Add Book' onClick={() => handleEvent(1)} endIcon={null} />

    </Toolbar>
   

  );
}

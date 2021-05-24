import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const TextButtons = ({name,onClick,endIcon,variant}) => {


  const classes = useStyles();
  //console.log(name);
  return (
   // <div className={classes.root}>
      <Button data-testid='2' onClick={onClick} endIcon={endIcon} fullWidth >
        <strong>{name}</strong>
      </Button>
    //</div>
  );
};

export default TextButtons;

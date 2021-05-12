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

const TextButtons = ({name,onClick,endIcon}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button onClick={onClick} >
        {name}{endIcon}
      </Button>
    </div>
  );
}

export default TextButtons;

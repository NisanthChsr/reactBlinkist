import React from 'react';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const Text = ({name,onChange,value,variant}) => {
    const classes = useStyles();
    return(
        <div>
        <TextField data-testid='1' required  placeholder={name} inputProps={{ 'aria-label': 'description' }} onChange={onChange} variant={variant} fullWidth/>
        </div>
    );
};

export default Text;
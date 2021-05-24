import React from 'react';
import { TextField } from '@material-ui/core';


const Text = ({name,onChange,variant}) => {
  
    return(
        <div>
        <TextField data-testid='1' required  placeholder={name} inputProps={{ 'aria-label': 'description' }} onChange={onChange} variant={variant} fullWidth/>
        </div>
    );
};

export default Text;
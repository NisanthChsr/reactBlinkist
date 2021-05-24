import React from 'react';
import Button from '@material-ui/core/Button';


const TextButtons = ({name,onClick,endIcon,variant}) => {


  return (
      <Button variant='contained' color='secondary' onClick={onClick} endIcon={endIcon} fullWidth >
        <strong>{name}</strong>
      </Button>
   
  );
};

export default TextButtons;

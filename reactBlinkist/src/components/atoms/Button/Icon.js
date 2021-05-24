import React from 'react';
import IconButton from '@material-ui/core/IconButton';

const TextButtons = ({onClick,endIcon}) => {

  return (
      <IconButton role='icon' onClick={onClick}  >
          {endIcon}
      </IconButton>
  );
};

export default TextButtons;

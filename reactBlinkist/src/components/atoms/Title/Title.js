import {React} from 'react';
import "@fontsource/raleway";
import { Typography } from '@material-ui/core';

  
const title = ({name}) => {
    return (
    
           <strong><Typography variant='h4' data-testid='3'>{name}</Typography></strong> 
      
    );
};

export default title;
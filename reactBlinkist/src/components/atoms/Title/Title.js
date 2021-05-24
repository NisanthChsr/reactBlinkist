import {React} from 'react';
import "@fontsource/raleway";
import {makeStyles} from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//     root: {
//     typography: {
//         h1: {
//             fontFamily: 'Raleway'
//         }
//     }
    
// }}));
  
const title = ({name}) => {
    //const classes = useStyles();
    return (
    
           <strong><Typography variant='h4' data-testid='3'>{name}</Typography></strong> 
      
    );
};

export default title;
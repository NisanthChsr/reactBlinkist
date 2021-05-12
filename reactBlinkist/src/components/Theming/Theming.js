import { createMuiTheme } from '@material-ui/core';
import React from 'react';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FFFFFF'
        }
    },
    spacing: 10,
    overrides: {
        MuiAppBar: {
            root: {
                
                backgroundColor: '#FFFFFF'
            }
        },
        MuiToolbar: {
            root: {
               
                backgroundColor: '#FFFFFF'
            }

        },
        MuiButton: {
            
            root: {
                
                '&:hover': {

                    textDecoration: 'underline #22c870',
                    textDecorationThickness: '2px'
                }

            }
            
        },
        MuiTabs: {
            palette :{
                primary: '#22c870'
            }
            
        }
        

    }
})
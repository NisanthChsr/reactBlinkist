import { createMuiTheme } from '@material-ui/core';
import React from 'react';
import "@fontsource/raleway";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#22c870'
        },
        secondary: {
            main: '#22c870'
        }
    },

    typography: {
        fontFamily: "Raleway",
        h4: {
            fontFamily: "Raleway"   
        }
    },
    props: {
        MuiButton: {
            root: {
                disableElevation: false
            }
        }
    },
    overrides: {
        
        MuiAppBar: {
            root: {
                fontFamily: "Raleway",
                backgroundColor: '#FFFFFF',
                // width: '1000px'
                width: 700
            },
            colorPrimary: {
                backgroundColor: '#FFFFFF',
                //fontFamily: "Raleway"
                //color: '#22c870'
            }
        },
        MuiToolbar: {
            root: {
                backgroundColor: '#FFFFFF',
                width: '500px'
            },
            regular: {
                '@media (min-width: 600px)': {
                    paddingLeft: "0px"
                }
            },
        

        },

        MuiButton: {
            
            root: {
                
                textTransform: 'capitalize',
                fontSize: '15px',

                '&:hover': {

                    textDecoration: 'underline #22c870',
                    
                    textDecorationThickness: '2px'
                },
                width: '10px',
                

            },
            containedSecondary:{
                backgroundColor: '#FFFFFF',
                '&:hover': {
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    backgroundColor: '#0365F2'
                }
            }


        },
        MuiDialog: {
            paper: {
                width: 400
            }
        },
        MuiCardMedia: {
            media: {
                width: "100%",
                height: "100%"
            }
        },
        MuiTab: {
            root: {
                fontSize: "1.125rem",
                padding: "0px",
            },
            textColorInherit: {
                textTransform: "none",
                minWidth: "40%",
                '&$selected': {
                    color: "#68DF81",
                },
                '&:hover': {
                    borderColor: "#6d787e"
                },
                borderBottom: ".125rem solid #6d787e",
            },
            wrapper: {
                alignItems: "baseline",
                fontWeight: "bold",
                paddingBottom: "0.5rem"
            }
        },
        MuiList: {
            root: {
                backgroundColor: '#F1F6F4',
               
            }
        },
        MuiInputBase: {
            root: {

                primary: {
                    main: '#000000'
                }

            }
        },
        MuiMenu: {
            list: {
                spacing: 10
            }
        },
        MuiContainer: {
            root: {
                width: 955
            }
        },
        MuiListItem: {
            gutters: {
                paddingLeft: 10,
                paddingRight: 10
            }
        },
        MuiGrid: {
            root: {
                paddingRight: 6
            }
        },
        MuiTypography: {
            root: {
                fontFamily: 'Raleway'
            }
        }
    }
});

export default theme;
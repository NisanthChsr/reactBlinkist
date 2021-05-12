import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Header from '../HeaderTool/Header';
import MenuBar from '../Top/MenuBar'
import Title from '../../atoms/Title/Title'
import Theming from '../../Theming/Theming'
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core';
import BookCard from '../../molecules/Book/BookCard'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
}));

const SimpleTabs = ({ search }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [books, setBooks] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setBooks(data);
      })
  }, [])


  const handleClick = (id, status) => {

    let tempBook={};
    for(var i=0;i<books.length;i++)
    {
        if(books[i].id === id)
        { 
          if(status==='true')
          status='false';
          else
          status='true';
          books[i].status=status.toString();
          tempBook=books[i];
        }
    }

    fetch('http://localhost:8000/blogs/' + id, {
      method: 'PUT',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(tempBook)
    })

    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setBooks(data);
      })

  } 
  
  var resultFilter = [];
  const searchBooks = () =>{
    if(books)
    {
      if(search!==''){
      search=search.toLowerCase();
        for(var i=0;i<books.length;i++)
        {
          if(books[i].title.toLowerCase().indexOf(search)>-1||books[i].author.toLowerCase().indexOf(search)>-1||books[i].category.toLowerCase().indexOf(search)>-1)
          {
            resultFilter.push(books[i]);
          }
        }
      }
      else{
        resultFilter=[...books];
      }
      //console.log(result);
    }
    return resultFilter;
  }
  var result = searchBooks();
  
  return (
    <Container maxWidth='md'>
      <div className={classes.root}>
        <Title />
        <AppBar position="static" elevation={0}>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Currently reading" {...a11yProps(0)} />
            <Tab label="Finished" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          {books && <Header name='finished' books={result} status={"true"} onClick={(id,status) => handleClick(id,status)} />}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {books && <Header name='Read again' books={result} status={"false"} onClick={(id,status) => handleClick(id,status)} />}
        </TabPanel>
      </div>
    </Container>
  );
}

export default SimpleTabs;
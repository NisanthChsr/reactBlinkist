import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Header from '../HeaderTool/Header';
import Title from '../../atoms/Title/Title';

import { Container } from '@material-ui/core';

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
        <Box paddingTop={3}>
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

  const [books, setBooks] = useState([
    {
      "title": "Post Corona",
      "author": "Scoot Galloway",
      "category": "Economics",
      "time": "12",
      "image": "https://images.blinkist.com/images/books/6007f93c6cee070007a81d3f/1_1/250.jpg",
      "status": "true",
      "id": 17
    },
    {
      "title": "Fault Lines",
      "author": "Karl Pillemer",
      "category": "Relationships",
      "image": "https://images.blinkist.com/images/books/60645e806cee070007b3bc0a/1_1/470.jpg",
      "time": "15",
      "status": "true",
      "id": 18
    }
  ]);
  
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBooks(data);
      });
  }, []);


  const handleClick = async (id, status) => {

    let tempBook={};
    for(let i=0;i<books.length;i++)
    {
        if(books[i].id === id)
        { 
          if(status==='true'){
          status='false';
          }
          else{
          status='true';
          }
          books[i].status=status.toString();
          tempBook=books[i];
        }
    }

    await fetch('http://localhost:8000/blogs/' + id, {
      method: 'PUT',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(tempBook)
      
    });

    await fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBooks(data);
      });

  }; 
  
  let resultFilter = [];
  const searchBooks = () =>{
    if(books)
    {
      if(search!==''&&search!==null){
      search=search.toLowerCase();
        for(let i=0;i<books.length;i++)
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
    }
    return resultFilter;
  };
  const result = searchBooks();
  
  return (
    <Container maxWidth='md'>
      <div className={classes.root}>
     <br></br>
        <Title name="My Library"/>
        <br></br><br></br>
        <AppBar position="static" elevation={0}>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
           <Tab label="Currently reading" {...a11yProps(0)} />
            <Tab label="Finished" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          {books && <Header name='Completed' books={result} status={"true"} onClick={(id,status) => handleClick(id,status)} />}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {books && <Header name='Read again' books={result} status={"false"} onClick={(id,status) => handleClick(id,status)} />}
        </TabPanel>
      </div>
    </Container>
  );
};

export default SimpleTabs;
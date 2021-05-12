import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import BookCard from '../../molecules/Book/BookCard'
import Container from '@material-ui/core/Container'
const Header = ({name,books,status,onClick}) => {

    //console.log(books);

    let allbooks = books.map((item) => {
        
          if (item.status ===status)
            return (
              <Grid item xs={4}>
                <BookCard name={name} title={item.title} author={item.author} category={item.category} onClick={()=>onClick(item.id,status)} />
              </Grid>
            )
        })
    
    return ( 
        
        <Grid container spacing={2}>
        {allbooks}
        </Grid>
    
     );
}
 
export default Header;
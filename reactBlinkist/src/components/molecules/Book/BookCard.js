import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '../../atoms/Button/CardButtons';
import Typography from '@material-ui/core/Typography';
import {ListItem,ListItemIcon} from '@material-ui/core';
import TimeIcon from '@material-ui/icons/AccessTime';
//import { ListItemIcon } from '@material-ui/core';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function BookCard({name,title,author,image,category,time,onClick,visible}) {
  const classes = useStyles();
  //console.log(visible,title);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Image"
          height="140"
          image={image}
          title= ""
        />
        <CardContent>
          <Typography gutterBottom variant="title" component="h2" noWrap>
         <strong>{title}</strong>
          </Typography><br></br>
          <Typography gutterBottom variant="subtitle1" component="h2">
         <strong>{author}</strong>  
          </Typography><br></br>
          <Typography gutterBottom variant="subtitle1" component="h2">
          <strong> {category}</strong>
          </Typography>
          <ListItem >
            <ListItemIcon><TimeIcon/></ListItemIcon>
            <Typography><strong>{time}min</strong></Typography>
          </ListItem>
         
        </CardContent>
      </CardActionArea>
      
     { visible && <CardActions>
       <Button name={name} size="small" color="primary" onClick={onClick} endIcon={null}/>
      </CardActions>}
    </Card>
  );
}

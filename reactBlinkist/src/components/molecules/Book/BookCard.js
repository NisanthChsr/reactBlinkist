import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '../../atoms/Button/Button'
import Typography from '@material-ui/core/Typography';
import Blinklist from './Blinklist.png';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function BookCard({name,title,author,category,onClick}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Image"
          height="140"
          image={Blinklist}
          title= ""
        />
        <CardContent>
          <Typography gutterBottom variant="title" component="h2">
            {title}
          </Typography><br></br>
          <Typography gutterBottom variant="subtitle1" component="h2">
            {author}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="h2">
            {category}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button name={name} size="small" color="primary" onClick={onClick} endIcon={null}/>
         
        
      </CardActions>
    </Card>
  );
}

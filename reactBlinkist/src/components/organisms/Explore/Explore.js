import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Grid, ListItem } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faLandmark, faBrain, faFlask, faGraduationCap, faLightbulb, faComment, faHeartbeat, faHeart, faGlobeAsia, faBullseye, faPray, faHistory, faSimCard, faUsers } from '@fortawesome/free-solid-svg-icons';
import MyButton from '../../atoms/Button/Button';
import {ExpandMore,ExpandLess} from '@material-ui/icons';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export default function CustomizedMenus({ getExploreCategory }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [icon, setIcon] = React.useState(0);
    const handleClick = (event) => {
        if(icon === 0)
        {setIcon(1);}
        else
        {setIcon(0);}
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        if(icon === 0)
        {setIcon(1);}
        else
        {setIcon(0);}
    };

    const filterCategory = (category) => {
        getExploreCategory(category);
    };

    return (
    <div>
      <MyButton
      name='Explore'
      endIcon={(icon===0 && <ExpandMore/>)||<ExpandLess/>}
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
        
      />
       
  
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
          <Grid container spacing={1}>
          <Grid item xs={12} sm={5} md={4}>
          <StyledMenuItem onClick={handleClose}>
                    
                    <ListItem >
                        <ListItemIcon><FontAwesomeIcon icon={faRocket} /></ListItemIcon>
                        <MyButton name="Entrepreneurship" onClick={()=>filterCategory("Entrepreneurship")}></MyButton>
                    </ListItem>
                    </StyledMenuItem>
                    </Grid>
                    <Grid item xs={12} sm={5} md={4}>
                    <StyledMenuItem onClick={handleClose}>
                        <ListItem >
                            <ListItemIcon><FontAwesomeIcon icon={faLandmark} /></ListItemIcon>
                            <MyButton name="Politics" onClick={()=>filterCategory("Politics")}></MyButton>
                        </ListItem>
                    </StyledMenuItem>
                    </Grid>
                    <Grid item xs={12} sm={5} md={4}>

                    <StyledMenuItem onClick={handleClose}>
                        <ListItem >
                            <ListItemIcon><FontAwesomeIcon icon={faFlask} /></ListItemIcon>
                            <MyButton name="Science" onClick={()=>filterCategory("Science")}></MyButton>
                        </ListItem>
                    </StyledMenuItem>
                    </Grid>
                    <Grid item xs={12} sm={5} md={4}>
                    <StyledMenuItem onClick={handleClose}>
                        <ListItem >
                            <ListItemIcon><FontAwesomeIcon icon={faGraduationCap} /></ListItemIcon>
                            <MyButton name="Education" onClick={()=>filterCategory("Education")}></MyButton>
                        </ListItem>
                    </StyledMenuItem>
                    </Grid>
                    <Grid item xs={12} sm={5} md={4}>
                    <StyledMenuItem onClick={handleClose}>
                        <ListItem >
                            <ListItemIcon><FontAwesomeIcon icon={faGlobeAsia} /></ListItemIcon>
                            <MyButton name="Economics" onClick={()=>filterCategory("Economics")}></MyButton>
                        </ListItem>
                    </StyledMenuItem>
                    </Grid>
                    <Grid item xs={12} sm={5} md={4}>
                    <StyledMenuItem onClick={handleClose}>
                        <ListItem >
                            <ListItemIcon><FontAwesomeIcon icon={faLightbulb} /></ListItemIcon>
                            <MyButton name="Motivation"  onClick={()=>filterCategory("Motivation")}></MyButton>
                        </ListItem>
                    </StyledMenuItem>
                    </Grid >
                    <Grid item xs={12} sm={5} md={4}>
                    <StyledMenuItem onClick={handleClose}>
                        <ListItem >
                            <ListItemIcon><FontAwesomeIcon icon={faHeartbeat} /></ListItemIcon>
                            <MyButton name="Health" onClick={()=>filterCategory("Health")}></MyButton>
                        </ListItem>
                    </StyledMenuItem>
                    </Grid >
                    <Grid item xs={12} sm={5} md={4}>
                    <StyledMenuItem onClick={handleClose}>
                        <ListItem >
                            <ListItemIcon><FontAwesomeIcon icon={faComment} /></ListItemIcon>
                            <MyButton name="Communication skills" onClick={()=>filterCategory("Communication skills")}></MyButton>
                        </ListItem>
                    </StyledMenuItem>
                    </Grid >
                    <Grid item xs={12} sm={5} md={4}>
                    <StyledMenuItem onClick={handleClose}>
                        <ListItem >
                            <ListItemIcon><FontAwesomeIcon icon={faHeart} /></ListItemIcon>
                            <MyButton name="Relationships" onClick={()=>filterCategory("Relationships")}></MyButton>
                        </ListItem>
                    </StyledMenuItem>
                    </Grid >
      
                    <Grid item xs={12} sm={5} md={4}>
                    <StyledMenuItem onClick={handleClose}>
                        <ListItem >
                            <ListItemIcon><FontAwesomeIcon icon={faBrain} /></ListItemIcon>
                            <MyButton name="Philosophy" onClick={()=>filterCategory("Philosophy")}></MyButton>
                        </ListItem>
                    </StyledMenuItem>
                    </Grid >
                    
                    <Grid item xs={12} sm={5} md={4}>
                    <StyledMenuItem onClick={handleClose}>
                        <ListItem >
                            <ListItemIcon><FontAwesomeIcon icon={faBullseye} /></ListItemIcon>
                            <MyButton name="Career & Success" onClick={()=>filterCategory("Career & Success")}></MyButton>
                        </ListItem>
                    </StyledMenuItem>
                    </Grid >
                    <Grid item xs={12} sm={5} md={4}>
                    <StyledMenuItem onClick={handleClose}>
                        <ListItem >
                            <ListItemIcon><FontAwesomeIcon icon={faUsers} /></ListItemIcon>
                            <MyButton name="Society & Culture" onClick={()=>filterCategory("Society & Culture")}></MyButton>
                        </ListItem>
                    </StyledMenuItem>
                    </Grid >
                    <Grid item xs={12} sm={5} md={4}>
                    <StyledMenuItem onClick={handleClose}>
                        <ListItem >
                            <ListItemIcon><FontAwesomeIcon icon={faSimCard} /></ListItemIcon>
                            <MyButton name="Technology & Future" onClick={()=>filterCategory("Technology & Future")}></MyButton>
                        </ListItem>
                    </StyledMenuItem>
                    </Grid >
                   
                   
                    <Grid item xs={12} sm={5} md={4}>
                    <StyledMenuItem onClick={handleClose}>
                        <ListItem >
                            <ListItemIcon><FontAwesomeIcon icon={faHistory} /></ListItemIcon>
                            <MyButton name="History" onClick={()=>filterCategory("History")}></MyButton>
                        </ListItem>
                    </StyledMenuItem>
                    </Grid >
                    <Grid item xs={12} sm={5} md={4}>
                    <StyledMenuItem onClick={handleClose}>
                        <ListItem >
                            <ListItemIcon><FontAwesomeIcon icon={faPray} /></ListItemIcon>
                            <MyButton name="Religion & Spirituality" onClick={()=>filterCategory("Religion & Spirituality")}></MyButton>
                        </ListItem>
                    </StyledMenuItem>
                    </Grid >
                  
                    
        </Grid >
      </StyledMenu >
    </div >
  );
}

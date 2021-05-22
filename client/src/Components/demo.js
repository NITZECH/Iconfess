import { Avatar, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import './demo.css'


const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(9),
      height: theme.spacing(9),
    }
  }));

export default function Demo()  {
    const classes = useStyles();
    
    return(
      
<Container className='set'  >
<Container  style={{ backgroundColor: '#0000', height: '70vh' }} >
   
   <Avatar className={classes.large} alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/59756906?v=4" />
   <Typography variant="h1" component="h2" gutterBottom>
        MASter name
      </Typography>
      <Typography variant="h2" gutterBottom>
        h2. Heading
      </Typography>
      <Typography variant="p" gutterBottom>
      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
   
</Container>
</Container>
       
    )}
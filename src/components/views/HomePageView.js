import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBarContainer from '../containers/NavBarContainer';
import campus_image from './image/campus.jpg';
import { Container, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${campus_image})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '90vh',
  },
  container: {
    width: '80%',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontType: 'bold',
    fontFamily: 'Courier, sans-serif',
    fontSize: '35px',
    color: '#CDDC39',
  },
  greeting: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: 'auto',
  },
  links: {
    textDecoration: 'none',
  },
});

const HomePageView = () => {
  const classes = useStyles();
  const [recentStudents, setRecentStudents] = useState([]);
  const [recentCampuses, setRecentCampuses] = useState([]);

  return (
    <>
      <NavBarContainer />
      <div className={classes.root}>
        <Container className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <div className={classes.greeting}>test</div>
            </Grid>

            <Grid item xs={6}>
              <div className={classes.greeting}>Campus</div>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.greeting}>Student</div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default HomePageView;

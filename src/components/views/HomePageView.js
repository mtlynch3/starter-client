import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar';

import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  greeting:{
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: "50%",
    margin: "auto",
  },
  

}));

const HomePageView = () => {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      
      <div className={classes.greetings}>
        <h1>Home Page</h1>
      </div>
    </div>
  );    
}




export default HomePageView;

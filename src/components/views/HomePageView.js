import { makeStyles } from '@material-ui/core/styles';
import NavBarContainer from "../containers/NavBarContainer";
import campus_image from "./image/campus-image.jpeg";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontType: 'bold',
    fontFamily: 'Courier, sans-serif', 
    fontSize: '35px', 
    color: '#CDDC39'
  },
  appBar:{
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  greeting:{
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: "50%",
    margin: "auto",
  },
  links:{
    textDecoration: 'none',
  }

}));

const HomePageView = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBarContainer/>
      <div className={classes.greeting}><h1>Welcome to Home Page</h1></div>
      <div className={classes.greeting}><p>Please view all campuses and all students.</p></div>
      <div>
      <img src={campus_image} alt="" />;
      </div>
      
    </div>
    
  );    
}




export default HomePageView;

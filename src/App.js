import "./App.css";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
//Router
import { Switch, Route } from "react-router-dom";
//Components
import {
  HomePageContainer,
  CampusContainer,
  StudentContainer,
  AllCampusesContainer,
  AllStudentsContainer
} from './components/containers';

// if you create separate components for adding/editing
// a student or campus, make sure you add routes to those
// components here


// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   title: {
//     flexGrow: 1,
//     textAlign: 'left',
//     fontType: 'bold',
//     fontFamily: 'Courier, sans-serif',
//     fontSize: '35px',
//     color: '#CDDC39'
//   },
//   appBar:{
//     backgroundColor: '#11153e',
//     shadows: ['none'],
//   },
//   greeting:{
//     display: 'flex',
//     justifyContent: 'center',
//     backgroundColor: 'white',
//     width: "50%",
//     margin: "auto",
//   },
//   links:{
//     textDecoration: 'none',
//   }

// }));

// const NavBar = () => {
//   const classes = useStyles();
//   return (
//     <div className={classes.root}>
//       <AppBar position="static" elevation={0} className={classes.appBar}>
//         <Toolbar>
//           <Link to={'/'}  >
//           <Typography variant="h6" className={classes.title} color="inherit" >
//             CRUD App
//           </Typography>
//           </Link>

//           <Link className={classes.links} to={'/campuses'} >
//             <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
//               All Campuses
//             </Button>
//           </Link>

//           <Link className={classes.links} to={'/students'} >
//             <Button variant="contained" color="primary">
//               All Students
//             </Button>
//           </Link>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }


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

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Link to={'/'}  >
          <Typography variant="h6" className={classes.title} color="inherit" >
            CRUD App
          </Typography>
          </Link>

          <Link className={classes.links} to={'/campuses'} >
            <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={'/students'} >
            <Button variant="contained" color="primary">
              All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/campuses" component={AllCampusesContainer} />
        <Route exact path="/campus/:id" component={CampusContainer} />
        <Route exact path="/students" component={AllStudentsContainer} />
        <Route exact path="/student/:id" component={StudentContainer} />
      </Switch>
    </div>
  );
}

export default App;

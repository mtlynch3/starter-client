import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from "react-router-dom";

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

const AllStudentsView = (props) => {
  const classes = useStyles();

  const {students, deleteStudent} = props;

  if (!students.length) {
    return (
      <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
          <Toolbar>
          <Link className = {classes.title} to={'/'}>
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
      <p>There are no students.</p>
      <Link to={`newstudent`}>
        <button>Add New Student</button>
      </Link>
    </div>
    );
  }
  
  return (
    <div className={classes.root}>
    <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
        <Link className = {classes.title} to={'/'}>
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
      {students.map((student) => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
          <Link to={`/student/${student.id}`}>
            <h1>{name}</h1>
          </Link>
          <button onClick={() => deleteStudent(student.id)}>Delete</button>
          </div>
        );
      }
      )}
      <Link to={`/newstudent`}>
        <button>Add New Student</button>
      </Link>
    </div>
  );
};


export default AllStudentsView;
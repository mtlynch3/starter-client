import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import NavBarContainer from "../containers/NavBarContainer";
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
  placeholderContent: {
  border: '5px solid indigo',
  padding: '10px',
  margin: '20px',
  flexDirection: 'row',
  justifyContent: 'center'
  },
});


const AllStudentsView = (props) => {
  const classes = useStyles();
  console.log(props);
  if (!props.allStudents.length) {
    return <div>There are no students.</div>;
  }

  return (
    <div>
      <NavBarContainer />
      {props.allStudents.map(({id, firstName, lastName, email, gpa}) => (
          <div className={classes.placeholderContent} key={id}>
          <Link to={`/student/${id}`}>
            <h1>{firstName} {lastName}</h1>
          </Link>
          <p>{email} gpa{gpa}</p>
        </div>
      ))}
    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;

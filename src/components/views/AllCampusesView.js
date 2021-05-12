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

const AllCampusesView = (props) => {
  const classes = useStyles();
  if (!props.allCampuses.length) {
    return <div>There are no campuses.</div>;
  }
  return (
    <div>
      <NavBarContainer />
      {props.allCampuses.map((campus) => (
        <div className={classes.placeholderContent} key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <p>{campus.description}</p>
        </div>
      ))}
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;

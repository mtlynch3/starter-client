import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Header from "./Header.js"
import Empty from "./EmptyComponent.js"
import CardView from "./Card.js";
import Box from '@material-ui/core/Box';

const AllStudentsView = (props) => {
  if (!props.allStudents.length) {
    return (
      <div>
        <h1>All Students View</h1>
        <Empty type = 'Students' buttonLabel = 'Add Student' link = '/add-student'/>
      </div>
    );
  }

  return (
    <div>
      <Header heading ='All Students' buttonLabel ='Add Student' link ='/add-student'/>
      {props.allStudents.map((student) => (
        <Box display="flex" flexDirection="row">
          <CardView student={student}/>
        </Box>
      ))}
    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;

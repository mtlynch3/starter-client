import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
    if (!props.allStudents.length) {
        return <div>There are no Students.</div>;
    }

    // console.log(props.allStudents)
    return (
        <div>
            {props.allStudents.map((student) => (
                <div key={student.id}>
                    <Link to={`/student/${student.id}`}>
                        <h1>{student.firstname} {student.lastname}</h1>
                        <h1></h1>
                    </Link>
                </div>
            ))}
        </div>
    );
};

AllStudentsView.propTypes = {
    allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;
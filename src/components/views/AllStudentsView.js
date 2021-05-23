import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import NavBar from "./NavBar";


const AllStudentsView = (props) => {
    if (!props.allStudents.length) {
        return (
            <div>
                <NavBar />
                <h1>There are no students.</h1>
            </div>
        );
        
    }
    return (
        <div>
            <NavBar />
            {props.allStudents.map((student) => {

                console.log(props.allStudents);
                return (
                    <div key={student.id}>

                        <Link to={`/student/${student.id}`}>
                            <h1>{student.firstname} {student.lastname}</h1>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
};

AllStudentsView.propTypes = {
    allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;

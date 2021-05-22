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


const AllStudentsView = (props) => {
    if (!props.allStudents.length) {
        return <div>There are no students.</div>;
    }
    return (
        <div>

            {props.allStudents.map((student) => {

                console.log(props.allStudents);
                return (
                    <div key={student.id}>

                        <Link to={`/student/${student.id}`}>
                            <h1>{student.firstname}</h1>
                        </Link>
                        <p>{student.email}</p>
                        <p>{student.gpa}</p>



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

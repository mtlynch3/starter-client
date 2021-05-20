import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
                        <img src={student.imageUrl} alt='student-pic' />
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

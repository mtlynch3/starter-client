import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StudentView = (props) => {
    const {student} = props;
    let hasCampus = student.campus !== null;

    console.log(hasCampus);
    //console.log(student.campus);
    return (
        <div>
            <h1>{student.firstname} {student.lastname}</h1>
            {
                (!hasCampus) ? <p>This student is not currently registered to any campus.</p>:(

                <Link to={`/campus/${student.campus.id}`}>
                    <p>{student.campus.name}</p>
                </Link>


                )
            }
            <p>{student.email}</p>
            <p>{student.gpa}</p>
        </div>
    )

}

export default StudentView;

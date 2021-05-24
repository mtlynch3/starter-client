import { useStyles } from "../../styles/styles.js";

const StudentItem = ({student}) => {
  const classes = useStyles();
  
  return (
    <div  className={classes.placeholderContent}>
      <h1>{student.firstName} {student.lastName}</h1>
      <h5>{student.email}</h5>
      <h5>GPA: {student.gpa}</h5>
    </div>
  );
};

export default StudentItem;

import { useStyles } from "../../styles.js";

const CampusView = ({campus}) => {
  const classes = useStyles();


  return (
    <div  className={classes.placeholderContent}>
      <h1>{campus.name}</h1>
      <p>{campus.description}</p>
      <ul>
        {/* {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <li key={student.id}>{name}</li>
        );
      })} */}
      </ul>
    </div>
  );
};

export default CampusView;

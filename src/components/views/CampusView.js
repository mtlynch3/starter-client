import { useStyles } from "../../styles.js";

const CampusView = ({campus}) => {
  const classes = useStyles();

  return (
    <div  className={classes.placeholderContent}>
      <h1>{campus.name}</h1>
      <p>{campus.description}</p>
    </div>
  );
};

export default CampusView;

import { useStyles } from "../../styles/styles.js";

const CampusView = ({ campus }) => {
  const classes = useStyles();
  const { id, name, description, ...rest } = campus;

  return (
    <div className={classes.placeholderContent}>
      <h1>{name}</h1>
      <p>{description}</p>
      <pre>{JSON.stringify(rest, null, 4)}</pre>
    </div>
  );
};

export default CampusView;

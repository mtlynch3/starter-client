import { makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  text: {
    padding: "24px 24px",
  },
});

const CampusDescriptionFragment: React.FC<{ text: string }> = ({ text }) => {
  const classes = useStyles()

  return (
    <Paper>
      <Typography className={classes.text}>{text}</Typography>
    </Paper>
  );
};
export default CampusDescriptionFragment;

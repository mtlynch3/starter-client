import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

export type PictureCardProps = {
  imageUrl: string;
  // children would be content of card
};

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "12px",
    margin: "18px 0",
    padding: "18px 18px",
    borderColor: theme.palette.primary.main,
  },
  image: {
    width: "100%",
    maxHeight: "120px",
    border: "1px sopid " + theme.palette.primary.main,
    borderRadius: "12px",
  },
}));

const PictureCard: React.FC<PictureCardProps> = ({ imageUrl, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={2}>
          <img className={classes.image} src={imageUrl} />
        </Grid>
        <Grid item xs={10}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

export default PictureCard;

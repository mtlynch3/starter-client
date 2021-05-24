import { makeStyles } from "@material-ui/core";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import PictureCard from "../picture_card";
import { CampusModel } from "../../api/campus";

export interface CampusItemProps extends CampusModel {
  showDetailOnClick?: boolean;
}

const useStyles = makeStyles({
  clickable: {
    cursor: "pointer",
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      color: "inherit",
    },
  },
  name: {
    fontSize: "32px",
    fontWeight: 500,
  },
  address: {
    fontSize: "18px",
    fontWeight: 300,
  },
  description: {
    fontSize: "18px",
    fontWeight: 400,
  },
});

const CampusItem: React.FC<CampusItemProps> = ({
  id,
  name,
  address,
  description,
  imageUrl,
  showDetailOnClick = true,
}) => {
  const classes = useStyles();

  const detailView = useMemo(() => {
    return (
      <PictureCard imageUrl={imageUrl}>
        <h2 className={classes.name}>{name}</h2>
        <h5 className={classes.address}>{address}</h5>
        <h5 className={classes.description}>{description}</h5>
      </PictureCard>
    );
  }, [
    address,
    classes.address,
    classes.description,
    classes.name,
    description,
    imageUrl,
    name,
  ]);

  return (
    <div>
      {showDetailOnClick ? (
        <Link className={classes.clickable} to={"/campus/" + id}>
          {detailView}
        </Link>
      ) : (
        detailView
      )}
    </div>
  );
};

export default CampusItem;

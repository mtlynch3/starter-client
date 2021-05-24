import { makeStyles } from "@material-ui/core";
import React, { useMemo } from "react";
import { StudentModel } from "../../api/student";
import { Link } from "react-router-dom";
import PictureCard from "../picture_card";

export interface StudentItemProps extends StudentModel {
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
  detail: {
    fontSize: "18px",
    fontWeight: 300,
  },
});

const StudentItem: React.FC<StudentItemProps> = ({
  id,
  firstName,
  lastName,
  gpa,
  email,
  imageUrl,
  showDetailOnClick = true,
}) => {
  const classes = useStyles();

  const detailView = useMemo(() => {
    return (
      <PictureCard imageUrl={imageUrl}>
        <h2 className={classes.name}>
          {firstName} {lastName}
        </h2>
        <h5 className={classes.detail}>{email}</h5>
        <h5 className={classes.detail}>GPA: {gpa}</h5>
      </PictureCard>
    );
  }, [firstName, lastName, email, gpa, classes.detail, classes.name, imageUrl]);

  return (
    <div>
      {showDetailOnClick ? (
        <Link className={classes.clickable} to={"/student/" + id}>
          {detailView}
        </Link>
      ) : (
        detailView
      )}
    </div>
  );
};

export default StudentItem;

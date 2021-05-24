import { makeStyles } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import CampusService from "../../api/campus";
import CampusDetailForm, {
  CampusDetailFormSubmitOnClickProps,
} from "../../components/campus_detail_form";
import NavbarLayout from "../../components/layout/navbar_layout";
import { addCampus } from "../../store/actions/actionCreators";

const useStyles = makeStyles({
  header: {
    textAlign: "center",
  },
  content: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "60vw",
  },
});

const CreateCampusPage: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleCreatecampus = async (
    data: CampusDetailFormSubmitOnClickProps
  ) => {
    const campus = await CampusService.Create(data);
    dispatch(addCampus(campus));
    history.push("/campus/" + campus.id);
  };

  return (
    <NavbarLayout>
      <div className={classes.content}>
        <h1 className={classes.header}>New Campus</h1>
        <CampusDetailForm
          submitButton={{
            title: "Create",
            onClick: handleCreatecampus,
          }}
        />
      </div>
    </NavbarLayout>
  );
};

export default CreateCampusPage;

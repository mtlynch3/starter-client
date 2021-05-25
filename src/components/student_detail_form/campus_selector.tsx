import { LinearProgress, makeStyles, Modal, Paper } from "@material-ui/core";
import React from "react";
import { CampusModel } from "../../api/campus";
import useGetAllCampuses from "../../hooks/useGetAllCampuses";
import CampusList from "../campus_list";

export type CampusSelectFragmentProps = {
  isOpen: boolean;
  handleClose: () => void;
  onCampusSelect: (campus: CampusModel) => Promise<void>;
};

const useStyles = makeStyles({
  modal: {
    display: "flex",
    marginTop: "128px",
    justifyContent: "center",
  },
  paper: {
    width: "80vw",
    maxHeight: "80vh",
    padding: "24px 24px",
    overflowY: "scroll",
  },
});

const CampusSelectFragment: React.FC<CampusSelectFragmentProps> = ({
  isOpen,
  handleClose,
  onCampusSelect,
}) => {
  const classes = useStyles();
  const { campuses, loading: loadingCampuses } = useGetAllCampuses();

  return (
    <Modal open={isOpen} onClose={handleClose} className={classes.modal}>
      <Paper className={classes.paper}>
        {loadingCampuses && <LinearProgress />}
        <h2>Enrollment</h2>
        <CampusList
          filterable
          campuses={campuses}
          actions={[
            {
              name: "Enroll",
              onClick: onCampusSelect,
            },
          ]}
        />
      </Paper>
    </Modal>
  );
};

export default CampusSelectFragment;

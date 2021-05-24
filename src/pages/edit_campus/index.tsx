import { LinearProgress, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { CampusModel, UpdatableCampusProps } from "../../api/campus";
import CampusDetailForm from "../../components/campus_detail_form";
import NavbarLayout from "../../components/layout/navbar_layout";
import { useErrorAlert } from "../../hooks/useErrorAlert";
import useGetCampusById from "../../hooks/useGetCampusById";
import useUpdateCampus from "../../hooks/useUpdateCampus";

const useStyles = makeStyles({
  content: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "60vw",
  },
});

const EditCampusPage: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const campusId = parseInt(id, 10);
  const [initialCampus, setInitialCampus] = useState<CampusModel>();
  const { findCampus, loading: loadingCampus } = useGetCampusById();
  const { updateCampus, loading: loadingUpdateCampus } = useUpdateCampus();
  const showError = useErrorAlert();

  useEffect(() => {
    const fetchInitial = async () => {
      try {
        const campus = await findCampus(campusId);
        setInitialCampus(campus);
      } catch (error) {
        showError(error.message);
      }
    };

    fetchInitial();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [campusId]);

  const handleClickSave = async (updates: UpdatableCampusProps) => {
    try {
      await updateCampus(campusId, updates);
      history.push("/campus/" + id);
    } catch (error) {
      showError(error.message);
    }
  };

  return (
    <NavbarLayout>
      <div className={classes.content}>
        {(initialCampus === undefined ||
          loadingCampus ||
          loadingUpdateCampus) && <LinearProgress />}
        {initialCampus && (
          <CampusDetailForm
            initialData={initialCampus}
            submitButton={{
              title: "Save",
              onClick: handleClickSave,
            }}
          />
        )}
      </div>
    </NavbarLayout>
  );
};

export default EditCampusPage;

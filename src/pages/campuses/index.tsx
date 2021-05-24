import { LinearProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import CampusService, { CampusModel } from "../../api/campus";
import CampusList from "../../components/campus_list";
import NavbarLayout from "../../components/layout/navbar_layout";
import { useErrorAlert } from "../../hooks/useErrorAlert";
import { fetchAllCampuses } from "../../store/actions/actionCreators";

const CampusesPage: React.FC = () => {
  const campuses = useSelector<any>(
    (state) => state.campuses.all || []
  ) as CampusModel[];  
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const showError = useErrorAlert();

  useEffect(() => {
    const fetchCampuses = async () => {
      try {
        setLoading(true);
        const result = await CampusService.RetrieveAllCampuses();
        dispatch(fetchAllCampuses(result))
      } catch (error) {
        showError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCampuses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickCreate = () => {
    history.push("/campuses/create");
  };

  return (
    <NavbarLayout
      container
      actionButton={{
        name: "Create",
        onClick: handleClickCreate,
      }}
    >
      <div>
      {loading && <LinearProgress />}
      {!loading && campuses.length === 0 && <h3>No Campuses</h3>}
      <CampusList campuses={campuses} />
      </div>
    </NavbarLayout>
  );
};

export default CampusesPage;

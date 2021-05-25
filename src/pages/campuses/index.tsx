import { LinearProgress } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import CampusList from "../../components/campus_list";
import NavbarLayout from "../../components/layout/navbar_layout";
import useGetAllCampuses from "../../hooks/useGetAllCampuses";

const CampusesPage: React.FC = () => {
  const {campuses, loading} = useGetAllCampuses()
  const history = useHistory();

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
      <CampusList filterable campuses={campuses} />
      </div>
    </NavbarLayout>
  );
};

export default CampusesPage;

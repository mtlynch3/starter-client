import { LinearProgress } from "@material-ui/core";
import React, { useMemo } from "react";
import { useHistory } from "react-router";
import { CampusModel } from "../../api/campus";
import CampusList from "../../components/campus_list";
import NavbarLayout from "../../components/layout/navbar_layout";
import { ActionItem } from "../../components/student_item";
import useDeleteCampus from "../../hooks/useDeleteCampus";
import useGetAllCampuses from "../../hooks/useGetAllCampuses";

const CampusesPage: React.FC = () => {
  const { campuses, loading: loadingGetAllCampuses } = useGetAllCampuses();
  const { deleteCampus, loading: loadingDeleteCampus } = useDeleteCampus();
  const history = useHistory();

  const handleClickCreate = () => {
    history.push("/campuses/create");
  };

  const handleViewCampus = async (campus: CampusModel) =>
    history.push(`/campus/${campus.id}`);

  const handleDeleteCampus = async (campus: CampusModel) => deleteCampus(campus.id);

  const campusActions: ActionItem[] = [
    {
      name: "Detail",
      onClick: handleViewCampus,
    },
    {
      name: "Delete",
      onClick: handleDeleteCampus,
    },
  ];

  const loading = useMemo(
    () => loadingGetAllCampuses || loadingDeleteCampus,
    [loadingDeleteCampus, loadingGetAllCampuses]
  );

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
        <CampusList filterable campuses={campuses} actions={campusActions} />
      </div>
    </NavbarLayout>
  );
};

export default CampusesPage;

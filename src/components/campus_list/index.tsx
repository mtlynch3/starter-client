import { makeStyles, TextField } from "@material-ui/core";
import React, { useMemo } from "react";
import { CampusModel } from "../../api/campus";
import useFormInput from "../../hooks/useFormInput";
import CampusItem from "../campus_item";

export type CampusListProps = {
  campuses: CampusModel[];
  filterable?: boolean;
};

const useStyles = makeStyles({
  clickable: {
    cursor: "pointer",
  },
  input: {
    marginTop: "16px",
  },
});

const CampusList: React.FC<CampusListProps> = ({ campuses, filterable }) => {
  const classes = useStyles();
  const [searchFilter, handleChangeSearchFilter] = useFormInput("");

  const filteredCampuses = useMemo(
    () =>
      campuses.filter(
        (campus) =>
          campus.name.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1
      ),
    [campuses, searchFilter]
  );

  const campusListView = useMemo(() => {
    return filteredCampuses.map((campus) => <CampusItem key={campus.id} {...campus} />);
  }, [filteredCampuses]);

  return (
    <div>
      {filterable && (
        <TextField
          className={classes.input}
          variant="outlined"
          size="small"
          fullWidth
          placeholder={"Campus Name..."}
          value={searchFilter}
          onChange={handleChangeSearchFilter}
        />
      )}
      {campusListView}
    </div>
  );
};

export default CampusList;

import { makeStyles, TextField } from "@material-ui/core";
import React, { useMemo } from "react";
import { CampusModel } from "../../api/campus";
import useFormInput from "../../hooks/useFormInput";
import CampusItem from "../campus_item";

export type CampusListProps = {
  campuses: CampusModel[];
  filterable?: boolean;
  actions?: Array<{
    name: string;
    onClick: (campus: CampusModel) => Promise<void>;
  }>;
};

const useStyles = makeStyles({
  clickable: {
    cursor: "pointer",
  },
  input: {
    marginTop: "16px",
  },
});

const CampusList: React.FC<CampusListProps> = ({
  campuses,
  filterable,
  actions,
}) => {
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
    return filteredCampuses.map((campus) => (
      <div>
        <CampusItem
          key={campus.id}
          {...campus}
          actions={actions?.map((action) => ({
            name: action.name,
            onClick: async () => {
              await action.onClick(campus);
            },
          }))}
        />
      </div>
    ));
  }, [actions, filteredCampuses]);

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

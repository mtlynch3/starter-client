import { Button, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { CampusModel, UpdatableCampusProps } from "../../api/campus";
import { useErrorAlert } from "../../hooks/useErrorAlert";
import useFormInput from "../../hooks/useFormInput";
import CampusItem from "../campus_item";

export type CampusDetailFormSubmitOnClickProps = UpdatableCampusProps;

export type CampusDetailFormProps = {
  initialData?: CampusModel;
  submitButton: {
    title: string;
    onClick: (props: CampusDetailFormSubmitOnClickProps) => Promise<void>;
  };
};

const useStyles = makeStyles({
  input: {
    margin: "12px 0",
  },
  submitButton: {
    display: "block",
    marginLeft: "auto",
  },
});

const CampusDetailForm: React.FC<CampusDetailFormProps> = ({
  initialData,
  submitButton: { title, onClick: onClickSubmit },
}) => {
  const [name, handleChangeName] = useFormInput(initialData?.name || "");
  const [address, handleChangeAddress] = useFormInput(
    initialData?.address || ""
  );
  const [description, handleChangeDescription] = useFormInput(
    initialData?.description || ""
  );
  const [imageUrl, handleChangeImageUrl] = useFormInput(
    initialData?.imageUrl || ""
  );
  const [loading, setLoading] = useState(false);
  const showError = useErrorAlert();
  const classes = useStyles();

  const handleOnClickSubmit = async () => {
    try {
      setLoading(true);
      await onClickSubmit({
        name,
        address,
        description,
        imageUrl,
      });
    } catch (error) {
      showError(error.message || "Something went wrong");
      console.log(Object.keys(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h4>Preview</h4>
      <CampusItem
        showDetailOnClick={false}
        id={-1}
        name={name}
        address={address}
        description={description}
        imageUrl={imageUrl}
      />
      <h4>Info</h4>
      <TextField
        variant="outlined"
        size="small"
        className={classes.input}
        fullWidth
        placeholder="Campus Name"
        value={name}
        onChange={handleChangeName}
      />
      <TextField
        size="small"
        variant="outlined"
        className={classes.input}
        fullWidth
        placeholder="Address"
        value={address}
        onChange={handleChangeAddress}
      />
      <TextField
        size="small"
        variant="outlined"
        className={classes.input}
        fullWidth
        placeholder="Image url"
        value={imageUrl}
        onChange={handleChangeImageUrl}
      />
      <TextField
        size="small"
        variant="outlined"
        className={classes.input}
        fullWidth
        placeholder="description"
        value={description}
        multiline
        rows={4}
        rowsMax={6}
        onChange={handleChangeDescription}
      />
      <Button
        disabled={loading}
        color="primary"
        className={classes.submitButton}
        variant="contained"
        onClick={handleOnClickSubmit}
      >
        {title}
      </Button>
    </div>
  );
};

export default CampusDetailForm;

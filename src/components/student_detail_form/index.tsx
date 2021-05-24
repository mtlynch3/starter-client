import { Button, makeStyles, TextField } from "@material-ui/core";
import React, { useMemo } from "react";
import { StudentModel } from "../../api/student";
import useFormInput from "../../hooks/useFormInput";
import StudentItem from "../student_item";

export type StudentDetailFormSubmitOnClickProps = {
  firstName: string;
  lastName: string;
  gpa: number;
  email: string;
  imageUrl: string;
};

export type StudentDetailFormProps = {
  initialData?: StudentModel;
  submitButton: {
    title: string;
    onClick: (props: StudentDetailFormSubmitOnClickProps) => Promise<void>;
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

const StudentDetailForm: React.FC<StudentDetailFormProps> = ({
  initialData,
  submitButton: { title, onClick: onClickSubmit },
}) => {
  const [firstName, handleChangeFirstName] = useFormInput(
    initialData?.firstName || ""
  );
  const [lastName, handleChangeLastName] = useFormInput(
    initialData?.lastName || ""
  );
  const [imageUrl, handleChangeImageUrl] = useFormInput(
    initialData?.imageUrl || ""
  );
  const [gpa, handleChangeGpa] = useFormInput(String(initialData?.gpa || ""));
  const [email, handleChangeEmail] = useFormInput("");
  const classes = useStyles();

  const gpaFloat = useMemo(
    () => parseFloat(gpa),
    [gpa]
  );

  const handleOnClickSubmit = async () => {
    onClickSubmit({
      firstName,
      lastName,
      email,
      imageUrl,
      gpa: gpaFloat,
    });
  };

  return (
    <div>
      <h4>Preview</h4>
      <StudentItem
        showDetailOnClick={false}
        id={-1}
        firstName={firstName}
        lastName={lastName}
        gpa={gpaFloat}
        email={email}
        imageUrl={imageUrl}
      />
      <h4>Info</h4>
      <TextField
        variant="outlined"
        size="small"
        className={classes.input}
        fullWidth
        placeholder="First Name"
        value={firstName}
        onChange={handleChangeFirstName}
      />
      <TextField
        size="small"
        variant="outlined"
        className={classes.input}
        fullWidth
        placeholder="Last Name"
        value={lastName}
        onChange={handleChangeLastName}
      />
      <TextField
        size="small"
        variant="outlined"
        className={classes.input}
        fullWidth
        placeholder="GPA"
        value={gpa}
        onChange={handleChangeGpa}
      />
      <TextField
        size="small"
        variant="outlined"
        className={classes.input}
        fullWidth
        placeholder="Email"
        value={email}
        onChange={handleChangeEmail}
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
      <Button
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

export default StudentDetailForm;

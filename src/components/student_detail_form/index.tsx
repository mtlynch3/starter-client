import { Button, makeStyles, TextField } from "@material-ui/core";
import React, { useMemo, useState } from "react";
import { CampusModel } from "../../api/campus";
import { UpdatableStudentProps, StudentModel } from "../../api/student";
import useEnrollStudent from "../../hooks/useEnrollStudent";
import { useErrorAlert } from "../../hooks/useErrorAlert";
import useFormInput from "../../hooks/useFormInput";
import StudentItem from "../student_item";
import CampusSelectFragment from "./campus_selector";

export type StudentDetailFormSubmitOnClickProps = UpdatableStudentProps;

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
  const [email, handleChangeEmail] = useFormInput(initialData?.email || "");

  const [loading, setLoading] = useState(false);
  const [displayEnrollmentPrompt, setDisplayEnrollmentPrompt] = useState(false);
  const { enroll } = useEnrollStudent();

  const hideEnrollmentPrompt = () => setDisplayEnrollmentPrompt(false);

  const showError = useErrorAlert();
  const classes = useStyles();

  const gpaFloat = useMemo(() => parseFloat(gpa), [gpa]);

  const handleOnClickSubmit = async () => {
    try {
      setLoading(true);
      await onClickSubmit({
        firstName,
        lastName,
        email,
        imageUrl: imageUrl.length ? imageUrl : undefined,
        gpa: gpaFloat,
      });
    } catch (error) {
      showError(error.message || "Something went wrong");
      console.log(Object.keys(error));
    } finally {
      setLoading(false);
    }
  };

  const handleCampusEnrollment = async (campus: CampusModel) => {
    if (initialData === undefined) {
      // Impossible state
      hideEnrollmentPrompt();
      return;
    }
    await enroll(initialData.id, campus.id);
    hideEnrollmentPrompt();
  };

  return (
    <div>
      <CampusSelectFragment
        isOpen={displayEnrollmentPrompt}
        handleClose={hideEnrollmentPrompt}
        onCampusSelect={handleCampusEnrollment}
      />
      <h4>Preview</h4>
      <StudentItem
        showDetailOnClick={false}
        id={-1}
        firstName={firstName}
        lastName={lastName}
        gpa={gpaFloat}
        email={email}
        imageUrl={imageUrl}
        actions={
          initialData
            ? [
                {
                  name: "Change Campus",
                  onClick: async () => setDisplayEnrollmentPrompt(true),
                },
              ]
            : undefined
        }
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

export default StudentDetailForm;

import { makeStyles } from "@material-ui/core";
import React from "react";
import NavbarLayout from "../../components/layout/navbar_layout";
import StudentDetailForm, { StudentDetailFormProps, StudentDetailFormSubmitOnClickProps } from "../../components/student_detail_form";

const useStyles = makeStyles({
  header: {
    textAlign: "center",
  },
  content: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "60vw",
  },
});

const CreateStudentPage: React.FC = () => {
  const classes = useStyles();

  const handleCreateStudent = async (data: StudentDetailFormSubmitOnClickProps) => {
    // TODO: Make API call to create student
  };
  
  return (
    <NavbarLayout>
      <div className={classes.content}>
        <h1 className={classes.header}>New Student </h1>
        <StudentDetailForm
          submitButton={{
            title: "Create",
            onClick: handleCreateStudent,
          }}
        />
      </div>
    </NavbarLayout>
  );
};

export default CreateStudentPage;

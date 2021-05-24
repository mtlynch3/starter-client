import { makeStyles } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import StudentService from "../../api/student";
import NavbarLayout from "../../components/layout/navbar_layout";
import StudentDetailForm, { StudentDetailFormSubmitOnClickProps } from "../../components/student_detail_form";
import { addStudent } from "../../store/actions/actionCreators";

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
  const history = useHistory()
  const dispatch = useDispatch()

  const handleCreateStudent = async (data: StudentDetailFormSubmitOnClickProps) => {
    const student = await StudentService.Create(data)
    dispatch(addStudent(student))
    history.push('/students')
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

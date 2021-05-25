import { LinearProgress, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import StudentService, { StudentModel } from "../../api/student";
import NavbarLayout from "../../components/layout/navbar_layout";
import StudentDetailForm, {
  StudentDetailFormSubmitOnClickProps,
} from "../../components/student_detail_form";
import { useErrorAlert } from "../../hooks/useErrorAlert";
import { editStudent } from "../../store/actions/actionCreators";
import useDeleteStudent from "../../hooks/useDeleteStudent";

const useStyles = makeStyles({
  content: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "60vw",
  },
});

const StudentDetailPage: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const studentId = parseInt(id, 10);
  const [initialStudent, setInitialStudent] = useState<StudentModel>();
  const showError = useErrorAlert();

  const { deleteStudent } = useDeleteStudent();

  useEffect(() => {
    const fetchStudentDetail = async () => {
      try {
        const student = await StudentService.FindById(studentId);
        setInitialStudent(student);
      } catch (error) {
        showError(error.message);
        history.push("/students");
      }
    };

    fetchStudentDetail();
  }, [studentId, showError, history]);

  const handleCreateStudent = async (
    data: StudentDetailFormSubmitOnClickProps
  ) => {
    // TODO: Need better error handling on backend
    await StudentService.Update(studentId, data); 
    const student: StudentModel = {
      id: studentId,
      imageUrl: data.imageUrl!,
      ...data
    }
    dispatch(editStudent({student}));
    history.push("/students");
  };

  const handleDeleteStudent = async (studentId: number) => {
    await deleteStudent(studentId);
    history.goBack();
  }

  return (
    <NavbarLayout container actionButton={{
      name: 'Delete',
      onClick: () => handleDeleteStudent(studentId),
    }}>
      <div className={classes.content}>
        {initialStudent === undefined && (
          <LinearProgress />
        )}
        {initialStudent && (
          <StudentDetailForm
            initialData={initialStudent}
            submitButton={{
              title: "Save",
              onClick: handleCreateStudent,
            }}
          />
        )}
      </div>
    </NavbarLayout>
  );
};

export default StudentDetailPage;

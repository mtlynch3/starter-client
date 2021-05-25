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

  useEffect(() => {
    const fetchStudentDetail = async () => {
      try {
        const student = await StudentService.FindById(studentId);
        setInitialStudent(student);
      } catch (error) {
        showError(error.message);
      }
    };

    fetchStudentDetail();
  }, [studentId, showError]);

  const handleUpdateStudent = async (
    data: StudentDetailFormSubmitOnClickProps
  ) => {
    try {
      await StudentService.Update(studentId, data);
      const student: StudentModel = {
        id: studentId,
        imageUrl: data.imageUrl!,
        ...data,
      };
      dispatch(editStudent(student));
      history.push("/students");
    } catch (error) {
      showError(error.message);
    }
  };

  return (
    <NavbarLayout>
      <div className={classes.content}>
        {initialStudent === undefined && <LinearProgress />}
        {initialStudent && (
          <StudentDetailForm
            initialData={initialStudent}
            submitButton={{
              title: "Save",
              onClick: handleUpdateStudent,
            }}
          />
        )}
      </div>
    </NavbarLayout>
  );
};

export default StudentDetailPage;

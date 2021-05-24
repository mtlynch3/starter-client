import { LinearProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import StudentService, { StudentModel } from "../../api/student";
import NavbarLayout from "../../components/layout/navbar_layout";
import StudentList from "../../components/student_list";
import { useErrorAlert } from "../../hooks/useErrorAlert";
import { fetchAllStudentsAction } from "../../store/actions/actionCreators";

const StudentsPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const studentList = useSelector<any>(
    (state) => state.students.all || []
  ) as StudentModel[];
  const dispatch = useDispatch();
  const history = useHistory()
  const showError = useErrorAlert()

  useEffect(() => {
    const retreiveStudents = async () => {
      if (studentList.length !== 0) {
        return;
      }
      try {
        setLoading(true);
        const result = await StudentService.RetrieveAllStudents();
        dispatch(fetchAllStudentsAction(result));
      } catch (error) {
        showError(error.message)
      } finally {
        setLoading(false);
      }
    };

    retreiveStudents();
  }, [dispatch]); //eslint-disable-line react-hooks/exhaustive-deps

  const handleClickCreate = () => {
    history.push("/students/create")
  }

  return (
    <NavbarLayout container actionButton={{
      name: "Create",
      onClick: handleClickCreate
    }}>
      {loading && <LinearProgress />}
      {!loading && studentList.length === 0 && <h3>No students</h3>}
      <StudentList students={studentList ? studentList : []} />
    </NavbarLayout>
  );
};

export default StudentsPage;

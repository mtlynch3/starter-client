import { LinearProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentService, { StudentModel } from "../../api/student";
import NavbarLayout from "../../components/layout/navbar_layout";
import StudentList from "../../components/student_list";
import { fetchAllStudentsAction } from "../../store/actions/actionCreators";

const StudentsPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const studentList = useSelector<any>(
    (state) => state.students.all || []
  ) as StudentModel[];
  const dispatch = useDispatch();

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
        // TODO: Show Error Message to user
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    retreiveStudents();
  }, [dispatch]); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <NavbarLayout container>
      {loading && <LinearProgress />}
      {!loading && studentList.length === 0 && <h3>No students</h3>}
      <StudentList students={studentList ? studentList : []} />
    </NavbarLayout>
  );
};

export default StudentsPage;

import { LinearProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { StudentModel } from "../../api/student";
import NavbarLayout from "../../components/layout/navbar_layout";
import StudentList from "../../components/student_list";
import useDeleteStudent from "../../hooks/useDeleteStudent";
import { useErrorAlert } from "../../hooks/useErrorAlert";
import useGetAllStudents from "../../hooks/useGetAllStudents";

const StudentsPage: React.FC = () => {
  const {
    loading,
    students: studentList,
    refetch: refetchStudents,
  } = useGetAllStudents();
  const history = useHistory();
  const showError = useErrorAlert();
  const {deleteStudent} = useDeleteStudent()

  useEffect(() => {
    const retreiveStudents = async () => {
      if (studentList.length !== 0) {
        return
      }
      try {
        await refetchStudents()
      } catch (error) {
        showError(error.message);
      }
    };

    retreiveStudents();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleViewStudent = async (student: StudentModel) => history.push('/student/'+student.id)

  const handleDeleteStudent = async (student: StudentModel) => deleteStudent(student.id)

  const studentActions = [
    {
      name: "Profile",
      onClick: handleViewStudent,
    },
    {
      name: "Delete",
      onClick: handleDeleteStudent,
    },
  ];

  const handleClickCreate = () => {
    history.push("/students/create");
  };

  return (
    <NavbarLayout
      container
      actionButton={{
        name: "Create",
        onClick: handleClickCreate,
      }}
    >
      {loading && <LinearProgress />}
      {!loading && studentList.length === 0 && <h3>No students</h3>}
      <StudentList filterable actions={studentActions} students={studentList ? studentList : []} />
    </NavbarLayout>
  );
};

export default StudentsPage;

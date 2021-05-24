import { LinearProgress, makeStyles, Modal, Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import { StudentModel } from "../../api/student";
import StudentList from "../../components/student_list";
import useEnrollStudent from "../../hooks/useEnrollStudent";
import { useErrorAlert } from "../../hooks/useErrorAlert";
import useGetAllStudents from "../../hooks/useGetAllStudents";

export type CampusDetailEnrollModalProps = {
  ignoreStudentIds: Set<number>
  isOpen: boolean;
  campusId: number;
  handleClose: () => void;
  onStudentEnroll: (student: StudentModel) => void;
};

const useStyles = makeStyles({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "80vw",
    maxHeight: "80vh",
    padding: "24px 24px",
    overflowY: "scroll",
  },
});

const CampusDetailEnrollModal: React.FC<CampusDetailEnrollModalProps> = ({
  campusId,
  ignoreStudentIds,
  isOpen,
  handleClose,
  onStudentEnroll,
}) => {
  const classes = useStyles();
  const { students, refetch, loading: loadingStudents } = useGetAllStudents();
  const { enroll, loading: loadingEnroll } = useEnrollStudent();
  const showError = useErrorAlert();

  useEffect(() => {
    if (students.length === 0) refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnClick = async (student: StudentModel) => {
    try {
      await enroll(student.id, campusId);
    } catch (error) {
      showError(error.message);
    }
    onStudentEnroll(student);
  };

  const filterredStudents = students.filter(student => !ignoreStudentIds.has(student.id))

  return (
    <Modal className={classes.modal} open={isOpen} onClose={handleClose}>
      <Paper className={classes.paper}>
        <h2>Enroll Student</h2>
        {(loadingStudents || loadingEnroll) && <LinearProgress />}
        <StudentList filterable onClick={handleOnClick} students={filterredStudents} />
      </Paper>
    </Modal>
  );
};

export default CampusDetailEnrollModal;

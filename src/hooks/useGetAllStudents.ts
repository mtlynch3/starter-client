import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import APIRequest from "../api/request";
import { StudentModel } from "../api/student";
import { fetchAllStudentsAction } from "../store/actions/actionCreators";

export type GetAllStudentHook = () => {
  loading: boolean,
  students: StudentModel[],
  refetch: () => Promise<void>
}

const useGetAllStudents : GetAllStudentHook = () => {
  const [loading, setLoading] = useState(false);
  const students = useSelector<any>(
    (state) => state.students.all || []
  ) as StudentModel[];
  const dispatch = useDispatch();

  const refetch = async () : Promise<void> => {
    try {
      setLoading(true);
      let response = await APIRequest.Get<{
        result: StudentModel[];
      }>(`student`);
      dispatch(fetchAllStudentsAction(response.result));
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    refetch,
    students
  }
}

export default useGetAllStudents
import { useState } from "react";
import APIRequest from "../api/request";
import { StudentModel } from "../api/student";

export type GetCampusStudentHook = () => {
  getCampusStudents: (campusId: number) => Promise<StudentModel[] | undefined>;
  loading: boolean;
};

const useGetCampusStudents: GetCampusStudentHook = () => {
  const [loading, setLoading] = useState(false);

  const getCampusStudents = async (
    campusId: number
  ): Promise<StudentModel[] | undefined> => {
    setLoading(true);
    try {
      const response = await APIRequest.Get<{
        result: StudentModel[];
      }>(`campus/${campusId}/students`);
      return response.result;
    } finally {
      setLoading(false);
    }
  };

  return {
    getCampusStudents,
    loading,
  };
};

export default useGetCampusStudents
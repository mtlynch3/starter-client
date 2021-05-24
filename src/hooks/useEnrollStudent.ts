import { useState } from "react";
import APIRequest from "../api/request";

export type EnrollStudentHook = () => {
  loading: boolean;
  enroll: (studentId: number, campusId: number) => Promise<void>;
};

const useEnrollStudent = () => {
  const [loading, setLoading] = useState(false);

  const enroll = async (studentId: number, campusId: number): Promise<void> => {
    try {
      setLoading(true);
      await APIRequest.Post(`/student/${studentId}/enroll`, {
        id: campusId,
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    enroll,
    loading
  }
};

export default useEnrollStudent
import { useState } from "react";
import { CampusModel } from "../api/campus";
import APIRequest from "../api/request";

export type GetCampusByIdHook = () => {
  findCampus: (campusId: number) => Promise<CampusModel | undefined>,
  loading: boolean
}

const useGetCampusById : GetCampusByIdHook = () => {
  const [loading, setLoading] = useState(false);

  const findById = async (campusId: number): Promise<CampusModel | undefined> => {
    try {
      setLoading(true);
      const campus = await APIRequest.Get<CampusModel>("campus/"+campusId)
      return campus;
    } finally {
      setLoading(false);
    }
  };

  return {
    findCampus: findById,
    loading
  };
};

export default useGetCampusById
import { useState } from "react";
import { useDispatch } from "react-redux";
import { UpdatableCampusProps } from "../api/campus";
import APIRequest from "../api/request";
import { editCampus } from "../store/actions/actionCreators";

export type UpdateCampusHook = () => {
  loading: boolean;
  updateCampus: (campusId: number, data: UpdatableCampusProps) => Promise<void>;
};

const useUpdateCampus: UpdateCampusHook = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()

  const updateCampus = async (
    id: number,
    data: UpdatableCampusProps
  ): Promise<void> => {
    try {
      setLoading(true);
      await APIRequest.Patch("campus/" + id, data);
      dispatch(editCampus({
        id,
        ...data
      }))
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    updateCampus,
  };
};

export default useUpdateCampus;

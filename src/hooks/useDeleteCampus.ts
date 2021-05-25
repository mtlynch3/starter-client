import { useState } from "react"
import { useDispatch } from "react-redux";
import APIRequest from "../api/request";
import { deleteCampus as acDeleteCampus } from "../store/actions/actionCreators";

export type DeleteCampusHook = () => {
  deleteCampus: (id: number) => Promise<void>,
  loading: boolean
}

const useDeleteCampus : DeleteCampusHook = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();

  const deleteCampus = async (id: number) : Promise<void> => {
    try {
      setLoading(true);
      await APIRequest.Delete(`/campus/${id}`);
      dispatch(acDeleteCampus(id));
    } finally {
      setLoading(false);
    }
  }

  return {
    deleteCampus,
    loading
  }
}

export default useDeleteCampus
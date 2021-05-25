import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CampusModel } from "../api/campus";
import APIRequest from "../api/request";
import { fetchAllCampuses } from "../store/actions/actionCreators";
import { useErrorAlert } from "./useErrorAlert";

export type GetAllCampusesHook = () => {
  loading: boolean;
  campuses: CampusModel[];
  refetch: () => Promise<void>;
};

const useGetAllCampuses: GetAllCampusesHook = () => {
  const [loading, setLoading] = useState(false);
  const showError = useErrorAlert();
  const dispatch = useDispatch();

  const campuses = useSelector<any>(
    (state) => state.campuses.all || []
  ) as CampusModel[];

  const refetch = async (): Promise<void> => {
    try {
      setLoading(true);
      const res = await APIRequest.Get<{
        results: CampusModel[];
      }>("campus");
      dispatch(fetchAllCampuses(res.results));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const refetchIfEmpty = async () => {
      try {
        if (campuses.length === 0) {
          await refetch();
        }
      } catch (error) {
        showError(error.message);
      }
    };

    refetchIfEmpty();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    campuses,
    refetch,
  };
};

export default useGetAllCampuses;

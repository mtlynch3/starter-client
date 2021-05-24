import { useContext } from "react";
import AlertContext, { AlertContextQueueAlertFN } from "../context/alert";

export const useErrorAlert = (): AlertContextQueueAlertFN => {
  const { queueErrorAlert } = useContext(AlertContext);

  return queueErrorAlert;
};

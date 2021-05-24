import React, { createContext, useMemo, useState } from "react";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar, { SnackbarProps } from "@material-ui/core/Snackbar";

export type AlertContextQueueAlertFN = (message: string) => void;

type AlertContextValue = {
  queueErrorAlert: AlertContextQueueAlertFN;
};

const unimplemented = () => {
  throw new Error("Alert Context Provider provider has not been yet initialized");
};

const AlertContext = createContext<AlertContextValue>({
  queueErrorAlert: unimplemented,
});

export enum AlertType {
  Success = "success",
  Error = "error",
  Warning = "warning",
  Info = "info",
}

export type AlertProps = {
  isOpen?: boolean;
  closeAlert: () => void;
  type?: AlertType;
  autohide?: boolean;
};


const Alert: React.FC<AlertProps> = ({
  closeAlert,
  type = AlertType.Info,
  isOpen,
  autohide,
  children,
}) => {
  const alert = useMemo(
    () => (
      <MuiAlert severity={type} onClose={closeAlert}>
        {children}
      </MuiAlert>
    ),
    [children, closeAlert, type]
  );

  if (isOpen !== undefined) {
    const snackbarProps: SnackbarProps = {
      open: isOpen,
      onClose: closeAlert,
    };
    if (autohide) snackbarProps.autoHideDuration = 3000;
    return (
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...snackbarProps}
      >
        {alert}
      </Snackbar>
    );
  }

  return alert;
};

export const AlertQueueContextProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState(AlertType.Info);

  const openAlert = (message?: string, type?: AlertType) => {
    if (message) {
      setAlertMessage(message);
    }
    if (type) {
      setAlertType(type);
    }
    setIsOpen(true);
  };

  const closeAlert = () => setIsOpen(false);

  const queueErrorAlert = (message: string) => {
    openAlert(message, AlertType.Error);
  };

  return (
    <AlertContext.Provider value={{ queueErrorAlert }}>
      <Alert
        autohide
        isOpen={isOpen}
        type={alertType}
        closeAlert={closeAlert}
      >
        {alertMessage}
      </Alert>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;

import { makeStyles } from "@material-ui/core";
import React from "react";
import Navbar from "../navbar";

const useStyles = makeStyles({
  container: {
    margin: "12px 128px",
  },
});

export type NavbarLayoutProps = {
  container?: boolean;
};

const NavbarLayout: React.FC<NavbarLayoutProps> = ({
  children,
  container,
}) => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <div className={container ? classes.container : ""}>{children}</div>
    </div>
  );
};

export default NavbarLayout;

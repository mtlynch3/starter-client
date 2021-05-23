import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    textAlign: "left",
    fontType: "bold",
    fontFamily: "Courier, sans-serif",
    fontSize: "35px",
    color: "white",
  },
  appBar: {
    backgroundColor: "#022140",
    shadows: ["none"],
  },

  links: {
    textDecoration: "none",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            style={{
              margin: "20px",
            }}
          >
            CRUD App
          </Typography>

          <Link className={classes.links} to={"/campuses"}>
            <Button
              variant="contained"
              style={{ marginRight: "10px", backgroundColor: "#2D5F5D" }}
            >
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={"/students"}>
            <Button
              variant="contained"
              style={{ marginRight: "10px", backgroundColor: "#2D5F5D" }}
            >
              All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { Link, NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    fontType: "bold",
    fontFamily: "Courier, sans-serif",
    fontSize: "35px",
    color: "#CDDC39",
  },
  appBar: {
    backgroundColor: "#11153e",
    shadows: ["none"],
  },
  links: {
    textDecoration: "none",
  },
  actionButton: {
    marginRight: "12px",
    fontWeight: 700
  },
  activeLink: {
    opacity: 0.70,
  }
}));

const LinkButton = ({ to, label }) => {
  const classes = useStyles();
  return (
    <NavLink className={classes.links} exact activeClassName={classes.activeLink} to={to}>
      <Button
        variant="contained"
        color="primary"
        style={{ marginRight: "10px" }}
      >
        {label}
      </Button>
    </NavLink>
  );
};

const Navbar = (props) => {
  const { action } = props; //{name: string, onClick: () => void}
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Link to="/"></Link>
          <Typography variant="h6" className={classes.title} color="inherit">
            <Link to="/" className={classes.links}>
              Campus Solution
            </Link>
          </Typography>
          {action && (
            <Button variant={"contained"} className={classes.actionButton} color="secondary" onClick={action.onClick}>
              {action.name}
            </Button>
          )}
          <LinkButton to={"/campuses"} label={"Campuses"} />
          <LinkButton to={"/students"} label={"Students"} />
          {/* <LinkButton to={'/home_page'} label={'Home Page'} /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontWeight: "600",
    fontSize: "28px",
    color: theme.palette.secondary.main,
  },
  appBar: {
    backgroundColor: theme.palette.primary.dark,
    // shadows: ["none"],
  },
  links: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      color: "inherit"
    }
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
          <Typography className={classes.title} color="inherit">
            <NavLink to="/" className={classes.links}>
              Campus Solution
            </NavLink>
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

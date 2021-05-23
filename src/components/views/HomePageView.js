import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  greeting: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
    width: "50%",
    margin: "auto",
  },
  links: {
    textDecoration: "none",
  },
}));

const HomePageView = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundColor: "#265077",
        height: "100%",
      }}
    >
      <Navbar />
      <div
        style={{
          marginRight: "10px",
          backgroundColor: "#2D5F5D",
          padding: "100px",
          margin: "50px",
          borderRadius: "25px",
        }}
      >
        <h1>Welcome to The Students and Campuses Database</h1>
      </div>
    </div>
  );
};

export default HomePageView;

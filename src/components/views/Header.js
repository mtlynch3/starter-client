import PropTypes from "prop-types";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './style/Header.css'



const Header = (props) => {
  return (
    <header className='header'>
      <h1>{props.heading}</h1>
      <Button variant="contained" color="primary">
        {props.buttonLabel}
      </Button>
    </header>
  );
}

Header.defaultProps = {
  heading: "Default Heading",
  buttonLabel: "Default Button",
}

Header.propTypes = {
  heading: PropTypes.string,
  buttonLabel: PropTypes.string,
}



export default Header

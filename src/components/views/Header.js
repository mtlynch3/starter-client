import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
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

import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import './style/Header.css'
import { Link } from 'react-router-dom';



const Header = (props) => {
  return (
    <header className='header'>
      <h1>{props.heading}</h1>
      <Link to= {props.link}>
      <Button id = 'formButton' variant="contained" color="primary">
        {props.buttonLabel}
      </Button>
      </Link>
    </header>
  );
}

Header.defaultProps = {
  heading: 'Default Heading',
  buttonLabel: 'Default Button',
  link: './add-campus',
}

Header.propTypes = {
  heading: PropTypes.string,
  buttonLabel: PropTypes.string,
  link: PropTypes.string,
}



export default Header

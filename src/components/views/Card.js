import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CardView = (props) => {
  return (
    <Card className='card'>
      <CardMedia
        className='card-class'
        image={props.student.imageUrl}
        title="image"
      />
      <CardContent>
        <h1> Harry Styles </h1>
      </CardContent>
    </Card>
  );
}

Card.defaultProps = {
  heading: "Default Heading",
  buttonLabel: "Default Button",
}

Card.propTypes = {
  heading: PropTypes.string,
  buttonLabel: PropTypes.string,
}


export default Card

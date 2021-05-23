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
          title='image'
      />
      <CardContent>
          <Link to={`/student/${props.id}`}>
            <h3> {props.student.firstname + " " + props.student.lastname} </h3>
          </Link>

          <Link to={`/campus/${props.student.campus.id}`}>
            <h3> {props.student.campus.name} </h3>
          </Link>
      </CardContent>
    </Card>
  );
}

Card.defaultProps = {
  heading: "Default Heading",
}

Card.propTypes = {
  heading: PropTypes.string,
}


export default CardView

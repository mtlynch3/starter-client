import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { sizing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
//import './style/Card.css'

const useStyles = makeStyles(theme => ({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',

}));


const CardView = (props) => {

  //student with no campus
  if(!props.student.campus){
    return (
      <div className='student-card'>
      <Box m={2} boxShadow={3}>
          <Card className='card'>
            <CardMedia
                className='card-class'
                image={props.student.imageUrl}
                title='student-image'
            />
            <CardContent>
                <Link to={`/student/${props.student.id}`}>
                  <h3> {props.student.firstname + " " + props.student.lastname} </h3>
                </Link>

                <h3> No campus found </h3>

            </CardContent>
          </Card>
        </Box>
      </div>
    );

  }

  //student with campus
  return (
    <div className='student-card'>
    <Box m={2} boxShadow={3}>
        <Card className='card'>
          <CardMedia
              className='card-class'
              image={props.student.imageUrl}
              title='student-image'
          />
          <CardContent>
              <Link to={`/student/${props.student.id}`}>
                <h3> {props.student.firstname + " " + props.student.lastname} </h3>
              </Link>

              <Link to={`/campus/${props.student.campus.id}`}>
                <h3> {props.student.campus.name} </h3>
              </Link>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}


export default CardView

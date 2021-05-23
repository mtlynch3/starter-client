import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { sizing } from '@material-ui/system';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',

}));

var cardStyle = {
    display: 'block',
    width: '30vw',
    height: '10vw'
}

const CampusCardView = (props) => {

  //no campus
  if(!props.campus.name){
    return (
      <div className='campus'>
        <h3> No campuses to display. </h3>
      </div>
    );

  }

  //with campus
  return (
    <div className='campus-card'>
    <Box width="30%" m={2} boxShadow={3}>
        <Card className='card' style={cardStyle}>
          <CardMedia
              className='card-class'
              image={props.campus.imageUrl}
              title='campus-image'
          />
          <CardContent>
              <Link to={`/campus/${props.campus.id}`}>
                <h3> {props.campus.name} </h3>
              </Link>
              <p> {props.campus.description} </p>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}


export default CampusCardView

import { Component } from 'react';
import { FormGroup, TextField, Container } from '@material-ui/core';

class NewCampusView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      description: '',
      imgURL: '',
      errors: {}
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  verifyInput = (event) => {
    switch (event.target.id) {
      case 'name':
        console.log('verified name');
        return;
      case 'address':
        console.log('address');
        return;
      case 'description':
        console.log('description');
        return;
      case 'imgURL':
        console.log('img URL');
        return;
      default:
        return;
    }
  }

  render() {
    return (
      <Container>
        <FormGroup onSubmit={this.props.addCampus}>
          <TextField
            id="name"
            label="Name"
            onChange={this.handleInputChange}
            onBlur={this.verifyInput}
            value={this.state.name}
            required={true}
            error={this.state.errors.name}
            helperText={this.state.errors.name}/>
          <TextField
            id="address"
            label="Address"
            onChange={this.handleInputChange}
            onBlur={this.verifyInput}
            value={this.state.address}
            required={true}
            error={this.state.errors.address}
            helperText={this.state.errors.address}/>
          <TextField
            id="description"
            label="Description"
            onChange={this.handleInputChange}
            onBlur={this.verifyInput}
            value={this.state.description}
            required={true}
            error={this.state.errors.description}
            helperText={this.state.errors.description}/>
          <TextField
            id="imgURL"
            label="Image URL"
            onChange={this.handleInputChange}
            value={this.state.imgURL}
            error={this.state.errors.imgURL}
            helperText={this.state.errors.imgURL}/>
        </FormGroup>
      </Container>
    );
  }
}

export default NewCampusView;
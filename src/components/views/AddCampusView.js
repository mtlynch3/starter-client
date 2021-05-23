import { Component } from 'react';
import { FormGroup, TextField, Container, Button } from '@material-ui/core';
import validator from 'validator';
import { findAllByDisplayValue } from '@testing-library/dom';

class AddCampusView extends Component {
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

  verifyInputChange = (event) => {
    switch (event.target.id) {
      case 'name':
        if (this.state.name === '')
          this.setState({ errors: { ...this.state.errors, name: "Name can't be empty." } });
        else if (!validator.isAlpha(this.state.name, 'en-US', { ignore: " -" }))
          this.setState({ errors: { ...this.state.errors, name: "Name must only contain letters." } });
        else
          this.setState({ errors: { ...this.state.errors, name: "" } });
        return;
      case 'address':
        if (this.state.address === '')
          this.setState({ errors: { ...this.state.errors, address: "Address can't be empty." } })
        else if (!validator.isAlphanumeric(this.state.address, 'en-US', { ignore: " -." }))
          this.setState({ errors: { ...this.state.errors, address: "Address can only contain numbers or letters." } })
        else
          this.setState({ errors: { ...this.state.errors, address: "" } });
        return;
      case 'description':
        if (this.state.description === '')
          this.setState({ errors: { ...this.state.errors, description: "Description can't be empty." } })
        else if (!validator.isAlphanumeric(this.state.description, 'en-US', { ignore: " -?!." }))
          this.setState({ errors: { ...this.state.errors, description: "Description must only contain letters." } })
        else
          this.setState({ errors: { ...this.state.errors, description: "" } });
        return;
      case 'imgURL':
        if (this.state.imgURL !== '' && !validator.isURL(this.state.imgURL))
          this.setState({ errors: { ...this.state.errors, imgURL: "Invalid image URL." } })
        return;
      default:
        return;
    }
  }

  validInput = () => {
    // name errors
    if (this.state.name === '' || !validator.isAlpha(this.state.name, 'en-US', { ignore: " -" }))
      return false;

    // address
    if (this.state.address === '' || !validator.isAlphanumeric(this.state.address, 'en-US', { ignore: " -." }))
      return false;

    // description
    if (this.state.description === '' || !validator.isAlphanumeric(this.state.description, 'en-US', { ignore: " -?!." }))
      return false;

    // url
    if (this.state.imgURL !== '' && !validator.isURL(this.state.imgURL))
      return false;

    return true;
  }

  submit = () => {
    if (!this.validInput()) {
      let newErrors = {};

      // name errors
      if (this.state.name === '')
        newErrors.name = "Name can't be empty.";
      if (!validator.isAlpha(this.state.name, 'en-US', { ignore: " -" }))
        newErrors.name = "Name must only contain letters.";
  
      // address
      if (this.state.address === '')
        newErrors.address = "Address can't be empty.";
      if (!validator.isAlphanumeric(this.state.address, 'en-US', { ignore: " -." }))
        newErrors.address = "Address can only contain numbers or letters.";
  
      // description
      if (this.state.description === '')
        newErrors.description = "Description can't be empty.";
      if (!validator.isAlphanumeric(this.state.description, 'en-US', { ignore: " -?!." }))
        newErrors.description = "Description must only contain letters.";
  
      // url
      if (this.state.imgURL !== '' && !validator.isURL(this.state.imgURL))
        newErrors.imgURL = "Invalid image URL.";

        this.setState({ errors: newErrors });
    }

    let campus = {
      name: this.state.name,
      address: this.state.address,
      description: this.state.description,
      imageUrl: this.state.imgURL ? this.state.imgURL : undefined
    };
    console.log("good", campus);
    // submit
    this.props.addCampus(campus);
  }

  render() {
    let disableButton = !this.validInput();
    return (
      <Container>
        <FormGroup onSubmit={this.submit}>
          <TextField
            id="name"
            label="Name"
            onChange={this.handleInputChange}
            onBlur={this.verifyInputChange}
            value={this.state.name}
            required={true}
            error={Boolean(this.state.errors.name)}
            helperText={this.state.errors.name}/>
          <TextField
            id="address"
            label="Address"
            onChange={this.handleInputChange}
            onBlur={this.verifyInputChange}
            value={this.state.address}
            required={true}
            error={Boolean(this.state.errors.address)}
            helperText={this.state.errors.address}/>
          <TextField
            id="description"
            label="Description"
            onChange={this.handleInputChange}
            onBlur={this.verifyInputChange}
            value={this.state.description}
            required={true}
            error={Boolean(this.state.errors.description)}
            helperText={this.state.errors.description}/>
          <TextField
            id="imgURL"
            label="Image URL"
            onChange={this.handleInputChange}
            onBlur={this.verifyInputChange}
            value={this.state.imgURL}
            error={Boolean(this.state.errors.imgURL)}
            helperText={this.state.errors.imgURL}/>
          <Button variant="contained" disabled={disableButton} onClick={this.submit}>Submit</Button>
        </FormGroup>
      </Container>
    );
  }
}

export default AddCampusView;
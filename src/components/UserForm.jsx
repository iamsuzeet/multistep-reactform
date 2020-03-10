import React, { Component } from 'react';
import { FormUserDetails } from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import { Confirm } from './Confirm';
import Success from './Success';

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  };

  //proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  //proceed to previous step
  previousStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  //handle field change
  handleChange = e => {
    console.log(e.target.name);

    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { step, ...values } = this.state;
    const { nextStep, handleChange, previousStep } = this;
    // const { firstName, lastName, email, occupation, city, bio } = this.state;

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={nextStep}
            previousStep={previousStep}
            handleChange={handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={nextStep}
            previousStep={previousStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
      default:
        return;
    }
  }
}

export default UserForm;

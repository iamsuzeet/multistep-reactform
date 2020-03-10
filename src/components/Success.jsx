import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Success" />
          <h1>Thank you for your Submission</h1>
          <p>You will get and email with further instructions.</p>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;

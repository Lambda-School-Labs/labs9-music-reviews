import React from 'react';
import {Modal, NavItem, Button} from 'react-materialize';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import {FirebaseContext} from './Firebase';

class LogInPage extends React.Component {
  constructor () {
    super ();
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }
  onChangeHandler = e => {
    //onChangeHandler for controlled inputs
    this.setState ({[e.target.name]: e.target.value});
  };
  isValid = () => {
    return this.state.name && this.state.email && this.state.password;
  };
  onSubmitHandler = () => {
    const validUser = this.isValid ();
  };
  render () {
    return (
      <div>
        <h1>Log In</h1>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.onChangeHandler}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.onChangeHandler}
          placeholder="Email Address"
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.onChangeHandler}
          placeholder="Password"
        />
        <Button waves="light" onClick={this.onSubmitHandler}>
          Log In
        </Button>
      </div>
    );
  }
}
export default withRouter (LogInPage);

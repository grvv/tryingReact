import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import { connect } from "react-redux";
import { login } from "./../actions";

import { Link } from "react-router-dom";

const Input = ({ input, type, placeholder, label, meta }) => {
  console.log(meta);

  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        {...input}
        type={type}
        className="form-control"
        placeholder={placeholder}
        autoComplete="off"
      />

      {meta.touched && meta.error && (
        <div className="alert alert-danger" role="alert">
          <strong>Oh snap!</strong> {meta.error}
        </div>
      )}
    </div>
  );
};

class Login extends Component {
  onSubmit = formValues => {
    // console.log(formValues);
    this.props.login(formValues);
  };

  render() {
    // console.log(this.props);

    return (
      <div className="card m-5">
        <div className="card-body">
          <h1 className="text-center font-weight-light">Login</h1>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field
              name="email"
              component={Input}
              label="Email"
              placeholder="Enter Email"
              type="text"
            />
            <Field
              name="password"
              component={Input}
              label="Password"
              placeholder="Enter Password"
              type="password"
            />

            <div className="text-center">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>

          <h2 className="text-center font-weight-light mt-2">OR</h2>

          <div className="text-center mt-3">
            <Link to="/signup" className="btn btn-success">
              Signup
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const validate = formValues => {
  const emailPattern = /(.+)@(.+){2,}\.(.+){2,}/;
  const errors = {};

  if (!formValues.email) {
    errors.email = "Enter Email";
  } else if (!emailPattern.test(formValues.email)) {
    errors.email = "Invalid Email";
  }

  if (!formValues.password) {
    errors.password = "Enter Password";
  }

  return errors;
};

const bindForm = reduxForm({ form: "loginForm", validate })(Login);

export default connect(
  null,
  { login }
)(bindForm);

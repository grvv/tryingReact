import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { fetchContact } from "../actions";

const Input = ({ input, type, placeholder, label, meta }) => {
  // console.log(meta);

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

class EditContact extends Component {
  //   state = {};

  componentDidMount() {
    const { fetchContact, match } = this.props;

    // console.log("Edit Contact Form", this.props);

    fetchContact(match.params.id);
  }

  render() {
    console.log("Edit Contact Form", this.props);

    const { pristine, valid } = this.props;

    return (
      <div className="card m-5">
        <div className="card-body">
          <form>
            <Field
              name="name"
              component={Input}
              label="Name"
              placeholder="Enter Name"
              type="text"
            />
            <Field
              name="age"
              component={Input}
              label="Age"
              placeholder="Enter Age"
              type="number"
            />
            <Field
              name="email"
              component={Input}
              label="Email"
              placeholder="Enter Email"
              type="text"
            />

            <button className="btn btn-primary" disabled={pristine || !valid}>
              Update Contact
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const validate = formValues => {
  const emailPattern = /(.+)@(.+){2,}\.(.+){2,}/;
  const errors = {};

  if (!formValues.email) {
    errors.email = "Email is required";
  } else if (!emailPattern.test(formValues.email)) {
    errors.email = "Invalid Email";
  }

  if (!formValues.name) {
    errors.password = "Name is required";
  }

  if (!formValues.age) {
    errors.age = "Age is required";
  }

  return errors;
};

const mapStateToProps = ({ contact }) => {
  // console.log("Map State to props", contact);

  if (Object.keys(contact).length > 0) {
    const { name, email, age } = contact;

    return { initialValues: { name, email, age } };
  }

  return {};
};

const bindForm = reduxForm({
  form: "editContact",
  validate,
  enableReinitialize: true
})(EditContact);

export default connect(
  mapStateToProps,
  { fetchContact }
)(bindForm);

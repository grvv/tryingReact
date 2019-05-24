import React, { Component } from "react";
import { connect } from "react-redux";

import { getAllContacts, logout } from "../actions";
import ContactList from "./ContactList";

import { Route, Link } from "react-router-dom";
import EditContact from "./editContact";
import AddContact from "./AddContact";

class Dashboard extends Component {
  // state = {  }
  render() {
    // console.log("Dashboard Render Method", this.props);

    // const { match } = this.props;

    return (
      <div className="container">
        <div className="border rounded border-light my-2 p-2">
          <Link to="/dashboard">
            <h1 className="d-inline-block font-weight-light">Contact List</h1>
          </Link>
          <button
            className="btn btn-warning float-right mt-2"
            onClick={this.props.logout}
          >
            Logout
          </button>

          <Link
            to="/dashboard/AddContact"
            className="btn btn-warning float-right mt-2 mr-3"
          >
            Add Contact
          </Link>
        </div>

        {/* <Route>
          <ContactList />
        </Route> */}

        <Route path="/dashboard" exact component={ContactList} />
        <Route path="/dashboard/editcontact/:id" component={EditContact} />
        <Route path="/dashboard/AddContact" component={AddContact} />
      </div>
    );
  }

  componentDidMount() {
    this.props.getAllContacts();
  }
}

// const mapStateToProps = state => {
//   return { contactList: state.contactList };
// };

export default connect(
  null,
  { getAllContacts, logout }
)(Dashboard);

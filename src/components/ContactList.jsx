import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

const ContactList = ({ contactList, match }) => {
  return (
    <React.Fragment>
      {contactList.map(contact => (
        <div className="card my-2" key={contact.email}>
          <div className="card-body">
            {/* {JSON.stringify(contact)} */}
            <h4 className="card-title">{contact.name}</h4>
            <h6 className="card-subtitle mb-2 text-muted">{contact.age}</h6>
            <p className="card-text">{contact.email}</p>

            {/* <button type="button" className="btn btn-primary btn-lg btn-block">
              Edit
            </button> */}

            <Link
              to={`dashboard/editcontact/${contact._id}`}
              className="btn btn-primary btn-lg btn-block"
            >
              Edit Contact
            </Link>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return { contactList: state.contactList };
};

export default connect(mapStateToProps)(ContactList);

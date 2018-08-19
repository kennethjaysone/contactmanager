import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
import { Link } from "react-router-dom";

class Contact extends Component {
  // constructor() {
  //   super();
  //   this.state = {};
  //   //this.showContactDetails = this.showContactDetails.bind(this);
  // }

  state = {
    showContactInfo: false
  };

  static propTypes = {
    contact: PropTypes.object.isRequired
    //deleteContactHandler: PropTypes.func.isRequired
  };

  // showContactDetails() {
  //   console.log(this.state);
  // }

  showContactDetails = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  deleteContact = async (id, dispatch) => {
    //this.props.deleteContactHandler();
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };

  render() {
    //Destructuring
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={this.showContactDetails}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  onClick={this.deleteContact.bind(this, id, dispatch)}
                  className="fas fa-times"
                  style={{ cursor: "pointer", color: "red", float: "right" }}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      color: "black",
                      float: "right",
                      marginRight: "10px"
                    }}
                  />
                </Link>
              </h4>

              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired
// };

export default Contact;

import React, { Component } from "react";

import Alert from "../Util/Alert";

const initState = {
  name: "Harshad",
  email: "hakhiste@gmail.com",
  description: "It is a long established fact that a reader will"
};
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  handleContactForm = e => {
    console.log("form submitted", this.state);
    this.setState({
      requestStatus: "success",
      requestStatusMessage:
        "Request submitted successfully. We will get back to you..."
    });
    this.setState(initState);
    e.preventDefault();
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 col-md-10 mx-auto'>
            <div className='card-header p-0'>
              <p>
                Do you have any questions? Please do not hesitate to contact us
                directly. Our team will come back to you within a matter of
                hours to help you.
              </p>
            </div>
            <br />

            <Alert
              result={this.state.requestStatus}
              message={this.state.requestStatusMessage}
              timeout='1000'
            />

            <form onSubmit={this.handleContactForm}>
              <div className='card border-primary rounded-0'>
                <div className='card-body p-3'>
                  <div className='form-group'>
                    <div className='input-group mb-2'>
                      <div className='input-group-prepend'>
                        <div className='input-group-text'>
                          <i className='fa fa-user text-info'></i>
                        </div>
                      </div>
                      <input
                        type='text'
                        className='form-control'
                        id='Name'
                        name='name'
                        placeholder='Name'
                        onChange={this.handleInputChange}
                        required
                        value={this.state.name}
                      />
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='input-group mb-2'>
                      <div className='input-group-prepend'>
                        <div className='input-group-text'>
                          <i className='fa fa-envelope text-info'></i>
                        </div>
                      </div>
                      <input
                        type='email'
                        className='form-control'
                        id='email'
                        name='email'
                        placeholder='ejemplo@gmail.com'
                        onChange={this.handleInputChange}
                        value={this.state.email}
                        required
                      />
                    </div>
                  </div>

                  <div className='form-group'>
                    <div className='input-group mb-2'>
                      <div className='input-group-prepend'>
                        <div className='input-group-text'>
                          <i className='fa fa-comment text-info'></i>
                        </div>
                      </div>
                      <textarea
                        className='form-control'
                        placeholder='Description'
                        name='description'
                        required
                        onChange={this.handleInputChange}
                        value={this.state.description}
                      >
                      </textarea>
                    </div>
                  </div>

                  <div className='text-center'>
                    <input
                      type='submit'
                      value='Send'
                      className='btn btn-info btn-block rounded-0 py-2'
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;

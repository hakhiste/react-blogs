import React, { useState } from "react";

import HeadSection from "../Layout/HeadSection";
import Alert from "../Util/Alert";
import Background from "../Layout/assets/img/post-bg.jpg";
import { Redirect } from "react-router-dom";

const Login = () => {
  const initState = {
    email: "hakhiste@gmail.com",
    password: "123456",
    alertMessage: "",
    alertResult: null
  };
  const [formState, setFormState] = useState(initState);

  const handleInputChange = e => {
    setFormState({ [e.target.name]: e.target.value });
  };

  const handleLogin = e => {
    console.log("form submitted", formState);
    const result = true;
    if(result) {
      const minutes = 1;
      localStorage.setItem('token', new Date().getTime()+(minutes*60*60*1000));
    }
    setFormState({
      alertResult: (result) ? "success" : "error",
      alertMessage: "Successfully loggedin. Redirecting to home page..."
    });
    
    
    e.preventDefault();
  };

  return (
    <>
      <HeadSection
        heading='Login'
        subheading='Login to continue accessing website'
        background={Background}
      />

      {formState.alertResult === 'success' && <Redirect to='/' />}

      <div class='container'>
        <div class='row'>
          <div class='col-lg-8 col-md-10 mx-auto'>
            <Alert
              result={formState.alertResult}
              message={formState.alertMessage}
              timeout='3000'
            />

            {formState.alertResult !== 'success' && (
              <form onSubmit={handleLogin}>
                <div className='card border-primary rounded-0'>
                  <div className='card-body p-3'>
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
                          placeholder='Email'
                          name='email'
                          required
                          onChange={handleInputChange}
                          value={formState.email}
                        />
                      </div>
                      <div className='form-group'>
                        <div className='input-group mb-2'>
                          <div className='input-group-prepend'>
                            <div className='input-group-text'>
                              <i className='fa fa-key text-info'></i>
                            </div>
                          </div>
                          <input
                            type='password'
                            className='form-control'
                            name='password'
                            required
                            onChange={handleInputChange}
                            value={formState.password}
                          />
                        </div>
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
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;

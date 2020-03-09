import React, { useState } from "react";
import Alert from "../../Util/Alert";

const AddComment = props => {
  const initState = { comment: "", alertMessage: "", alertResult: null };
  const [formState, setFormState] = useState(initState);

  const handleInputChange = e => {
    setFormState({ [e.target.name]: e.target.value });
  };

  const handleAddComment = e => {
    console.log("form submitted", formState);
    setFormState({
      alertResult: "success",
      alertMessage: "Thank you for your comment..."
    });
    e.preventDefault();
  };

  return (
    <div className='row'>
      <div className='col-lg-8 col-md-10 mx-auto'>
        <div className='card-header p-0'>
          <p>Add your comments</p>

          <Alert
            result={formState.alertResult}
            message={formState.alertMessage}
            timeout='3000'
          />

          <form onSubmit={handleAddComment}>
            <div className='card border-primary rounded-0'>
              <div className='card-body p-3'>
                <div className='form-group'>
                  <div className='input-group mb-2'>
                    <div className='input-group-prepend'>
                      <div className='input-group-text'>
                        <i className='fa fa-comment text-info'></i>
                      </div>
                    </div>
                    <textarea
                      className='form-control'
                      placeholder='Comment'
                      name='comment'
                      required
                      onChange={handleInputChange}
                      value={formState.comment}
                    ></textarea>
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
        <hr />
      </div>
    </div>
  );
};
export default AddComment;

import React from "react";

const Loader = props => {
  return (
    <>
      <div className='text-center' style={{minHeight: 200, paddingTop: 50}}>
        <i className='fa fa-spinner fa-spin fa-2x'></i>
        <br />
        Loading...
      </div>
    </>
  );
};

export default Loader;

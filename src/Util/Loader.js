import React from "react";

const Loader = props => {
  return (
    <>
      <div className='text-center' style={{ minHeight: 200, paddingTop: 50 }}>
        <i className='fa fa-spinner fa-spin fa-2x'></i>
        <br />
        {props.label && props.label.length > 0 ? props.label : "Loading..."}
      </div>
    </>
  );
};

export default Loader;

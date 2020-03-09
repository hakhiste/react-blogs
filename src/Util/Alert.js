import React, { useState } from "react";

const Alert = props => {
  const [visible, setVisible] = useState("block");

  const timeout = props.timeout ? props.timeout : 0;

  const alertClass =
    props.result === "error"
      ? "alert alert-danger"
      : props.result === "success"
      ? "alert alert-success"
      : "";

  const autoRemove = () => {
    if (timeout > 0) {
      setTimeout(() => {
        setVisible("none");
      }, timeout);
    }
  };

  return (
    <>
      {alertClass.length > 0 && (
        <div
          className={alertClass}
          style={{ display: visible }}
          onLoad={autoRemove()}
        >
          {props.message}
        </div>
      )}
    </>
  );
};

export default Alert;

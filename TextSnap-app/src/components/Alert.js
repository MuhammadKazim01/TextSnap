import React from "react";

export default function Alert(props) {
  return (
    <>
      {props.alert && (
        <div className={`alert alert-${props.alert.type}`} style={{ height: '50px' }} role="alert">
          {props.alert.msg}
        </div>
      )}
    </>
  );
}
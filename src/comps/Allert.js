import React from "react";

export const Allert = ({ type, text }) => {
  return (
    <>
      <div className={`alert alert-${type} text-capitalize`}>{text}</div>
    </>
  );
};

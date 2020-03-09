import React from "react";

export const ExpenseFeaadback = ({ type, text }) => {
  return (
    <>
      <div className={`alert alert-${type} text-capitalize`}>{text}</div>
    </>
  );
};

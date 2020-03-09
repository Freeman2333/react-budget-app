import React from "react";

export const Expenses = ({ total }) => {
  return (
    <>
      <h6 className="text-uppercase info-title">expenses</h6>
      <span className="expense-icon">
        <i className="far fa-credit-card"></i>
      </span>
      <h4 className="text-uppercase mt-2 expense" id="expense">
        <span>$ </span>
        <span id="expense-amount">{total}</span>
      </h4>
    </>
  );
};

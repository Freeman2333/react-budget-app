import React, { useContext } from "react";
import { BudgetContext } from "../Context";
export const Budget = () => {
  const context = useContext(BudgetContext);
  return (
    <>
      <h6 className="text-uppercase info-title">budget</h6>
      <span className="budget-icon">
        <i className="fas fa-money-bill-alt"></i>
      </span>
      <h4 className="text-uppercase mt-2 budget" id="budget">
        <span>$ </span>
        <span id="budget-amount">{context.budget}</span>
      </h4>
    </>
  );
};

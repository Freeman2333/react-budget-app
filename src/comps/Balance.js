import React, { useContext } from "react";
import { BudgetContext } from "../Context";
export const Balance = () => {
  const context = useContext(BudgetContext);
  let balance = context.balance;
  let balanceColor = balance => {
    if (balance > 0) {
      return "showGreen";
    } else if (balance < 0) {
      return "showRed";
    } else {
      return null;
    }
  };

  return (
    <>
      <h6 className="text-uppercase info-title">balance</h6>
      <span className="balance-icon">
        <i className="fas fa-dollar-sign"></i>
      </span>
      <h4
        className={`text-uppercase mt-2 balance ${balanceColor(balance)}`}
        id="balance"
      >
        {" "}
        <span>$ </span>
        <span id="balance-amount">{balance}</span>
      </h4>
    </>
  );
};

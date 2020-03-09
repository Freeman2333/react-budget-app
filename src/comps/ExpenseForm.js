import React, { useContext } from "react";
import { BudgetContext } from "../Context";

export const ExpenseForm = () => {
  const context = useContext(BudgetContext);
  const {
    expenseFormSubmit,
    handleExpense,
    handleAmount,
    amountValue,
    expenseValue
  } = context;
  return (
    <>
      <form
        onSubmit={expenseFormSubmit}
        id="expense-form"
        className=" expense-form"
      >
        <h5 className="text-capitalize">please enter your expense</h5>
        <div className="form-group">
          <input
            type="text"
            className="form-control expense-input"
            id="expense-input"
            onChange={handleExpense}
            value={expenseValue}
          />
        </div>
        <h5 className="text-capitalize">please enter expense amount</h5>
        <div className="form-group">
          <input
            type="number"
            className="form-control expense-input"
            id="amount-input"
            onChange={handleAmount}
            value={amountValue}
          />
        </div>

        <button
          type="submit"
          className="btn text-capitalize expense-submit"
          id="expense-submit"
        >
          add expense
        </button>
      </form>
    </>
  );
};

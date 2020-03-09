import React, { useContext } from "react";
import { BudgetContext } from "../Context";

import { Expense } from "./Expense";
export const ExpenseList = () => {
  const context = useContext(BudgetContext);
  let { expensesList, expenseEditClick, expenseDeleteClick } = context;
  // console.log(expensesList);
  return (
    <>
      <div className="expense-list" id="expense-list">
        <div className="expense-list__info d-flex justify-content-between text-capitalize">
          <h5 className="list-item">expense title</h5>
          <h5 className="list-item">expense value</h5>
          <h5 className="list-item"></h5>
        </div>
        {expensesList.map(expense => {
          return (
            <Expense
              key={expense.id}
              id={expense.id}
              amount={expense.amount}
              expense={expense.expense}
              expenseEditClick={expenseEditClick}
              expenseDeleteClick={expenseDeleteClick}
            />
          );
        })}
      </div>
    </>
  );
};

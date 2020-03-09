import React, { useContext } from "react";
import { BudgetContext } from "../Context";

export const Form = () => {
  const context = useContext(BudgetContext);
  const { budgetFormSubmit, handleBudget } = context;
  return (
    <>
      <form
        id="budget-form"
        className=" budget-form"
        onSubmit={budgetFormSubmit}
      >
        <h5 className="text-capitalize">please enter your budget</h5>
        <div className="form-group">
          <input
            type="number"
            className="form-control budget-input"
            id="budget-input"
            onChange={handleBudget}
            value={context.inputBudget}
          />
        </div>

        <button
          type="submit"
          className="btn text-capitalize budget-submit"
          id="budget-submit"
        >
          calculate
        </button>
      </form>
    </>
  );
};

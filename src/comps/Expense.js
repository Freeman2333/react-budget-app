import React from "react";

export const Expense = ({ id, expense, amount, expenseDeleteClick, expenseEditClick }) => {
  return (
    <div className="expense-item d-flex justify-content-between align-items-baseline">
      <h6 className="expense-title mb-0 text-uppercase list-item">{expense}</h6>
      <h5 className="expense-amount mb-0 list-item">{amount}</h5>

      <div className="expense-icons list-item">
        <a
          href="#"
          className="edit-icon mx-2"
          data-id={id}
          onClick={e => {
            e.preventDefault();
            expenseEditClick(id)
          }}
        >
          <i className="fas fa-edit"></i>
        </a>
        <a
          href="#"
          className="delete-icon"
          data-id={id}
          onClick={e => {
            e.preventDefault();
          }}
        >
          <i
            onClick={() => {
              expenseDeleteClick(id);
              // console.log(id);
            }}
            className="fas fa-trash"
          ></i>
        </a>
      </div>
    </div>
  );
};

{
  /* <!-- <div className="expense">
        <div className="expense-item d-flex justify-content-between align-items-baseline">

         <h6 className="expense-title mb-0 text-uppercase list-item">- title</h6>
         <h5 className="expense-amount mb-0 list-item">amount</h5>

         <div className="expense-icons list-item">

          <a href="#" className="edit-icon mx-2" data-id="${expense.id}">
           <i className="fas fa-edit"></i>
          </a>
          <a href="#" className="delete-icon" data-id="${expense.id}">
           <i className="fas fa-trash"></i>
          </a>
         </div>
        </div>

       </div> -->
                        <!-- end of single expense --> */
}

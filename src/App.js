import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Form } from "./comps/Form";
import { Allert, Comp } from "./comps/Allert";
import { Budget } from "./comps/Budget";
import { Expenses } from "./comps/Expenses";
import { Balance } from "./comps/Balance";
import { ExpenseFeaadback } from "./comps/ExpenseFeaadback";
import { ExpenseList } from "./comps/ExpenseList";
import { ExpenseForm } from "./comps/ExpenseForm";
import { BudgetConsumer } from "./Context";
function App() {
  return (
    <>
      <BudgetConsumer>
        {value => {
          return (
            <>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-11 mx-auto pt-3">
                    <h3 className="text-uppercase mb-4">budget app</h3>
                    <div className="row">
                      <div className="col-md-5 my-3">
                        {value.allert.show ? (
                          <Allert
                            type={value.allert.type}
                            text={value.allert.text}
                          />
                        ) : null}

                        <Form />
                      </div>
                      <div className="col-md-7">
                        <div className="row my-3">
                          <div className="col-4 text-center mb-2">
                            <Budget />
                          </div>
                          <div className="col-4 text-center">
                            <Expenses total={value.totalExpense} />
                          </div>
                          <div className="col-4 text-center">
                            <Balance />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5 my-3">
                        {value.expenseFeaadback.show ? (
                          <ExpenseFeaadback
                            type={value.expenseFeaadback.type}
                            text={value.expenseFeaadback.text}
                          />
                        ) : null}

                        <ExpenseForm />
                      </div>
                      <div className="col-md-7 my-3">
                        <ExpenseList />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              ;
            </>
          );
        }}
      </BudgetConsumer>
    </>
  );
}

export default App;

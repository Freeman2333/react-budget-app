import React, { Component } from "react";
import { ExpenseList } from "./comps/ExpenseList";

const BudgetContext = React.createContext();

export default class BudgetProvider extends Component {
  state = {
    id: 0,
    expensesList: [],
    budget: 0,
    inputBudget: "",
    balance: 0,
    allert: { show: false, type: "", text: "" },
    expenseFeaadback: { show: false, type: "", text: "" },
    expenseValue: "",
    amountValue: "",
    totalExpense: 0
  };

  componentWillMount() {
    if (localStorage.getItem("state")) {
      const state = JSON.parse(localStorage.getItem("state"));
      this.setState({ ...state });
      // this.showBalance();
    }
  }
  componentDidUpdate() {
    const state = this.state;
    localStorage.setItem("state", JSON.stringify(state));
  }
  handleBudget = e => {
    let inputBudget = +e.target.value;
    this.setState({ ...this.state, inputBudget });
  };

  handleExpense = e => {
    let expenseValue = e.target.value;
    this.setState({ ...this.state, expenseValue });
  };

  handleAmount = e => {
    let amountValue = +e.target.value;
    this.setState({ ...this.state, amountValue });
  };

  budgetFormSubmit = e => {
    e.preventDefault();
    if (this.state.inputBudget === "" || this.state.inputBudget < 0) {
      this.handleAllert("danger", "Value cannot be negative or empty");
    } else {
      this.setState(
        {
          ...this.state,
          budget: this.state.inputBudget,
          inputBudget: ""
        },
        () => {
          this.showBalance();
          // console.log(this.state);
        }
      );
    }
  };

  showBalance() {
    const expense = this.totalExpense();
    const total = this.state.budget - expense;
    // console.log(total);
    this.setState({ ...this.state, balance: total, totalExpense: expense });
  }

  totalExpense() {
    let expenseList = this.state.expensesList;
    let total = 0;
    if (expenseList.length > 0) {
      total = expenseList.reduce((acc, curr) => {
        return (acc += curr.amount);
      }, 0);
      return total;
    } else {
      return total;
    }
  }

  expenseFormSubmit = e => {
    e.preventDefault();
    if (
      this.state.expenseValue === "" ||
      this.state.amountValue === "" ||
      this.state.amountValue < 0
    ) {
      this.handleExpenseFeaadback(
        "danger",
        "Values cannot be negative or empty"
      );
    } else {
      let newExpense = {
        id: Math.floor(Math.random() * 100000000),
        expense: this.state.expenseValue,
        amount: this.state.amountValue
      };

      let texmpExpenses = [...this.state.expensesList, newExpense];
      this.setState(
        {
          ...this.state,
          expensesList: texmpExpenses,
          expenseValue: "",
          amountValue: ""
        },
        () => {
          this.showBalance();
        }
      );
    }
  };

  handleAllert = (type, text) => {
    this.setState({ ...this.state, allert: { show: true, type, text } });
    setTimeout(
      () => this.setState({ ...this.state, allert: { show: false } }),
      2000
    );
  };
  handleExpenseFeaadback = (type, text) => {
    this.setState({
      ...this.state,
      expenseFeaadback: { show: true, type, text }
    });
    setTimeout(
      () => this.setState({ ...this.state, expenseFeaadback: { show: false } }),
      2000
    );
  };
  expenseEditClick = id => {
    let expense = this.state.expensesList.find(item => item.id === id);
    let tempExpenses = this.state.expensesList.filter(item => item.id !== id);

    // console.log(expenseWhole);
    this.setState(
      {
        ...this.state,
        expensesList: tempExpenses,
        amountValue: expense.amount,
        expenseValue: expense.expense
      },
      () => this.showBalance()
    );
  };
  expenseDeleteClick = id => {
    let tempExpenses = this.state.expensesList.filter(item => item.id !== id);

    this.setState({ ...this.state, expensesList: tempExpenses }, () =>
      this.showBalance()
    );
  };
  render() {
    return (
      <BudgetContext.Provider
        value={{
          ...this.state,
          budgetFormSubmit: this.budgetFormSubmit,
          expenseFormSubmit: this.expenseFormSubmit,
          expenseEditClick: this.expenseEditClick,
          expenseDeleteClick: this.expenseDeleteClick,
          handleBudget: this.handleBudget,
          handleAllert: this.handleAllert,
          handleExpenseFeaadback: this.handleExpenseFeaadback,
          handleExpense: this.handleExpense,
          handleAmount: this.handleAmount,
          expenseFormSubmit: this.expenseFormSubmit
        }}
      >
        {this.props.children}
      </BudgetContext.Provider>
    );
  }
}

const BudgetConsumer = BudgetContext.Consumer;
export { BudgetConsumer, BudgetProvider, BudgetContext };

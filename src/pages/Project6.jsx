import { useState } from "react";
import NewExpense from "../components/project6/newExpense/NewExpense";
import Expenses from "../components/project6/expenses/Expenses";
import styles from './Project6.module.css'

const DUMMY_DATA = []

function Project6() {
  const [ExpenseData, setExpenseData] = useState(DUMMY_DATA)

  const addExpenseHandler = (expense) => {
    setExpenseData((prevExp) => {
      return([expense, ...prevExp ])
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses ExpenseData={ExpenseData} />
    </div>
  );
}

export default Project6;

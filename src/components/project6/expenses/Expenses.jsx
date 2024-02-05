import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../ui/Card";
import styles from './Expenses.module.css'

export default function Expenses({ExpenseData}){
  const [filteredYear, setFilteredYear] = useState("2023")
  const filteredExpenses = ExpenseData.filter(data => data.date.split(' ')[3] === filteredYear)

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  return (
    <Card className={styles.expenses}>
      <ExpensesFilter defaultValue={filteredYear} onFilterChange={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      {filteredExpenses.length === 0 ?
       <p className={styles.noExpenses}>No Expenses found.</p> : 
       filteredExpenses.map(expenses => <ExpenseItem key={expenses.id} {...expenses} />)
      }
    </Card>
  )
}
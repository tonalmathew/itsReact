import { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import styles from './NewExpense.module.css'

export default function NewExpense({onAddExpense}) {
  const [isEditing, setIsEditing] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    onAddExpense(expenseData)
    setIsEditing(false)
  }

  return(
    <div className={styles.newExpense}>
     {!isEditing && <button onClick={() => setIsEditing(!isEditing)}>Add New Expense</button>}
     {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} setIsEditing={setIsEditing} />}
    </div>
  )
}
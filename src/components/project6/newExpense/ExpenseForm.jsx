import { useState } from 'react'
import styles from './ExpenseForm.module.css'

export default function ExpenseForm({onSaveExpenseData, setIsEditing}) {

  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: ""
  })

  const handleChange = (event) => {
    const {name, value} = event.target
    setUserInput((prevState) => {
      return ({
        ...prevState,
        [name]: value
      })
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const {title, amount, date} = userInput
    const expenseData = {
      title,
      amount: +amount,
      date: new Date(date).toDateString()
    }
    onSaveExpenseData(expenseData)
    setUserInput({
      title: "",
      amount: "",
      date: ""
    })
  }

  return(
    <form onSubmit={handleSubmit}>
      <div className={styles.newExpenseControls}>
        <div className={styles.newExpenseControl}>
          <label>Title</label>
          <input type="text" name="title" value={userInput.title} onChange={handleChange} />
        </div>
        <div className={styles.newExpenseControl}>
          <label>Amount</label>
          <input type="number" min={0.01} step={0.01} name="amount" value={userInput.amount} onChange={handleChange} />
        </div>
        <div className={styles.newExpenseControl}>
          <label>Date</label>
          <input type="date" name="date" min='2023-01-01' max='2026-01-01' value={userInput.date} onChange={handleChange}/>
        </div>
      </div>
      <div className={styles.newExpenseActions}>
        <button onClick={() => setIsEditing(false)} type='button'>cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}
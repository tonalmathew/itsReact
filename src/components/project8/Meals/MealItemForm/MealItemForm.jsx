import { useRef, useState } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../Ui/Input/Input'

export default function MealItemForm({id, onAddToCart}) {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef()

  const submitHandler = event => {
    event.preventDefault()
    const enteredAmount = Number(amountInputRef.current.value)
    if(enteredAmount.length == 0 || enteredAmount < 1 || enteredAmount > 5){
      setAmountIsValid(false)
      return;
    }

    onAddToCart(enteredAmount)
  }

  return(
    <form className={classes.form} onSubmit={submitHandler} >
      <Input
        ref={amountInputRef} 
        label="Amount" 
        input={{
        id: "amount_" + id, 
        type: "text", 
        min: '1', 
        max: '5', 
        step: '1', 
        defaultValue: '1'
      }} />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  )
}
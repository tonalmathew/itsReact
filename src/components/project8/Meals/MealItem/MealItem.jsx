import { useContext } from 'react'

import classes from './MealItem.module.css'
import MealItemForm from '../MealItemForm/MealItemForm'
import CartContext from '../../../../context/cart-context'

export default function MealItem({name, description, price, id}) {
  const {addItem} = useContext(CartContext)
  const newPrice = `$${price.toFixed(2)}`

  const addToCartHandler = (amount) => {
    addItem({
      id,
      name,
      amount,
      price
    })
  }

  return(
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{newPrice}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={id} />
      </div>
    </li>
  )
}
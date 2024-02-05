import { useContext, useEffect, useState } from 'react'

import CartIcon from '../../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import cartContext from '../../../../context/cart-context'

export default function HeaderCartButton({onClick}) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
  const {items} = useContext(cartContext)
  const numberOfCartItems = items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0)

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`

  useEffect(()=>{
    if(items.length === 0){
      return;
    }
    const timer = setBtnIsHighlighted(true)
    setTimeout(()=>{
      setBtnIsHighlighted(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])
  
  return(
      <button onClick={onClick} className={btnClasses}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
  )
}
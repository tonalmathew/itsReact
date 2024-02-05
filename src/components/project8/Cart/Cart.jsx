import { useContext, useState } from 'react';

import classes from './Cart.module.css'
import Modal from '../Ui/Modal/Modal';
import CartItem from './CartItem/CartItem';
import CartContext from '../../../context/cart-context';
import Checkout from './Checkout/Checkout';

export default function Cart({onClose}){
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const {items, totalAmount, addItem, removeItem, clearCart} = useContext(CartContext)
  
  const newTotalAmount = `$${totalAmount.toFixed(2)}`;
  const hasItems = items.length>0;

  const cartItemRemoveHandler = id => {
    removeItem(id)
  }

  const cartItemAddHandler = item => {
    addItem({...item, amount: 1})
  }

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch('https://react-meals-ton-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: items
      })
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    clearCart()
  };

  const cartItem = <ul className={classes['cart-items']}>
    {items.map(item => 
    <CartItem 
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />)}</ul>;

    const modalActions = (
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onClose}>
          Close
        </button>
        {hasItems && (
          <button className={classes.button} onClick={orderHandler}>
            Order
          </button>
        )}
      </div>
    );

    const cartModalContent = (
      <>
        {cartItem}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{newTotalAmount}</span>
        </div>
        {isCheckout && (
          <Checkout onConfirm={submitOrderHandler} onCancel={onClose} />
        )}
        {!isCheckout && modalActions}
      </>
    );

    const isSubmittingModalContent = <p>Sending order data...</p>;

    const didSubmitModalContent = (
      <>
        <p>Successfully sent the order!</p>
        <div className={classes.actions}>
        <button className={classes.button} onClick={onClose}>
          Close
        </button>
      </div>
      </>
    );

  return(
    <Modal onClose={onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  )
}
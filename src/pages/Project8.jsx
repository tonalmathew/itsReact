import { useState } from 'react'

import Header from '../components/project8/Layout/Header/Header'
import Meals from '../components/project8/Meals/Meals'
import Cart from '../components/project8/Cart/Cart'
import CartProvider from '../context/cartProvider.jsx'

function Project8() {
  const [cartIsShown, setCartIsShown] = useState(false)

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={() => setCartIsShown(false)} />}
      <Header onShowCart={() => setCartIsShown(true)} />
      <main>
        <Meals />
      </main>
      </CartProvider>
  )
}

export default Project8

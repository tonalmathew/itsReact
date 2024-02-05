import mealsImage from '../../../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton'

export default function Header({onShowCart}){
  return(
    <>
    <header className={classes.header}>
      <h1>ReactMeals</h1>
      <HeaderCartButton onClick={onShowCart} />
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImage} alt="meals image" />
    </div>
    </>
  )
}
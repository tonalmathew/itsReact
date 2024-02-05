import classes from './AvailableMeals.module.css'
import Card from '../../Ui/Card/Card'
import MealItem from '../MealItem/MealItem';
import { useEffect, useState } from 'react';

export default function AvailableMeals() {
  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://react-meals-ton-default-rtdb.firebaseio.com/meals.json')
      if(!response.ok) {
        throw new Error('Something went wrong!')
      }
      const data = await response.json()

      const loadedMeals = []

      for(const key in data){
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price
        })
      }
      setMeals(loadedMeals)
      setIsLoading(false)
    }

    fetchData().catch(err => {
      setIsLoading(false)
    setError(err.message)
    })

  },[])

  if(isLoading) {
    return <section className={classes.loading}><p>Loading...</p></section>
  }

  if(error) {
    return <section className={classes.error}><p>{error}</p></section>
  }
  
  const mealsList = meals.map(meal => <MealItem 
    key={meal.id} 
    id={meal.id}
    name={meal.name} 
    description={meal.description} 
    price={meal.price} 
  />);

  return(
    <section className={classes.meals}>
      <Card >
        <ul>
          {mealsList}
        </ul>
      </Card>
    </section>
  )
}
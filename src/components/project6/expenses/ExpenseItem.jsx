import Card from '../ui/Card'
import styles from './ExpenseItem.module.css'

export default function ExpenseItem({date, title, amount}) {

  return(
    <Card className={styles.expenseItem}>
      <div className={styles.expenseDate}>
      <div>{date}</div>
      </div>
      <div className={styles.expenseItemDescription}>
        <h2>{title}</h2>
        <div className={styles.expenseItemPrice}>{amount}</div>
      </div>
    </Card>
  )
}
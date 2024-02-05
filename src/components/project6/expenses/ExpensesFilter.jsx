import styles from './ExpensesFilter.module.css';

const ExpensesFilter = ({onFilterChange, defaultValue}) => {
  return (
    <div className={styles.expensesFilter}>
      <div className={styles.expensesFilterControl}>
        <label>Filter by year</label>
        <select className='text-black' value={defaultValue} onChange={(e) => onFilterChange(e.target.value)}>
          <option value='2026'>2026</option>
          <option value='2025'>2025</option>
          <option value='2024'>2024</option>
          <option value='2023'>2023</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
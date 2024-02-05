
import styles from './ChartBar.module.css'
export default function ChartBar({value, maxValue, label}) {
  let barFillHeight = '0%'
  if(maxValue>0) {
    barFillHeight = Math.round((value/maxValue) * 100) + '%'
  }
  return(
    <div className={styles.chartBar}>
      <div className={styles.chartBarInner}>
        <div className={styles.chartBarFill} style={{height: barFillHeight}}></div>
      </div>
      <div className={styles.chartBarLabel}>{label}</div>
    </div>
  )
}
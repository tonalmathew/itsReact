
import ChartBar from "./ChartBar";
import styles from './Chart.module.css'

export default function Chart({dataPoints}){
  const dataPointValues = dataPoints.map(dataPoint => dataPoint.value)
  const totalMaximum = Math.max(...dataPointValues)

  return(
    <div className={styles.chart}>
      {dataPoints.map(dataPoint => <ChartBar 
      key={dataPoint.label} 
      value={dataPoint.value} 
      maxValue={totalMaximum} 
      label={dataPoint.label} 
    />)}
    </div>
  )
}
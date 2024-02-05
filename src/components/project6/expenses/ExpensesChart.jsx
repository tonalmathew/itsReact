import Chart from "../chart/Chart";

const chartDataPoint = [
  {label: 'Jan', value: 0 },
  {label: 'Feb', value: 0 },
  {label: 'Mar', value: 0 },
  {label: 'Apr', value: 0 },
  {label: 'May', value: 0 },
  {label: 'Jun', value: 0 },
  {label: 'Jul', value: 0 },
  {label: 'Aug', value: 0 },
  {label: 'Sep', value: 0 },
  {label: 'Oct', value: 0 },
  {label: 'Nov', value: 0 },
  {label: 'Dec', value: 0 },
]

export default function ExpensesChart({expenses}) {

  for(const expense of expenses){
    const expenseMonth = expense.date.split(' ')[1]
    const itemToUpdate = chartDataPoint.find(item => item.label === expenseMonth);
    if (itemToUpdate) {
      itemToUpdate.value += expense.amount;
    } else {
      console.log("Label not found.");
    }
  }

  return <Chart dataPoints={chartDataPoint}/>
}
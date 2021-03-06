import './ExpenceItem.css'
import ExpenceDate from './ExpenceDate'
import Card from '../UI/Card'
function ExpenceItems(props) {
  return (
    <Card className="expense-item">
      <ExpenceDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.ammount}</div>
      </div>
    </Card>
  )
}
export default ExpenceItems

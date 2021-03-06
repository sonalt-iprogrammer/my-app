import './ExpencesForm.css'
import React, { useState } from 'react'

const ExpencesForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  }
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()
    const ExpenceData = {
      title: enteredTitle,
      ammount: enteredAmount,
      date: new Date(enteredDate),
    }
    props.onSaveExpenceData(ExpenceData)

    //console.log(ExpenceData);
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }
  

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls ">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="1"
            max="1000"
          />
        </div>
        <div className="new-expense__actions ">
          <button type="submit">Submit</button>
          <button type='button' onClick={props.onCancelClick}>Cancel
          </button>
        </div>
      </div>
    </form>
  )
}
export default ExpencesForm;

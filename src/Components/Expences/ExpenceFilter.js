import React from 'react'
import './ExpenceFilter.css'
const ExpenceFilter = (props) => {
  const ChangeYearHandler = (event) => {
    props.onChangeDropdown(event.target.value)
  }

  return (
    <div className="ExpenceFilter">
      <div className="ExpenceFilter_dropdown">
        <label>Filter By Year</label>
        <select value={props.selected} onChange={ChangeYearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>
    </div>
  )
}

export default ExpenceFilter

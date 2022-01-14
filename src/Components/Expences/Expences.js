import Card from '../UI/Card'
import ExpenceFilter from './ExpenceFilter'
import ExpenceItems from './ExpenceItems'
import './Expences.css'
import React, { useState } from 'react'

function Expences(props) {
  const [filteredYear, setFiltered] = useState('2022')

  const ChangeDropdownHandler = (ChangeYear) => {
    //  console.log(ChangeYear);
    setFiltered(ChangeYear)
  }

  const FilteredArray = props.items.filter((expences)=>{
  
    return (expences.date.getFullYear().toString() === filteredYear);
  }
  )

  return (
    <Card className="Expences">
      <ExpenceFilter
        selected={filteredYear}
        onChangeDropdown={ChangeDropdownHandler}
      />
      
      {FilteredArray.map((expences) => (
        <ExpenceItems
          key={expences.id}
          title={expences.title}
          ammount={expences.ammount}
          date={expences.date}
        />
      ))}
    </Card>
  )
}
export default Expences

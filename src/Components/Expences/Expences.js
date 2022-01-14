import Card from '../UI/Card'
import ExpenceFilter from './ExpenceFilter'

import './Expences.css'
import React, { useState } from 'react'
import ExpencesList from './ExpencesList'

function Expences(props) {
  const [filteredYear, setFiltered] = useState('2022')

  const ChangeDropdownHandler = (ChangeYear) => {
    //  console.log(ChangeYear);
    setFiltered(ChangeYear)
  }

  const FilteredArray = props.items.filter((expences)=>{
  
    return (expences.date.getFullYear().toString() === filteredYear);
  }
  );
  

  return (
    <Card className="Expences">
      <ExpenceFilter
        selected={filteredYear}
        onChangeDropdown={ChangeDropdownHandler}
      />
      <ExpencesList data={FilteredArray}/>
     
    </Card>
  )
}
export default Expences

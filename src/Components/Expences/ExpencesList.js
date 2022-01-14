 import React from "react";
  import ExpenceItems from "./ExpenceItems";
  import './ExpencesList.css'
 
 const ExpencesList=(props) =>{

    if(props.data.length=== 0){
        return(
        <h2 className="expenses-list__style">
            No Expenses Found 
        </h2>)

    }
    return(
        props.data.map((expences) => (
            <ExpenceItems
              key={expences.id}
              title={expences.title}
              ammount={expences.ammount}
              date={expences.date}
            />
          ))
    )

 }
 export default ExpencesList;
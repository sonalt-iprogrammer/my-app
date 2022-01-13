import Card from "../UI/Card";
import ExpenceFilter from "./ExpenceFilter";
import ExpenceItems from "./ExpenceItems";
import './Expences.css';
import React, {useState} from "react";


function Expences(props){

  const [filteredYear,setFiltered] = useState('2018');

  const ChangeDropdownHandler = (ChangeYear) =>{

  //  console.log(ChangeYear);
  setFiltered(ChangeYear);


  }




    const expense =[
        {
          title:"grocery", ammount:200, date: new Date(),
    
        },
        {
          title:"clothes", ammount:2000, date: new Date(),
    
        },
        {
          title:"food", ammount:800, date: new Date(),
    
        },
        {
          title:"travelling", ammount:1200, date: new Date(),
    
        }
    
        
    
      ];

    return(
        
      <Card className="Expences">
            <ExpenceFilter selected={filteredYear} onChangeDropdown={ChangeDropdownHandler}/>
            
            <ExpenceItems title={expense[0].title} ammount={expense[0].ammount} date={expense[0].date}/>
            <ExpenceItems title={expense[1].title} ammount={expense[1].ammount} date={expense[1].date}/>
            <ExpenceItems title={expense[2].title} ammount={expense[2].ammount} date={expense[2].date}/>
            <ExpenceItems title={expense[3].title} ammount={expense[3].ammount} date={expense[3].date}/>
        
      </Card>
       
    )

}
export default Expences;
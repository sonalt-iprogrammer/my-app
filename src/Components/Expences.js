import Card from "./Card";
import ExpenceItem from "./ExpenceItems";
import './Expences.css';

function Expences(){
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
            <h1>Welcome to first app</h1>
            <ExpenceItem title={expense[0].title} ammount={expense[0].ammount} date={expense[0].date}></ExpenceItem>
            <ExpenceItem title={expense[1].title} ammount={expense[1].ammount} date={expense[1].date}></ExpenceItem>
            <ExpenceItem title={expense[2].title} ammount={expense[2].ammount} date={expense[2].date}></ExpenceItem>
            <ExpenceItem title={expense[3].title} ammount={expense[3].ammount} date={expense[3].date}></ExpenceItem>
        
      </Card>
       
    )

}
export default Expences;
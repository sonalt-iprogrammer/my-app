
import './App.css';
import Newexpences from './Components/NewExpences/NewExpences';


import Expences from './Components/Expences/Expences';
function App() {
  const GetDataHandler = (FinalData) =>{

    
    console.log(FinalData);

  }




  return(
   <div>
     <Newexpences onGetData={GetDataHandler}/>
    <Expences/>
   </div>
    
  )

  
}

export default App;

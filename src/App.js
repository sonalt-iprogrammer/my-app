import './App.css'
import React, {useState} from 'react'
import Newexpences from './Components/NewExpences/NewExpences'
import Heading from './Components/UI/Heading'

import Expences from './Components/Expences/Expences'
const DUMMYS = [
  {
    id:1,
    title: 'grocery',
    ammount: 200,
    date: new Date(),
  },
  {
    id:2,
    title: 'clothes',
    ammount: 2000,
    date: new Date(),
  },
  {
    id:3,
    title: 'food',
    ammount: 800,
    date: new Date(),
  },
  {
    id:4,
    title: 'travelling',
    ammount: 1200,
    date: new Date(),
  },
]
function App() {
  const [initialExp,setNewExp]=useState(DUMMYS);
  

  const GetDataHandler = (FinalData) => {
    setNewExp((prevData)=>{
      return [FinalData, ...prevData];
    });
    console.log(FinalData);
    
  };

  return (
    <div className='main_div'>
      <Heading/>
      <Newexpences onGetData={GetDataHandler} />
      <Expences items={initialExp} />
    </div>
  )
}

export default App

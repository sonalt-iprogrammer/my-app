import React, { useState}from 'react';
import ExpencesForm from './ExpencesForm';
import './NewExpences.css';
const Newexpences = (props) => {
  const [showForm, setShowForm]=useState(false);
  const SaveExpenceDataHandler = (EnteredExpenceData) => {
    const expenceData = {
      ...EnteredExpenceData,
      id:Math.random().toString()
    }
    //console.log(expenceData);
    props.onGetData(expenceData)
  }

  const ShowForm = () =>{
    setShowForm(true);
    
  }
  const CancelClicksHandler=() =>{
    setShowForm(false);
  }
  return (
    <div className="new-expense">
     {!showForm && <button onClick={ShowForm}>Add New Expenses</button>}
     {showForm && <ExpencesForm onSaveExpenceData={SaveExpenceDataHandler}  onCancelClick ={CancelClicksHandler}/>}
    </div>
  )
}

export default Newexpences

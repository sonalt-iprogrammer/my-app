import React from "react";
import ExpencesForm from "./ExpencesForm";
import './NewExpences.css';
const Newexpences = (props) =>{
    const SaveExpenceDataHandler = (EnteredExpenceData) =>{
        const expenceData ={
            ...EnteredExpenceData
        }
        //console.log(expenceData);
        props.onGetData(expenceData);
        

    }



    return(
        <div className="new-expense">
            <ExpencesForm  onSaveExpenceData={SaveExpenceDataHandler}/>
        </div>
        
    );
};

export default Newexpences;
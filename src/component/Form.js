import React, { useState } from 'react';
import { Input } from "antd";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




const FormInput = ({ handleSubmit, name,message,setName}) => {

    const [startDate, setStartDate] = useState(new Date());

    


    return (
    
        <form onSubmit={handleSubmit} >
        <div className="form-group">
      <Input type="text" placeholder="Enter Name" value={name}
      onChange={(e) => setName(e.target.value)}
        style={{ width: "50%" }}
        autoFocus
        required
      />
     <br />
    <br/>
     {/* <textarea type="message" placeholder="Enter message" value={message}
        style={{ width: "50%" }}
        autoFocus
        required
      /> */}

      {/* <br/> */}
      {/* <DatePicker selected={startDate} onChange={(newDate) => setStartDate(newDate)} /> */}
      
      <button className="btn-primary mt-1">Add Data</button>
     
    </div>
  </form>
    );
};

export default FormInput;
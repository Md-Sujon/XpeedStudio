import React, { useEffect, useState } from 'react';
import './index.css'
import api from './api'
import {Link} from "react-router-dom";
import {EditOutlined, DeleteOutlined} from "@ant-design/icons";
import FormInput from './Form';



export const getName = async (id) => {
  const response = await api.get(`/data/${id}`)
  return response.data;
}


export const updateName = async (id, name) => {
  const response = await api.put(`/data/${id}`)
  return response.data;
}

const Index = () => {

const [name, setName] = useState("");
const [data, setData] = useState([]);
 console.log(data);

 

//Data read
 const retriveData = async () =>{
  const response = await api.get("/data");
  return response.data;
}

//Data Delete
const removeName = async (id) => {
  const response = await api.delete(`/data/${id}`)
  return response.data;
}

//Data Post
const createData = async (eventData) => {
  const response = await api.post("/data",eventData);
  return response.data;
}

//Data delete handle
const handleRemove = (id, name) => {
if(window.confirm("Are you sure to delete")){
  removeName(id).then((response) => {
      setName();       
  })
}
}

//Data post handle 
const handleSubmit =  (e) =>{
 e.preventDefault();
createData({name})
.then((response) =>{
  setName("");
})
}


//Data load
useEffect(() => {
   const getAllData = async () => {
          const allData = await retriveData();
          if(allData) setData(allData);
   };
   getAllData();
  }, [data]);


    return (
        <div className="container-fluid">


          <FormInput
           handleSubmit={handleSubmit}
           name={name}
           setName={setName}
           ></FormInput>



          <div className="row">
            
           

        <table id='Checkbox' className="mt-5">
        <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Feedback Message</th>
            <th>Submision Date</th>
            <th>Data manage</th>
            
            
        </tr>
        </thead>
        <tbody>
            {
                data.map((item) => (
                       <tr key={item.id}>
                         <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.message}</td>
                        <td>{item.created_at}</td>
                        <tr
                    onClick={() =>handleRemove(item.id, item.name)}
                    className="btn btn-sm float-right"
                    >
                      <DeleteOutlined className="text-danger"/>
                    </tr>

                    <Link to={`/update/${item.id}`}>
                    <tr
                    onClick={() =>console.log("")}
                    className="btn btn-sm float-right"
                    >
                      <EditOutlined className="text-warning"/>
                    </tr>
                    </Link>
                    </tr>
                ))
            }
        </tbody>
    </table>


           
          </div>
            
        </div>
    );
};

export default Index;
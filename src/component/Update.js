import React, { useState, useEffect } from "react";
import FormInput from "./Form";
import api from "./api"
import {updateName} from "./index";


const Update = ({ history, match }) => {
  const [name, setName] = useState("");


 const getName = async (id) => {
    const response = await api.get(`/data/${id}`, name)
    return response.data;
  }

  //Data load
  useEffect(() => {
    const getAllData = async (d) => {
           const allData = await getName(match.params.id);
           if(allData) setName(d.data.name);
    };
    getAllData();
   }, []);



//   useEffect(() => {
//     loadName();
//   },[]);

//   const loadName = () => {
//     getName(match.params.id).then((d) => setName(d.data.name));
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateName(match.params.id, { name })
      .then((res) => {
        setName("");
         history.push("/");
      })
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
         
          <FormInput
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
          />
        </div>
      </div>
    </div>
  );
};

export default Update;
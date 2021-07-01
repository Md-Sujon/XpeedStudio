import axios from 'axios';


export default axios.create({
     baseURL:"http://localhost:5000/",
});

// export const getNames = async () => {
//     return await axios.get(`${process.env.REACT_APP_API}`);
//   };
import React,{useState,useEffect} from "react";
import Axios from "axios";
import { useHistory, useParams} from "react-router-dom";

const EditUser =()=>{
    
    let history = useHistory();
    const {id} = useParams ();
    

     const [user,setUser] = useState ({
         name :"",
         username:"",
         email: "",
         phone:"",
         website:""
     });
     const { name, username, email, phone, website } = user;
     const onInputChange = e => {
       setUser({ ...user, [e.target.name]: e.target.value });
     };
   
     useEffect(() => {
       loadUser();
     }, []);
   
     const onSubmit = async e => {
       e.preventDefault();
       await Axios.put(`http://localhost:3030/users/${id}`, user);
       history.push("/");
     };
   
     const loadUser = async () => {
       const result = await Axios.get(`http://localhost:3030/users/${id}`);
       setUser(result.data);
     };
     return (
       <div className="container mt-5">
         <div className="w-50 mx-auto shadow p-5">
           <h2 className="text-center mb-2">Edit User</h2>
           <hr className="mb-3"></hr>
           <form onSubmit={e => onSubmit(e)}>
             <div className="form-group">
               <input
                 type="text"
                 className="form-control form-control-lg"
                 placeholder="Enter Your Name"
                 name="name"
                 value={name}
                 onChange={e => onInputChange(e)}
               />
             </div>
             <div className="form-group">
               <input
                 type="text"
                 className="form-control form-control-lg"
                 placeholder="Enter Your Username"
                 name="username"
                 value={username}
                 onChange={e => onInputChange(e)}
               />
             </div>
             <div className="form-group">
               <input
                 type="email"
                 className="form-control form-control-lg"
                 placeholder="Enter Your E-mail Address"
                 name="email"
                 value={email}
                 onChange={e => onInputChange(e)}
               />
             </div>
             <div className="form-group">
               <input
                 type="text"
                 className="form-control form-control-lg"
                 placeholder="Enter Your Phone Number"
                 name="phone"
                 value={phone}
                 onChange={e => onInputChange(e)}
               />
             </div>
             <div className="form-group">
               <input
                 type="text"
                 className="form-control form-control-lg"
                 placeholder="Enter Your Website Name"
                 name="website"
                 value={website}
                 onChange={e => onInputChange(e)}
               />
             </div>
             <button className="btn btn-warning btn-block">Update User</button>
           </form>
         </div>
       </div>
    );
};
export default EditUser;
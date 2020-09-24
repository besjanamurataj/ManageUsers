import React,{useState,useEffect} from "react";
 import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const User =() => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    webiste: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3030/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
     
      <h6 className="display-5">User Id: {id}</h6>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">user name: {user.username}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">phone: {user.phone}</li>
        <li className="list-group-item">website: {user.website}</li>
      </ul>
      <Link className="btn btn-primary mt-3 mr-4" to="/">
            Back
      </Link>
      <Link className="btn btn-primary mt-3" to={`/user/edit/${id}`}>
        Edit e
      </Link>
    </div>
    );
};
export default User;
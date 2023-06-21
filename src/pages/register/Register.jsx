import { Link } from "react-router-dom"
import "./register.css"
import { useState } from "react"
import axios from "axios";

export default function Register() {

  const[username,setUsername]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[error,setError]=useState(false);

  const handleSubmit=async(e) => {
    e.preventDefault();
    setError(false);
    try{
      const res=await axios.post("/auth/register" , {
        username,
        email,
        password,
      });

      res.data && window.location.replace("/login");

    }
    catch(err){
      setError(true);
    }
  };
  return (
    <div className="register">
        <span className="registertitle">Register</span>
        <form className="registerform"
          onSubmit={handleSubmit}>
        <label>Username</label>
            <input type="text" className="registerinput" 
            placeholder="Type your username here..."
            onChange={e=>setUsername(e.target.value)} 
            />
            <label>Email</label>
            <input type="email" className="registerinput"
             placeholder="Type your email here..."
             onChange={e=>setEmail(e.target.value)} 
             />
            <label>Password</label>
            <input type="password" className="registerinput" 
            placeholder="Type your password here..." 
            onChange={e=>setPassword(e.target.value)} 
            />
            <button className="registerbutton" type="submit">Register</button>
            </form>
            <button className="registerloginbutton">
            <Link className="link" to="/login">Login</Link>
            </button>
        {error && <span style={{color:"red", marginTop:"10px"}}>
          Something went wrong!!!
          </span>
          }
            
      
    </div>
  )
}
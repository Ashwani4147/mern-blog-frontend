import { Link } from "react-router-dom"
import "./login.css"
import axios from "axios";
import {useContext,useRef} from "react";
import { Context } from "../../context/Context";


export default function Login() {
  const userRef=useRef();
  const passwordRef=useRef();
  const { dispatch, isFetching }= useContext(Context);

  const handleSubmit=async (e) => {
    e.preventDefault();
    dispatch({ type:"LOGIN_START" });
   try {
    const res=await axios.post("/auth/login" ,{
      username:userRef.current.value,
      password: passwordRef.current.value,
    });
    dispatch({type:"LOGIN_SUCCESS",payload:res.data});
   }
   catch(err){
    dispatch({type:"LOGIN_FAILURE"});
   }
  };

  //console.log(user);
  return (
    <div className="login">
        <span className="logintitle">Login</span>
        <form className="loginform" onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" className="logininput"
             placeholder="Type your username here..."
             ref={userRef}
             />
            <label>Password</label>
            <input type="password" className="logininput"
             placeholder="Type your password here..."
             ref={passwordRef}
             />
            <button className="loginbutton" type="submit" disabled={ isFetching }>Login 
            </button>
            </form>
            <button className="loginregisterbutton">
            <Link className="link" to="/register">Register</Link>
              </button>

           
      
    </div>
  )
}

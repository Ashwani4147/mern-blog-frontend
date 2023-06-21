import { Link } from "react-router-dom";
import "./topbar.css"
import { useContext } from "react";
import  {Context} from "../../context/Context";

export default function Topbar() {
  const {user,dispatch}=useContext(Context);
  const PF="http://localhost:3000/images/";


  const handleLogout=()=>{
    dispatchEvent({type:"LOGOUT"});
  };
  return (
    <div className='top'>
      <div className="topleft">
        <i className=" topicon fa-brands fa-square-facebook"></i> 
        <i className=" topicon fa-brands fa-square-twitter"></i>
        <i className=" topicon fa-brands fa-square-instagram"></i>
        <i className=" topicon fa-brands fa-square-youtube"></i>
        </div>
      <div className="topcenter">
        <ul className="toplist">
        <li className="toplistitem">
          <Link className="link" to="/">HOME</Link>
          </li>
        <li className="toplistitem">
          <Link className="link" to="/">ABOUT</Link>
          </li>
        <li className="toplistitem">
        <Link className="link" to="/">CONTACT</Link>
        </li>
        <li className="toplistitem">
        <Link className="link" to="/write">WRITE</Link>
        </li>
        <li className="toplistitem" onClick={handleLogout}>
          {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topright">
        {
          user ? (
          <Link to="/settings">
          <img className="topimg"
           src={PF+user.profilePic} alt="blog icon" ></img>
           </Link>
           )
          : (
          <ul className="toplist">
            <li className="toplistitem">
            <Link className="link" to="/login">LOGIN</Link>
            </li>
             <li className="toplistitem">
          <Link className="link" to="/register">REGISTER</Link>
          </li>
         </ul>
          )
        }
        
        <i className="topsearchicon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

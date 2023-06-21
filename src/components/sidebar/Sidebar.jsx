import "./sidebar.css";
import axios from "axios";
import {useState , useEffect} from "react";
import {Link} from "react-router-dom";


export default function Sidebar() {

  const[cats,setCats]=useState([]);

  useEffect(() =>{
    const getCats=async ()=>
    {
      const res=await axios.get("/categories")
      setCats(res.data);
    };
    getCats();
  } , []);
  return (
    <div className="sidebar">
        <div className="sidebaritem">
          <span className="sidebartitle">ABOUT ME</span>
          <img className="sidebarimg" src="sideimg3.jpg" alt="siderimg"></img>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo optio iste esse laboriosam iusto commodi at labo</p>
          </div>
          <div className="sidebaritem">
            <span className="sidebartitle">CATEGORIES</span>
            <ul className="sidebarlist">
                {cats.map((c) => (
                  <Link to={`/?cat=${c.name}`} className="link">
                <li className="sidebarlistitem">{c.name}</li>
                </Link>
                ))}

            </ul>
          </div>
          <div className="sidebaritem">
            <span className="sidebartitle">FOLLOW US</span>
            <div className="sidebarsocial">
        <i className=" sidebaricon fa-brands fa-square-facebook"></i> 
        <i className=" sidebaricon fa-brands fa-square-twitter"></i>
        <i className=" sidebaricon fa-brands fa-square-instagram"></i>
        <i className=" sidebaricon fa-brands fa-square-youtube"></i>
            </div>

          </div>
      
    </div>
  ) 
}

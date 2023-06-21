import "./singlepost.css";
import axios from "axios";
import { useEffect , useState,useContext } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import {Context} from "../../context/Context";

export default function Singlepost() {

    const location=useLocation();
    const path=location.pathname.split("/")[2];
    const [post,setPost]= useState({});
    const PF="http://localhost:3000/images/" ; 
    const {user}=useContext(Context);
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const [updateMode,setUpdateMode]=useState(false);

    useEffect(()=> {
        const getPost=async ()=> {
            const res=await axios.get("/posts/"+path);
            setPost(res.data);
            setTitle(res.data.title)
            setDesc(res.data.desc)

        };
        getPost()
    }, [path]);
   
    const handleDelete=async ()=>{
        try{
            await axios.delete(`/posts/${post.id}`,
          { data: {username:user.username},
        });
            window.location.replace("/");
    }
        catch(err){

        }
    };

    const handleUpdate=async ()=>{
        try{
            await axios.put(`posts/$(post._id)`,{
                username:user.username,
                title,
                desc,
            });
            setUpdateMode(false)
        }
        catch(err){}
    };
  return (
    <div className="singlepost">
    <div className="singlepostwrapper">
        {post.photo && (
        <img className="singlepostimg" src={PF+post.photo} alt=" "></img>
       )}{
        updateMode ? (<input type="text" 
        value={title} 
        className= "singlepostitleInput"
        autoFocus
        onChange={(e)=> setTitle(e.target.value)}
        /> ):(
            <h1 className="singlepostitle"> 
            {title}
            {post.username===user?.username && (
                 <div className="singlepostedit">
                 <i className="singleposticon fa-regular fa-pen-to-square"
                  onClick={()=>setUpdateMode(true)}>
    
                 </i>
                 <i className="singleposticon fa-regular fa-trash-can"  
                   onClick={handleDelete}>
                   </i>
                 </div>
            )}
            </h1>
        )
       }
        
        <div className="singlepostinfo">
            <span className="singlepostauthor">
                Author:
                <Link to={`/?user=${post.username}`} className="link">
                <b>{post.username}</b>
                </Link>
                
            </span>
            <span className="singlepostdate">{ new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode ? (<textarea className="singlepostdescInput"
         value={desc}
         onChange={(e)=>setDesc(e.target.value)}
         />
         )
       :(
        <p className="singlepostdesc">
        {desc}
      </p>
       ) 
    }
      {updateMode && (
  <button className="singlePostButton"
  onClick={handleUpdate}>
    Update
    </button>
      )}

    </div> 
    </div>
  );
}

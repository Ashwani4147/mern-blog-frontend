import "./write.css"
import {useState, useContext} from "react";
import axios from "axios";
import { Context } from "../../context/Context";


export default function Write() {

  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const [file,setFile]=useState(null);
  const { user }=useContext(Context);
  
  const handleSubmit=async (e)=>{
    e.preventDefault();
    const newPost={
      username:user.username,
      title,
      desc,
    };
    if(file){
      const data= new FormData();
      const filename=Date.now()+filename;
      data.append("name",filename);
      data.append("file",file);
      newPost.photo=filename;

      try{
      await axios.post("/upload",data);
      }
      catch(err){
      
      }
    }
    try{
      const res=await axios.post("/posts",newPost);
      window.location.replace("/post/"+res.data._id);
    }
    catch (err){}
   
  };
  return (
    <div className="write">
      {file && (
        <img className="writeimg" src={URL.createObjectURL(file)}
         alt="writeimg"></img>

      )}
        <form className="writeform" onSubmit={handleSubmit}>
            <div className="writeformgroup">
                <label htmlFor="fileinput">
                <i className=" writeicon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileinput" style={{display:"none"}} onChange={
                  (e) =>(e.target.files[0])
                } />
                <input type="text"
                 placeholder="title"
                  className="writeinput"
                   autoFocus={true}
                   onChange={(e)=>setTitle(e.target.value)}
                   />
            </div>
            <div className="writeformgroup">
                <textarea placeholder="Tell Your Story...." 
                type="text"
                className="writeinput writetext">
                  onChange={e=>setDesc(e.target.value)}
                </textarea>
                
            </div>
            <button className="writesubmit" type="submit">Publish</button>
        </form>
      
    </div>
  );
}

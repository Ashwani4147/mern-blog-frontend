import "./post.css"
 import {Link} from "react-router-dom"

export default function Post({post}) {
  const PF="http://localhost:3000/images/" ;   //PF means public folder
  return (
    <div className="post">
      {post.photo && 
   <img className="postimg" src={PF+post.photo} alt=""></img>
      }
   <div className="postinfo">
    <div className="postcats">
        {post.categories.map((c) => (
          <span className="postCat">c.name</span>
        
        ))}
    </div>
     
     <Link to={`/post/${post._id}`} className="link">
     <span className="posttitle">
        {post.title}
    </span>
     </Link>
   
    <hr/>

    <span className="postdate">{ new Date(post.createdAt).toDateString()}</span>

   </div>
   <p className="postdesc"> {post.desc}</p>
      
    </div>
  );
}

import "./header.css"

export default function header() {
  return (
    <div className="header">
        <div className="headertitle">
        <span className="titlesmall">React and Node</span>
        <span className="titlelarge">Blogs</span>
        </div>
        <img className="headerimg" 
        src="plant.jpg" alt="blog background"></img>
      
    </div>
  )
}

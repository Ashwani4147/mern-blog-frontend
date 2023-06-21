import "./posts.css"
import Post from "../post/Post"

export default function posts() {
  return (
    <div className="posts">
       { posts.map((p) => (
        <Post post={p} />
       )) }

      
    </div>
  );
}

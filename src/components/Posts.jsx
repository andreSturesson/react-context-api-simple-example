import { useContext } from "react";
import { postContext } from "../App";
export default function Posts() {
  const { posts } = useContext(postContext);
  return (
    <>
      {posts.map((post) => {
        return (
          <div className="card">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        );
      })}
    </>
  );
}

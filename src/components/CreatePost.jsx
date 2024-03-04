import { useState, useContext } from "react";
import { postContext } from "../App";

const INITIAL_POST = {
  title: "",
  content: "",
};

export default function CreatePost() {
  const [post, setPost] = useState(
    JSON.parse(localStorage.getItem("post")) || INITIAL_POST
  );
  const { posts, setPosts } = useContext(postContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
    localStorage.setItem("post", JSON.stringify(post));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, post]);
    localStorage.clear();
    setPost(INITIAL_POST);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={post.title}
        ></input>
      </label>
      <br />
      <label>
        Content:
        <textarea
          name="content"
          onChange={handleChange}
          value={post.content}
          cols={50}
          rows={5}
        ></textarea>
      </label>
      <br />
      <input type="submit" value="Post!"></input>
    </form>
  );
}

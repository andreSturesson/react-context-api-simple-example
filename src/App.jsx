import { createContext, useState } from "react";
import CreatePost from "./components/CreatePost.jsx";
import Header from "./components/Header.jsx";
import Posts from "./components/Posts.jsx";
import "./App.css";

const APP_NAME = "Next-gen Social Media";
export const postContext = createContext();

function App() {
  const [posts, setPosts] = useState([
    { title: "Hello, world!", content: "React context is great :)" },
    { title: "But...", content: "It's a little confusing at first!" },
  ]);

  return (
    <>
      <postContext.Provider
        value={{ APP_NAME: APP_NAME, posts: posts, setPosts: setPosts }}
      >
        <Header />
        <CreatePost />
        <Posts />
      </postContext.Provider>
    </>
  );
}

export { App };

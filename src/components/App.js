import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
console.log(blogData);


  const posts = [
    { title: "Title 1", date: "April 14, 2024", preview: "Preview of article 1" },
    { title: "Title 2", date: "April 15, 2024", preview: "Preview of article 2" },
  ]

  const App = () => {
  return (
    <div className="App">
      <Header name="Your Blog Name Here"/>
      <ArticleList posts={posts} />
      <About
        image="https://via.placeholder.com/215" 
        about="Blog description." 
      />
    </div>
  );
};

export default App;

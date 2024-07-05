import React from "react";
import Blog from "../../components/blog/Blog";
import Title from "../../static/title/Title";

const BlogPage = () => {
  return (
    <section className="blog__page">
      <div className="container">
        <Title text={"Блог"} />
        <h1>Блог</h1>
      </div>
      <Blog />
      <Blog />
    </section>
  );
};

export default BlogPage;

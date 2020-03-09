import React from "react";

import BlogDetail from "../../Components/Blogs/BlogDetail";
import HeadSection from "../../Layout/HeadSection";

const Blog = props => {
  const item = props.item;

  return (
    <>
      <HeadSection />
      <div className='container'>
        <BlogDetail item={item}/>
      </div>
    </>
  );
};
export default Blog;

import React from "react";

import BlogDetail from "../../Components/Blogs/BlogDetail";
import Comment from "../../Components/Blogs/Comment";
import AddComment from "./AddComment";
import HeadSection from "../../Layout/HeadSection";
import { useParams } from "react-router-dom";

const Blog = props => {
  const item = props.item;
  let { id } = useParams();

  return (
    <>
      <HeadSection />
      <div className='container'>
        <BlogDetail item={item} id={id}/>
        <Comment blogId={id} />
        <AddComment />
      </div>
    </>
  );
};
export default Blog;

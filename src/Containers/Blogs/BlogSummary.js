import React from "react";
import {Link} from 'react-router-dom';

const BlogListing = props => {
  const item = props.item;
  return (
    <div class='row' key={props.id}>
      <div class='col-lg-8 col-md-10 mx-auto'>
        <div class='post-preview'>
          <Link to={ `/post/${item.id}` }>
            <h2 class='post-title'>{item.title}</h2>
          </Link>
          <p class='post-subtitle'>{item.body}</p>
          <p class='post-meta'>
            Posted by
            <Link to='#'>Start Bootstrap</Link>
            on September 24, 2019
          </p>
        </div>
        <hr />
      </div>
    </div>
  );
};
export default BlogListing;

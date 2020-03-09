import React from "react";
import {Link} from 'react-router-dom';

const BlogListing = props => {
  const item = props.item;
  return (
    <div className='row' key={props.id}>
      <div className='col-lg-8 col-md-10 mx-auto'>
        <div className='post-preview'>
          <Link to={ `/post/${item.id}` }>
            <h2 className='post-title'>{item.title}</h2>
          </Link>
          <p className='post-subtitle'>{item.body}</p>
          <p className='post-meta'>
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

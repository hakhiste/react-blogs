import React from "react";

const CommentSection = props => {
  const comment = props.comment;
  return (
    <div className='row' key={`c-${props.id}`}>
      <div className='col-lg-8 col-md-10 mx-auto'>
        <div className='post-preview'>
          <p className='post-subtitle'>{comment.body}</p>
          
          <p className='post-meta text-right'>
            By <i>{comment.name}</i>
          </p>
        </div>
        <hr />
      </div>
    </div>
  );
};
export default CommentSection;

import React, { Component } from "react";
import axios from "axios";
import CommentSection from "../../Containers/Blogs/CommentSection";
import Alert from "../../Util/Alert";
import Loader from "../../Util/Loader";
import { API_URL } from "../../Constants";

const initState = { loading: true, posts: {}, comments: {} };
class BlogDetail extends Component {
  constructor(props) {
    super(props);
    initState.blogLimit = props.limit ? props.limit : 5;
    this.state = initState;
  }

  componentDidMount = props => {
    this.loadBlogComments(this.props.blogId);
  };

  loadBlogComments = blogId => {
    axios
      .get(`${API_URL}posts/${blogId}/comments`)
      .then(res => {
        this.setState({
          loading: false,
          comments: res.data,
          result: res.status === 200
        });
      })
      .catch(error => this.setState({ result: false, loading: false }));
  };

  render = props => {
    return (
      <>
      <div className="row">
      <div className='col-lg-8 col-md-10 mx-auto'>
      <h4>Comments</h4>
      </div>
      </div>
        {this.state.loading ? (
          <Loader label="Loading Comments..."/>
        ) : !this.state.result ? (
          <Alert result='error' message='Error while loading comments...' />
        ) : Object.keys(this.state.comments).length > 0 ? (
          Object.keys(this.state.comments).map(k => {
            return <CommentSection
              comment={this.state.comments[k]}
              id={k}
              key={k}
            />;
          })
        ) : (
          "No comments found..."
        )}
      </>
    );
  };
}

export default BlogDetail;

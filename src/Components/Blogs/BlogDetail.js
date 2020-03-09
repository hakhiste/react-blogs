import React, { Component } from "react";
import axios from "axios";
import BlogSummary from "../../Containers/Blogs/BlogSummary";
import Alert from "../../Util/Alert";
import Loader from "../../Util/Loader";
import { API_URL } from "../../Constants";

const initState = { loading: true, posts: {} };
class BlogDetail extends Component {
  constructor(props) {
    super(props);
    initState.blogLimit = props.limit ? props.limit : 5;
    this.state = initState;
  }
  
  componentDidMount = (props) => {
    this.loadBlogs(this.props.id);
  };

  loadBlogs = (id) => {
    axios
      .get(`${API_URL}posts/${id}`)
      .then(res => {
        this.setState({
          loading: false,
          posts: res.data,
          result: res.status === 200
        });
      })
      .catch(error => this.setState({ result: false, loading: false }));
  };

  render = () => {
    return (
      <>
        {this.state.loading ? (
          <Loader />
        ) : !this.state.result ? (
          <Alert result='error' message='Error while loading blogs...' />
        ) : Object.keys(this.state.posts).length > 0 ? (
          <BlogSummary item={this.state.posts} id='1' />
        ) : (
          "No post found..."
        )}
      </>
    );
  };
}

export default BlogDetail;

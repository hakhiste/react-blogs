import React, { Component } from "react";
import axios from "axios";
import BlogSummary from "../../Containers/Blogs/BlogSummary";
import Alert from "../../Util/Alert";

const initState = { loading: true, posts: {} };
class BlogDetail extends Component {
  constructor(props) {
    super(props);
    initState.blogLimit = props.limit ? props.limit : 5;
    this.state = initState;
  }

  componentDidMount = () => {
    this.loadBlogs();
  };

  loadBlogs = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
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
          "loading..."
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

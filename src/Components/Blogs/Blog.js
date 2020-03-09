import React, { Component } from "react";
import axios from "axios";
import BlogSummary from "../../Containers/Blogs/BlogSummary";
import Alert from "../../Util/Alert";
import {Link} from 'react-router-dom';

const initState = { loading: true, posts: {} };
class Blog extends Component {
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
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        console.log(res);
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
          <Alert result="error" message='Error while loading blogs...' />
        ) : Object.keys(this.state.posts).length > 0 ? (
          Object.keys(this.state.posts.slice(0, this.state.blogLimit)).map(
            k => {
              return <BlogSummary item={this.state.posts[k]} id={k}/>;
            }
          )
        ) : (
          "No post found..."
        )}

        {Object.keys(this.state.posts).length > 0 && (
          <div class='clearfix'>
            <Link to="/" class='btn btn-primary float-right' >
              Older Posts →
            </Link>
          </div>
        )}
      </>
    );
  };
}

export default Blog;

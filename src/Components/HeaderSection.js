import React, { Component } from "react";

class HeaderSection extends Component {
  componentWillMount(props) {
    //const [siteHeadingStyle, setSiteHeadingStyle] = useState({});
    this.state = {
      siteHeadingStyle: {},
      backgroundStyle: {
        backgroundImage: this.props.Background
          ? `url(${this.props.Background})`
          : ""
      }
    };

    if (!this.props.heading) {
      this.setState = {
        siteHeadingStyle: { padding: 30 },
        backgroundStyle: {}
      };
    }
  }

  render = props => {
    return (
      <header className='masthead' style={this.state.backgroundStyle}>
        <div className='overlay'></div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-10 mx-auto'>
              <div className='site-heading' style={this.state.siteHeadingStyle}>
                {this.props.heading && <h1>{this.props.heading}</h1>}
                {this.props.subheading && (
                  <span className='subheading'>{this.props.subheading}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  };
}

export default HeaderSection;

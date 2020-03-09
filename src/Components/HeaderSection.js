import React, { Component } from "react";

class HeaderSection extends Component {
  render = props => {
    const style = {
      siteHeadingStyle: {},
      background: {
        backgroundImage: this.props.Background
          ? `url(${this.props.Background})`
          : ""
      }
    };

    if (this.props.heading === undefined) {
      style.siteHeadingStyle = { padding: 30 };
      style.background = {};
    }

    return (
      <header className='masthead' style={style.background}>
        <div className='overlay'></div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-10 mx-auto'>
              <div className='site-heading' style={style.siteHeadingStyle}>
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

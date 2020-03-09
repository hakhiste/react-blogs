import React from "react";

import HeadSection from "../../Layout/HeadSection";
import Background from "../../Layout/assets/img/home-bg.jpg";
import Blog from "../../Components/Blogs/Blog";

const Listing = () => {
  return (
    <>
      <HeadSection
        heading='Home'
        subheading='A Blog Theme by Start Bootstrap'
        background={Background}
      />
      <div class='container'>
        <Blog limit='6' />
      </div>
    </>
  );
};
export default Listing;

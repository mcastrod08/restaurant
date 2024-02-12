import React from 'react'
import images from '../../constants/images'
import './Chef.css'
import SubHeading from '../../components/SubHeading/SubHeading'

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} className="app__chef-img" alt="chef-image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word"/>
      <h1 className="headtext__cormorant">What we believe in</h1>
      <div className="app__chef_content">
        <div className="app__chef_content-quote">
          <img src={images.quote} alt="quote-image"/> 
          <p className="p__opensans">Lorem ipsum dolor sit amet</p>
        </div>
        <p className="p__opensans">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className="app__chef-sign">
        <p>Chef's Name</p>
        <p className="p__opensans p_chef">Chef & Founder</p>
        <img src={images.sign} alt="chef's sign"/>
      </div>
    </div>
  </div>
)

export default Chef

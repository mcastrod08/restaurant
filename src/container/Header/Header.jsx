import React from 'react'
import './Header.css'
import images from '../../constants/images'
import SubHeading from '../../components/SubHeading/SubHeading';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="Home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour"/>
      <h1 className="app__header-h1">The Key to Dining</h1>
      <p className="p__opensans" style={{ marginBottom: '2rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      <button type="button" className="custom__button">Explore More</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome}className="app__header-img" alt="header-image" />
    </div>
  </div>
  
)

export default Header;
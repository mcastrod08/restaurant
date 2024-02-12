import React from 'react'
import images from '../../constants/images'
import SubHeading from '../../components/SubHeading/SubHeading';

const FindUs = () => {
  return (
  <div className="app__wrapper app__bg section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact"/>
      <h1 className="headtext__cormorant" style={{ marginBottom: '2rem'}}>Find Us</h1>
      <p className="p__opensans">Direction: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      <p className="p__cormorant" style={{color: '#DCCA87', margin: "2rem 0"}}>Opening Hours</p>
      <p className="p__opensans">Mon - Fri: 10:00am - 02:00am</p>
      <p className="p__opensans" style={{margin: "0 0 2rem 0"}}>Sat - Sun: 10:00am - 03:00am</p>
      <button type="button" className="custom__button">Explore More</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus}className="app__findus-img" alt="findus-image" />
    </div>
  </div>
  )
}

export default FindUs
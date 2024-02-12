import React from 'react'
import { FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi'
import './Footer.css'
import SubHeading from '../../components/SubHeading/SubHeading';
import images from '../../constants/images';

const Footer = () => {
  return (
    <div className="app__bg section__padding">
      <div className="app__footer">
        <div className="app__newsletter">
          <div className="app__newsletter-heading">
            <SubHeading title="Newsletter for you!"/>
            <h1 className="headtext__cormorant">Subscribe Now</h1>
            <p className="p__opensans">And never miss the latests updates!</p>
          </div>
          <div className="app__newsletter-input flex__center">
            <input type="email" placeholder="Enter your Email"/>
            <button className="custom__button"> Subscribe</button>
          </div>
        </div>
      </div>  
      <div className="app__footer_links flex__center">
        <div className="app__footer_links-contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">Direction:</p>
          <p className="p__opensans">0245-xxx-xx-xx</p>
          <p className="p__opensans">0245-xxx-xx-xx</p>
        </div>
        <div className="app__footer_links-logo">
          <img src={images.gericht} alt="footer-logo"/>
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur.</p>
          <img src={images.spoon} alt="footer-spon"/>
          <div className="app__footer_links-icons">
            <FiFacebook/>
            <FiTwitter/>
            <FiInstagram/>
          </div>
        </div>
        <div className="app__footer_links-work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday to Friday</p>
          <p className="p__opensans">08:00am - 12:00am</p>
          <p className="p__opensans" style={{marginTop:4}}>Saturday-Sunday</p>
          <p className="p__opensans">07:00am - 11:00pm</p>
        </div>
      </div>
      <div className="app__footer_links-copyright">
        <p className="p__opensans">2024 All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
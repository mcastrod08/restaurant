import React from 'react'
import images from '../../constants/images'
import SubHeading from '../../components/SubHeading/SubHeading';
import { data } from '../../constants';
import AwardCard from './AwardCard';
import './Laurels.css'

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards and recognition"/>
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title}/>)}
      </div>

    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels"/>
    </div>
  </div>
)

export default Laurels
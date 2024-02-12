import React from 'react'
import './Laurels.css'

const AwardCard = ({award}) => {
  return (
  <div className="app__laurels_awards-card">
    <img src={award.imgUrl} alt="awards"/>
    <div className="app__laurel_awards-card_content">
      <p className="p__cormorant" style={{color:'#DCCA87'}}>{award.title}</p>
      <p className="p__opensans">{award.subtitle}</p>
    </div>
  </div>
  )
}

export default AwardCard
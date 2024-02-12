import React from 'react'
import images from '../../constants/images'
import SubHeading from '../../components/SubHeading/SubHeading';
import { BsInstagram, BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

import './Gallery.css'

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery app__wrapper section__padding" id="gallery">
      <div className="app__gallery-content app__wrapper_info">
        <SubHeading title="Instagram"/>
        <h1 className="headtext__cormorant">Photo Gallery</h1>  
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button type="button" className="custom__button">Know More</button>   
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows" >
          <BsArrowLeftCircle className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightCircle className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  )
}

export default Gallery
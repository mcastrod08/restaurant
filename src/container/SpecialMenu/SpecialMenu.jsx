import React from 'react'
import images from '../../constants/images'
import SubHeading from '../../components/SubHeading/SubHeading';
import MenuItem from '../../components/MenuItem/MenuItem';
import './SpecialMenu.css'
import { data } from '../../constants';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu for you"/>
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_leftSection">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu-menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tag={wine.tags}/>
          ))}
        
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="Menu img"/>
      </div>

      <div className="app__specialMenu-menu_rigthSection">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu-menu_items">
          {data.cocktails.map((cocktails, index) => (
            <MenuItem key={cocktails.title + index} title={cocktails.title} price={cocktails.price} tag={cocktails.tags}/>
          ))}
        </div>
      </div>

    </div>

    <div>
      <button className="custom__button">
      adsadsad
      </button>
    </div>

  </div>

);

export default SpecialMenu
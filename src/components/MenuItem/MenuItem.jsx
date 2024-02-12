import React from 'react'
import './MenuItem.css'

const MenuItem = ({title, price, tag}) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-head_name">
        <p className="p__cormorant">{title}</p>
      </div>

      <div className="app__menuitem-dash"/>

      <div className="app__menuitem-head_price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    <div className="app__menuitem-subs">
      <p className="p__opensans">{tag}</p>
    </div>
  </div>
)
export default MenuItem
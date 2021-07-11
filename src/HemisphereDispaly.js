import React from 'react';
import './Hemisphere.css';
import northenPic from './image/NorthernHemisphere.jpg';
import southernPic from './image/SouthernHemisphere.jpg';

const hemisphereConfig = {
  Northern: {
    text: 'it is northen hemisphere',
    picture: northenPic
  },
  Southern: {
    text: 'it is southern hemisphere',
    picture: southernPic
  }
}

const HemsiphereDisplay = ({ latitude }) => {
  const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
  const { text, picture } = hemisphereConfig[hemisphere]
  return (
    <div className={hemisphere}>
      <div className='ui raised text container segment'>
        <div className='image'>
          <img src={picture} alt="hemi" />
        </div>
        <div className='ui teal bottom attached label'>
          {text}
        </div>
      </div>
    </div>
  );
}

export default HemsiphereDisplay;
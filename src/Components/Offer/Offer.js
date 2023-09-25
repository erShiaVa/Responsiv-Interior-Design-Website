import React from 'react';
import './offer.scss';
import '../../Styles/base.scss';
import { assets } from '../../assets';

function Offer() {
  return (
    <div className='offer container'>

      <div className="offer__card">
        <img src={assets.bathroom_img} alt="#" />
        <div className="offer_text">
          <h2 className="heading__two">
            Bathroom Design
          </h2>
          <p className="paragraph">
            Forem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
            per inceptos himenaeos.
          </p>
        </div>
      </div>

      <div className="offer__card">
        <img src={assets.kitchen_img} alt="#" />
        <div className="offer_text">
          <h2 className="heading__two">
            Kitchen Design
          </h2>
          <p className="paragraph">
            Forem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
            per inceptos himenaeos.
          </p>
        </div>
      </div>

      <div className="offer__card">
        <img src={assets.interior_img} alt="#" />
        <div className="offer_text">
          <h2 className="heading__two">
            Interior Design
          </h2>
          <p className="paragraph">
            Forem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
            per inceptos himenaeos.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Offer
import React from 'react';
import './design.scss';
import { assets } from '../../assets';

function Design() {
  return (
    <div className='container'>
        <div className="design">
            <div className="design__content">
                <p className="description">what makes us different</p>
                <h1 className="heading__one">Design Approach & Philosophy</h1>
                <p className="paragraph">
                    Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit 
                    interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per 
                    conubia nostra, per inceptos himenaeos. Forem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="paragraph">
                    Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu 
                    ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
                <p className="paragraph">
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                    Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, 
                    ac aliquet odio mattis. 
                </p>
                <div className="design__button">
                    <button className="button-primary">read more</button>
                </div>
            </div>
            <div className="design__img">
                <img src={assets.vertical_img} alt="#" />
            </div>
        </div>
    </div>
  )
}

export default Design
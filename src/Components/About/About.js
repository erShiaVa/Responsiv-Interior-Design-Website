import React from 'react';
import './about.scss';
import '../../Styles/base.scss';
import { assets } from '../../assets';

function About() {
  return (
    <div className='about container'>
        <div className="about__img">
            <img src={assets.about_img} alt="#" />
        </div>
        <div className="about__text">
            <h1 className="heading__one">About</h1>
            <p className="paragraph">
                Forem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. 
                Ut commodo efficitur neque. Forem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
            </p>
            <p className="paragraph">
                Forem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
        </div>
    </div>
  )
}

export default About
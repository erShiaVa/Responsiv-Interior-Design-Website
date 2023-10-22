import React from 'react';
import './gallery.scss';
import { assets } from '../../assets';

function Gallery() {
  return (
    <section className="gallery">
        <div className="gallery__container">
            <img src={assets.slider_three} alt="/" />
            <img src={assets.slider_one} alt="/" />
            <img src={assets.img_five} alt="/" />
            <img src={assets.img_two} alt="/" />
            <img src={assets.img_three} alt="/" />
            <img src={assets.img_one} alt="/" />
        </div>
    </section>
  )
}

export default Gallery
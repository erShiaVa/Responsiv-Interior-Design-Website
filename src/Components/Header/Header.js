import React, { useEffect, useState } from 'react';
import './header.scss';
import { assets } from '../../assets';

function Header() {
  const images = [assets.header__img, assets.slider_two, assets.slider_four];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 4000); 

    return () => {
      clearInterval(interval);
    };
  }, [currentImage, images.length]);

  return (
    <section className='header'>
        <div className="header__content">
          <div className="header__text">
            <p className="description">what makes us different</p>
            <h1 className="heading__one">Magical room design</h1>
            <p className="paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Voluptas assumenda sapiente earum odit aperiam. 
              Similique voluptas optio ad itaque impedit dolorum 
              id consequatur, officiis adipisci eius deleniti, 
              temporibus, possimus nobis. Lorem ipsum dolor sit amet.
            </p>
            <div className="header__button">
              <button className="button-primary">explore now</button>
            </div>
          </div>
        </div>
        <div className="header__img">
          <img id="slideshowImage" src={images[currentImage]} alt="/" /> 
        </div>
    </section>
  )
}

export default Header
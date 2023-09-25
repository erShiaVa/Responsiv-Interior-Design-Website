import React, { useState } from 'react';
import './slider.scss';
import { assets } from '../../assets';
import { GrNext, GrPrevious } from 'react-icons/gr';

function Slider() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        assets.slider_two,
        assets.slider_one,
        assets.slider_three,
        assets.slider_four,
    ];

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

  return (
    <div className='slider__image'>
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
        <div className="slide__button">
             <GrPrevious size={20} onClick={previousImage}/>
             <GrNext size={20} onClick={nextImage}/>
        </div>
    </div>
  )
}

export default Slider
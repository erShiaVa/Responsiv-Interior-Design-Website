import React from 'react';
import './reviews.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { dataCustomer } from '../../data';

function Reviews() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 567,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <section className="reviews">
        <div className="review__heading">
        <p className="description">Discover what our customers have to say about our design artistry and service</p>
            <h2 className="heading__two">Our Customers, Our Ambassadors</h2>
        </div>
        <Slider {...settings}>
        {dataCustomer.map((item) => (
            <div className="review__card">
                <div className="card-top">
                    <img src={item.image} alt={item.name} />
                    <p className="review__text">{item.review}</p>
                </div>
                <div className="card-bottom">
                    <p className='review__customer'>{item.name}</p>
                    <p className='review__customer'>{item.date}</p>
                </div>
             </div>
            ))}
        </Slider>
    </section>
  )
}

export default Reviews
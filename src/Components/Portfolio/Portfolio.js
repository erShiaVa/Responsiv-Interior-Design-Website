import React from 'react';
import './portfolio.scss';

function Portfolio() {
  return (
    <>
      <div className="portfolio">
          <div className="portfolio__content">
            <div className="portfolio__text">
              <p className="description">what makes us different</p>
              <h2 className="heading__two small-break">Design & Philosophy</h2>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Minus qui possimus voluptates ducimus distinctio, dolorem, 
                omnis molestiae expedita explicabo fuga facilis sequi, 
                maiores porro quaerat architecto harum error assumenda 
                repudiandae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Magni, doloremque!
              </p>
            </div>
          </div>
          <div className="portfolio__img"></div>
      </div>

      <div className="portfolio">
      <div className="portfolio__img port-two"></div>
          <div className="portfolio__content content-two">
            <div className="portfolio__text">
              <p className="description">what makes us different</p>
              <h2 className="heading__two small-break">Design & Philosophy</h2>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Minus qui possimus voluptates ducimus distinctio, dolorem, 
                omnis molestiae expedita explicabo fuga facilis sequi, 
                maiores porro quaerat architecto harum error assumenda 
                repudiandae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Magni, doloremque!
              </p>
            </div>
          </div>
      </div>

      <div className="portfolio">
          <div className="portfolio__content">
            <div className="portfolio__text">
              <p className="description">what makes us different</p>
              <h2 className="heading__two small-break">Design & Philosophy</h2>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Minus qui possimus voluptates ducimus distinctio, dolorem, 
                omnis molestiae expedita explicabo fuga facilis sequi, 
                maiores porro quaerat architecto harum error assumenda 
                repudiandae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Magni, doloremque!
              </p>
            </div>
          </div>
          <div className="portfolio__img port-three"></div>
      </div>

      
      </>
  )
}

export default Portfolio
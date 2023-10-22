import React from 'react';
import './process.scss';
import { assets } from '../../assets';

function Process() {
  return (
    <section className="process">
        <div className="process__img">
            <img src={assets.check_img} alt="/" />
        </div>
        <div className="process__content">
            <p className="description">what makes us different</p>
            <h3 className="heading__three">The Design Process: Your Vision, Our Expertise</h3>
            <div className="process__checks">

                <div className="process__check">
                    <div className="process__check-img">
                        <img src={assets.check_mark} alt="/" />
                    </div>
                    <div className="process__check-text">
                        <p className="big-paragraph">your vision</p>
                        <p className="paragraph">During your free initial consultation, you'll share your vision, budget and preferences.</p>
                    </div>
                </div>

                <div className="process__check">
                    <div className="process__check-img">
                        <img src={assets.check_mark} alt="/" />
                    </div>
                    <div className="process__check-text">
                        <p className="big-paragraph">Our expertise</p>
                        <p className="paragraph">During your free initial consultation, you'll share your vision, budget and preferences</p>
                    </div>
                </div>

                <div className="process__check">
                    <div className="process__check-img">
                        <img src={assets.check_mark} alt="/" />
                    </div>
                    <div className="process__check-text">
                        <p className="big-paragraph">Realization</p>
                        <p className="paragraph">After your approval, we implement the design to transform your home with all your wishes</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Process
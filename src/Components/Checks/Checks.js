import React from 'react';
import { assets } from '../../assets';
import './checks.scss';

function Checks() {
  return (
    <div className='container'>
        <div className="checks">
            <div className="checks__img">
                <img src={assets.check_img} alt="#" width="600px" />
            </div>
            <div className="checks__content">
                <div className="checks__text">
                    <h1 className="heading__one">Design Approach</h1>
                    <p className="paragraph break">
                        Forem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                        per inceptos himenaeos. Forem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc vulputate libero et velit interdum. Forem ipsum dolor sit amet, 
                        consectetur adipiscing elit. 
                    </p>
                    <div className="checks__point">
                        <img src={assets.check_mark} alt="#" width="30px" />
                        <p className="paragraph">
                            Forem ipsum dolor sit amet, consectetur adipiscing elit et velit interdum
                        </p>
                    </div>

                    <div className="checks__point">
                        <img src={assets.check_mark} alt="#" width="30px" />
                        <p className="paragraph">
                            Forem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit
                        </p>
                    </div>

                    <div className="checks__point">
                        <img src={assets.check_mark} alt="#" width="30px" />
                        <p className="paragraph">
                            Forem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>

                    <div className="checks__point">
                        <img src={assets.check_mark} alt="#" width="30px" />
                        <p className="paragraph">
                            Forem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checks
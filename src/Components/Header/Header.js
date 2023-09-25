import React from 'react';
import './header.scss';
import '../../Styles/base.scss';

function Header() {
  return (
    <div className='header'>
      <div className="header__block">
        <h1 className="heading__one--light">Interior Design</h1>
        <p className='paragraph--light'>
          Forem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
          Class aptent taciti sociosqu ad litora torquent per conubia nostra.
        </p>
        <button className="button-primary">see more</button>
      </div>
      <div className="header__block-mobil">
        <h1 className="heading__one--light">Interior Design</h1>
          <p className='paragraph--light'>
            Forem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
            Class aptent taciti sociosqu ad litora torquent per conubia nostra.
          </p>
          <button className="button-primary">see more</button>
      </div>
    </div>
  )
}

export default Header
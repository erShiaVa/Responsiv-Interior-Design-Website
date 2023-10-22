import React from 'react';
import './footer.scss';
import { FaPinterestSquare } from 'react-icons/fa';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container">
            <div className="footer__top">
                <div className="footer__box">
                    <p className="footer__title">Support</p>
                    <li className='footer__item'>Lorem ipsum</li>
                    <li className='footer__item'>consetetur</li>
                    <li className='footer__item'>aliquyam</li>
                    <li className='footer__item'>accusam</li>
                </div>
                <div className="footer__box">
                    <p className="footer__title">Legal</p>
                    <li className='footer__item'>consetetur</li>
                    <li className='footer__item'>aliquyam</li>
                    <li className='footer__item'>Lorem ipsum</li>
                    <li className='footer__item'>accusam</li>
                </div>
                <div className="footer__box">
                    <p className="footer__title">privacy</p>
                    <li className='footer__item'>Lorem ipsum</li>
                    <li className='footer__item'>consetetur</li>
                    <li className='footer__item'>aliquyam</li>
                    <li className='footer__item'>accusam</li>
                </div>
                <div className="footer__box">
                    <p className="footer__title">about</p>
                    <li className='footer__item'>Lorem ipsum</li>
                    <li className='footer__item'>consetetur</li>
                    <li className='footer__item'>aliquyam</li>
                    <li className='footer__item'>accusam</li>
                </div>
            </div>
            <hr/>
            <div className="footer__bottom">
                <p className="footer__last">copyright 2023</p>
                <div className="social__icons">
                    <AiFillInstagram size={24}/>
                    <AiFillFacebook size={24}/>
                    <FaPinterestSquare size={22}/>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
import React from 'react';
import './textscroll.scss';
import Marquee from 'react-fast-marquee';

function TextScroll() {
    const text = "A space should never tell a story, it should enable stories.";
    const textOne = "Design is not a thing that exists only in things. Design is in the way we experience things";

  return (
    <section className='marquee'>
        <Marquee
                gradient={false}
                speed={60}
            >
            <p style={{
                fontFamily: 'Raleway',
                fontSize: '1.05rem',
                fontWeight: '600',
                color: '#1C2035',
                textTransform: 'uppercase',
                paddingRight: '3.65rem',
                paddingLeft: '3.65rem',
                letterSpacing: '1.5px'
            }}>
            {text}
            </p>
            <p style={{
                fontFamily: 'Raleway',
                fontSize: '1.05rem',
                fontWeight: '600',
                color: '#1C2035',
                textTransform: 'uppercase',
                paddingRight: '3.65rem',
                paddingLeft: '3.65rem',
                letterSpacing: '1.5px'
            }}>
            {textOne}
            </p>
        </Marquee>
    </section>
    );
    }

export default TextScroll
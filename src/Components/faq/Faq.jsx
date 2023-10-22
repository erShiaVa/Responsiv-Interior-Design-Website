import React, { useState } from 'react';
import './faq.scss';

function Faq() {
    const faqData = [
        {
            question: 'How does the non-binding initial consultation work?',
            answer: 'The no-obligation initial consultation is our opportunity to get to know you and your design needs. During this meeting, we will discuss your vision, budget, and timeline for your project. It is free of charge to you and does not commit you to anything. This conversation is to ensure we fully understand your project before moving forward together.'
        },
        {
            question: 'How is the pricing for design projects done?',
            answer: 'Our pricing is based on several factors, including project scope, material cost, and design complexity. We will provide customized quotes that meet your needs. During the initial no-obligation consultation, we will discuss the details and provide you with a transparent cost breakdown.'
        },
        {
            question: 'What types of design styles do you support?',
            answer: 'We are versatile and adapt our designs to your individual preferences. Our designers are experienced in a wide range of styles, from modern and minimalist to classic and vintage. We work closely with you to ensure your home reflects your personal style.'
        },
        {
            question: 'Do you also offer virtual design consulting?',
            answer: 'Yes, we also offer virtual design consultations. If you are outside of our location area or prefer to access our services from anywhere, we can provide virtual consultations. This allows us to effectively and conveniently implement your project, regardless of your location.'
        },
        {
            question: 'What information should I have ready for the first interview?',
            answer: 'For our initial conversation, it is helpful if you can share basic information about your project. This includes the size of the room, your budget, your preferred style or color scheme, and any special requirements or requests you have. The more details you provide, the better we can understand your design project and develop customized recommendations for you. Dont worry, were here to help you flesh out your vision and make the process as smooth as possible.'
        },
    ];
    const [activeIndex, setActiveIndex] = useState(null);
    const handleAccordionClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

  return (
    <section className="faq">
        <div className="faq__heading">
            <h1 className="title">faq</h1>
            <p className="big-paragraph">first important points for you</p>
        </div>
        <div className="faq__container">
            {faqData.map((faq, index) => (
                <div className=
                    {`faq-item ${
                        activeIndex === index 
                        ? 'active' 
                        : ''}
                    `} 
                    key={index}>
                    <div className="faq-question" 
                        onClick={() => handleAccordionClick(index)}>
                        {faq.question}
                    </div>
                    {activeIndex === index && (
                        <div className="faq-answer">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    </section>
  )
}

export default Faq
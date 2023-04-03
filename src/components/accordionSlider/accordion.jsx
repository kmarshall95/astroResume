import React, { useEffect, useRef } from 'react';
import './accordion.css';

const accordion = () => {
  const accordionRef = useRef();

  useEffect(() => {
    const accordionHeaders = accordionRef.current.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const toggleIcon = header.querySelector('.accordion-toggle');

        content.style.maxHeight = content.style.maxHeight ? null : `${content.scrollHeight}px`;
        toggleIcon.classList.toggle('open');
      });
    });
  }, []);

  return (
    <div className="accordion" ref={accordionRef}>
      <div className="accordion-header">
        <h3 className="accordion-title">Accordion 1</h3>
        <div className="accordion-toggle"></div>
      </div>
      <div className="accordion-content" style={{ maxHeight: 0 }}>
        <p>Accordion 1 content goes here...</p>
      </div>
      <div className="accordion-header">
        <h3 className="accordion-title">Accordion 2</h3>
        <div className="accordion-toggle"></div>
      </div>
      <div className="accordion-content" style={{ maxHeight: 0 }}>
        <p>Accordion 2 content goes here...</p>
      </div>
    </div>
  );
};

export default accordion;

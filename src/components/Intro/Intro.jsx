import React, { useState, useEffect } from 'react'
import './Intro.css'
import img from '/src/me2.jpg'
import { Element } from 'react-scroll';

const Intro = () => {
  const roles = ['Software Developer', 'Python Developer',  'Backend Developer', 'Full Stack Developer'];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    let timer;

    if (!isDeleting) {
      if (displayText.length < role.length) {
        timer = setTimeout(() => {
          setDisplayText(role.substring(0, displayText.length + 1));
        }, 80);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section name='home' className="intro">
     <div className="introcontent">
         <span className="hello fadeInUp">Hello,</span>
         <span className="introtext fadeInUp">I'm <span className="introname">Ananga Rekha B</span></span>
         <div className="rolesContainer fadeInUp">
           <span className="roleName">
             <span className="dynamicRole">{displayText}</span>
             <span className="cursor">|</span>
           </span>
         </div>
         <p className="intropara fadeInUp">Learning by building, improving by refactoring.</p>
     </div>
     
     <img src={img} alt="My pic" className="myimg scaleInRight" />
    </section>
  )
}

export default Intro
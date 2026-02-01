import React, { useEffect } from 'react'
import  './Achieve.css'
import { Element } from 'react-scroll';
import AOS from 'aos'

const Achieve = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section name="achievements" className="achievebox" data-aos="fade-up" data-aos-duration="800">
        <h2 className="achievetitle" data-aos="fade-down">Achievements</h2>
        
        <ol className="achievelist" data-aos="fade-up" data-aos-delay="200">
            <li data-aos="slide-right" data-aos-delay="250">Won 2nd prize in <strong>'Code-6-Craze'</strong> Hackathon</li>
            <li data-aos="slide-right" data-aos-delay="300">Completed certification in <strong>Google Cloud Generative AI</strong></li>
            <li data-aos="slide-right" data-aos-delay="350">Certified in <strong>AWS Cloud Fundamentals</strong></li>
            <li data-aos="slide-right" data-aos-delay="400">Completed <strong>AWS Machine Learning</strong> Certificate</li>
            <li data-aos="slide-right" data-aos-delay="450">Participated in <strong>Advaya</strong> Technical Events</li>
            <li data-aos="slide-right" data-aos-delay="500">Participated in <strong>Virtuovation </strong>  Hackathon</li>
         </ol>
    </section>
  )
}

export default Achieve
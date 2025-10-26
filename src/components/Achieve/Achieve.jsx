import React from 'react'
import  './Achieve.css'
import { Element } from 'react-scroll';

const Achieve = () => {
  return (
    <section   name="achievements" className="achievebox">
        <h2 className="achievetitle">Achievements</h2>
        
        <ol className="achievelist">
            <li>Won 2nd prize in <strong>'Code-6-Craze'</strong> Hackathon</li>
            <li>Completed certification in <strong>Google Cloud Generative AI</strong></li>
            <li>Certified in <strong>AWS Cloud Fundamentals</strong></li>
            <li>Completed <strong>AWS Machine Learning</strong> Certificate</li>
            <li>Participated in <strong>Advaya</strong> Technical Events</li>
            <li>Participated in <strong>Virtuovation </strong>  Hackathon</li>
         </ol>
    </section>
  )
}

export default Achieve
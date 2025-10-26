import React from 'react'
import './Intro.css'
import img from '/src/me2.jpg'
import { Element } from 'react-scroll';

const Intro = () => {
  return (
    <section name='home' className="intro">
     <div className="introcontent">
         <span className="hello">Hello,</span>
         <span className="introtext">I'm <span className="introname">Ananga Rekha</span></span>
         <p className="intropara">An aspiring software developer and engineering student.</p>
     </div>
     
     <img src={img} alt="My pic" className="myimg" />
    </section>
  )
}

export default Intro
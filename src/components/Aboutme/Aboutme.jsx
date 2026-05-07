import React, { useEffect } from 'react'
import './Aboutme.css'
import { Element } from 'react-scroll';
import AOS from 'aos'

const Aboutme = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section
  name="about"
  className="skills"
  data-aos="fade-up"
  data-aos-duration="800"
>
  <h1 className="title" data-aos="fade-down">
    About Me
  </h1>

  <p className="mypara" data-aos="fade-up" data-aos-delay="200">
I'm someone who genuinely wants to understand how things work — not just that something works, but why it works, what breaks it, and what's happening under the hood. That curiosity naturally pulled me toward backend systems and AI.
    <br />
    <br />
    I enjoy designing how data moves, how services communicate, and how systems behave under failure or scale. Most of my projects started with a simple question: “How would I actually build this properly?” and evolved into real systems with real architectural tradeoff
    <br />
    Right now, I'm especially drawn to the intersection of backend engineering and AI — building pipelines that are reliable, grounded, and thoughtfully designed.
  </p>
</section>

  )
}

export default Aboutme
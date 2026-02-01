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
    A Computer Science and Engineering undergraduate focused on Python-based
    development and cloud technologies. I enjoy building applications that help
    me understand backend systems, APIs, and automation workflows, while
    strengthening my foundations in modern software development.
    <br />
    <br />
    With a strong grounding in core computer science fundamentals, I’m gradually
    exploring areas such as distributed systems, DevOps practices, and
    data-driven applications. Outside of technology, I’m naturally curious and
    motivated by continuous learning, with an interest in collaborating with
    others and building things with real-world relevance.
  </p>
</section>

  )
}

export default Aboutme
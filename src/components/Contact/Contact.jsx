import React, { useEffect } from 'react'
import './Contact.css'
import AOS from 'aos'

const Contact = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section name="contact" id="contact" className="contactSection" data-aos="fade-up" data-aos-duration="800">
  <hr className="line" />

  <h2 className="contactTitle">Contact Me</h2>

  <div className="contactDetails">
    <p><strong>✉️ Email:</strong> <a href="mailto:anangarekhaa@gmail.com">anangarekhaa@gmail.com</a></p>
    <p><strong>🔗 LinkedIn:</strong> <a href="https://www.linkedin.com/in/ananga-rekha-3997b5357/" target="_blank" rel="noopener noreferrer">
  Visit My LinkedIn
</a>
</p>
<p><strong>🔗 GitHub:</strong> <a href="https://github.com/Anangarekhaa" target="_blank" rel="noopener noreferrer">
   My GitHub
</a>
</p>
  </div>
</section>
  )
}

export default Contact
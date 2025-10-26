import React from 'react'
import './Contact.css'
import { Element } from 'react-scroll';

const Contact = () => {
  return (
    <section id="contact" className="contactSection">
  <hr className="line" />

  <h2 className="contactTitle">Contact Me</h2>

  <div className="contactDetails">
    <p><strong>📞 Phone:</strong> +91-9538433443</p>
    <p><strong>✉️ Email:</strong> anangarekhaa@gmail.com</p>
    <p><strong>🔗 LinkedIn:</strong> <a href="https://www.linkedin.com/in/ananga-rekha-3997b5357/" target="_blank" rel="noopener noreferrer">
  Visit My LinkedIn
</a>
</p>
<p><strong>🔗 GitHub:</strong> <a href="https://github.com/Anangarekhaa" target="_blank" rel="noopener noreferrer">
  My Github 
</a>
</p>
  </div>
</section>
  )
}

export default Contact
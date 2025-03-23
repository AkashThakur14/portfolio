export const Contact = () => {
  return (
    <div className="contact-container">
      {/* Contact Header */}
      <div className="contact-header">
        <h2>Get In Touch</h2>
        <p>Feel free to reach out for any inquiries or collaboration.</p>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        {/* Contact Form (Left Side) */}
        <div className="contact-form">
          <form>
            <div className="input-group">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>
            <input type="text" placeholder="Your Phone" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Submit Now →</button>
          </form>
        </div>

        {/* Contact Info (Right Side) */}
        <div className="contact-info">
          <div className="info-box">
            <a href="#" target="_blank" rel="noopener noreferrer">
              📍 <strong>Pathankot</strong>
            </a>
            <p>Office Address</p>
          </div>
          <div className="info-box">
            <a href="mailto:ak9988385532@gmail.com">
              📧 <strong>ak9988385532@gmail.com</strong>
            </a>
            <p>Official Mail</p>
          </div>
          <div className="info-box">
            <a href="tel:+919988385532">
              📞 <strong>+919988385532</strong>
            </a>
            <p>Official Phone</p>
          </div>
        </div>
      </div>
    </div>
  );
};

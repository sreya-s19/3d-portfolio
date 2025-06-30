// src/pages/ContactPage.jsx

import { motion } from 'framer-motion';

// Reusable animated section component
const Section = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

function ContactPage() {
  return (
    <div className="contact-page-container">
      <Section>
        <section className="connect-section">
          <div className="connect-text">
            <h2>Connect with Me</h2>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of an innovative vision. Feel free to reach out for inquiries, collaborations, or internship opportunities in cybersecurity.</p>
          </div>

          <motion.div 
            className="connect-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="connect-card-background"></div>
            <div className="connect-card-icon">👋</div>
            <a href="mailto:sreyashyjash@gmail.com" className="connect-card-button">
              Let's Talk
            </a>
          </motion.div>
        </section>
      </Section>

      <Section delay={0.2}>
        <footer className="contact-footer">
            <div className="footer-item">
                <h3>Contact</h3>
                <p>+91 8921716475</p>
            </div>
            <div className="footer-item">
                <h3>LinkedIn</h3>
                <a href="https://linkedin.com/in/sreya-shyjash-213963213" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/sreya-shyjash
                </a>
            </div>
            <div className="footer-item">
                <h3>Email</h3>
                <a href="mailto:sreyashyjash@gmail.com">sreyashyjash@gmail.com</a>
            </div>
        </footer>
      </Section>
    </div>
  );
}

export default ContactPage;
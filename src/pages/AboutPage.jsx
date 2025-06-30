// src/pages/AboutPage.jsx (Full Version with Animations)

import { motion } from 'framer-motion';

// A reusable component for animated sections
const Section = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

function AboutPage() {
  return (
    <div className="about-page-container">
      {/* --- Page Header --- */}
      <Section delay={0}>
        <div className="about-header">
          <h1>About Me</h1>
          <p>Discover my journey.</p>
        </div>
      </Section>

      {/* --- Profile Section --- */}
      <section className="profile-section">
        <motion.div
          className="profile-image"
          initial={{ y: 100, opacity: 0 }} // Start 100px lower and invisible
          animate={{ y: 0, opacity: 1 }}     // Animate to original position and fully visible
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <img src="/images/profile-photo.jpg" alt="Sreya Shyjash" />
        </motion.div>

        <div className="profile-bio">
          <Section delay={0.4}>
            <p className="role-title">Cybersecurity and Digital Forensic Enthusiast</p>
            <h2>Sreya Shyjash</h2>
            <div className="bio-full-text">
                <p>
                    A highly motivated B.Tech Computer Science and Engineering student specializing in (Cybersecurity) with a strong foundation in digital forensics, threat intelligence, and full-stack development. Passionate about leveraging technology to strengthen digital security and support law enforcement through innovative tools and research. Experienced in building real-time cybersecurity applications and interactive data visualization platforms. Proven ability to lead projects, learn independently, and adapt quickly to new challenges. Actively seeking opportunities to contribute to cyber cells or forensic teams through internships and research initiatives.
                </p>
            </div>
          </Section>
          
          <Section delay={0.6}>
            <div className="contact-details">
              <p>IN- +91 8921716475</p>
              <p>AE- +971 582759374</p>
            </div>
          </Section>
        </div>
      </section>

      {/* --- Details Grid Section --- */}
      <div className="details-grid">
        <Section delay={0.8}>
          <div className="detail-item">
            <h3>EDUCATION <span>2024 - 2028</span></h3>
            <p><strong>BTech Computer Science and Engineering Specialization Cyber-Security</strong></p>
            <p>2nd Academic Year</p>
            <p>Chinmaya Vishwa Vidyapeeth Deemed to be University</p>
            <p>Ernakulam, Kerala, India</p>
          </div>
        </Section>

        <Section delay={0.9}>
          <div className="detail-item">
            <h3>EXPERIENCE <span>2025-Present</span></h3>
            <p><strong>SEO</strong></p>
            <p>Moonhive pvt Ltd</p>
            <p>Thrikandrum, Kerala, India</p>
          </div>
        </Section>

        <Section delay={1.0}>
          <div className="detail-item connect-item">
            <h3>CONNECT</h3>
            <p>
              <strong>LinkedIn</strong>
              <a href="https://linkedin.com/in/sreya-shyjash-213963213" target="_blank" rel="noopener noreferrer">
                www.linkedin.com/in/sreya-shyjash-213963213
              </a>
            </p>
            <p>
              <strong>Phone</strong>
              <span>+91 8921716475</span>
            </p>
            <p>
              <strong>GitHub</strong>
              <a href="https://github.com/sreya-s19" target="_blank" rel="noopener noreferrer">
                https://github.com/sreya-s19
              </a>
            </p>
            <p>
              <strong>Medium</strong>
              <a href="https://medium.com/@sreyashyjash" target="_blank" rel="noopener noreferrer">
                https://medium.com/@sreyashyjash
              </a>
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}

export default AboutPage;
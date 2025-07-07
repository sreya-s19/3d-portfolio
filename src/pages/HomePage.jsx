// src/pages/HomePage.jsx

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import Scene from '../components/Scene';
import Achievements from '../components/Achievements';
import ErrorBoundary from '../components/ErrorBoundary'; // <-- IMPORT
import { useState, useEffect } from 'react'; // Make sure useEffect is imported
import { AnimatePresence, motion } from 'framer-motion'; // For the fade animation

// --- NEW: Image Slideshow Component ---
function ImageSlideshow() {
  const images = [
    '/images/slide1.png', // The lock image
    '/images/slide2.png', // Another relevant image
    '/images/slide3.png'  // And another
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // This useEffect hook handles the auto-playing logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds (2000ms)

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div className="slideshow-card">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt="Cybersecurity concept image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }} // Fade duration of 0.5 seconds
        />
      </AnimatePresence>
    </div>
  );
}


function CertificationsSection() {
  const certifications = [
    { title: 'Introduction to Dark Web, Anonymity, and Cryptocurrency', imageSrc: '/images/cert0.png' },
    { title: 'Cybersecurity Professional Certificate', imageSrc: '/images/cert1.png' },
    { title: 'Security Analyst Fundamentals', imageSrc: '/images/cert2.png' },
    { title: 'Computer Forensics', imageSrc: '/images/cert3.png' },
    { title: 'Cybersecurity Virtual Experience Program', imageSrc: '/images/cert4.png' },
    { title: 'Cybersecurity Virtual Experience Program', imageSrc: '/images/cert5.png' },
    { title: 'Digital Forensics Basics', imageSrc: '/images/cert6.png' },
    { title: 'Ethical Hacking: Cryptography', imageSrc: '/images/cert7.png' },
    { title: 'Generative AI for Software Developers', imageSrc: '/images/cert8.png' },
    { title: 'Introduction to iOS Development', imageSrc: '/images/cert9.png' },
    { title: 'Freelancing with Gemini Pro', imageSrc: '/images/cert10.png' },
    
  ];

  return (
    <section className="page-section certifications-section">
      <h2 className="section-title">Certifications & Accomplishments</h2>
      <div className="certifications-scroll-container">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <div className="cert-image-container">
              <img src={cert.imageSrc} alt={cert.title} />
            </div>
            <h4 className="cert-title">{cert.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- NEW: Research Section Component ---
function ResearchSection() {
  const researchItems = [
    {
      date: 'June 2025',
      author: 'Sreya Shyjash',
      title: 'The Shadow Handshake',
      description: 'Correlating Dark Web Personas with Public/Clearnet Identities',
      imageSrc: '/images/research1.png' // Make sure you have this image
    },
    {
      date: 'June 2025',
      author: 'Sreya Shyjash',
      title: 'Hydra-Scrape',
      description: 'Anomaly Detection in .onion Traffic Using Machine Learning.',
      imageSrc: '/images/research2.png'
    },
    {
      date: 'June 2025',
      author: 'Sreya Shyjash',
      title: 'CYBERMAP- India',
      description: 'Showcasing Cybercrimes in India',
      imageSrc: '/images/research3.png'
    }
  ];

  return (
    <section className="page-section research-section">
      <h2 className="section-title">Research & Insights</h2>
      <p className="section-subtitle">
        Overview of research works and internships, emphasizing practical experience and contributions to cybersecurity.
      </p>
      <div className="research-grid">
        {researchItems.map((item, index) => (
          <div key={index} className="research-card">
            <div className="research-card-image">
              <img src={item.imageSrc} alt={item.title} />
              <div className="research-card-overlay"></div>
            </div>
            <div className="research-card-content">
              <div className="research-card-meta">
                <span>{item.date}</span>
                <span>{item.author}</span>
              </div>
              <h3 className="research-card-title">{item.title}</h3>
              <p className="research-card-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section">
      <h2 className="section-title">CONNECT</h2>
      <div className="contact-grid">
        <div className="contact-item">
          <h4>LinkedIn</h4>
          <a href="https://linkedin.com/in/sreya-shyjash-213963213" target="_blank" rel="noopener noreferrer">
            /sreya-shyjash-213963213
          </a>
        </div>
        <div className="contact-item">
          <h4>GitHub</h4>
          <a href="https://github.com/sreya-s19" target="_blank" rel="noopener noreferrer">
            /sreya-s19
          </a>
        </div>
        <div className="contact-item">
          <h4>Email</h4>
          <a href="mailto:sreyashyjash@gmail.com">
            sreyashyjash@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      {/* 3D SCENE - This is the fixed background */}
      <div className="home-canvas-container">
        <ErrorBoundary> {/* <-- WRAP THE CANVAS */}
          <Canvas camera={{ position: [0, 2, 10], fov: 60 }}>
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </Canvas>
        </ErrorBoundary>
      </div>

      {/* 2D CONTENT - This is the scrollable foreground */}
      <div className="home-content">
        <section className="intro-section-grid">
          {/* Column 1: Text */}
          <div className="intro-text-content">
            <h1>Cyber Diaries</h1>
            <p>Get to know about me.</p>
            <Link to="/projects">
              <button className="explore-button">Explore Skills</button>
            </Link>
          </div>

          {/* Column 2: Image Slideshow */}
          <div className="intro-image-slideshow">
            <ImageSlideshow />
          </div>
        </section>
        <Achievements />
        <CertificationsSection />
        <ResearchSection />
        <Contact />
      </div>
    </>
  );
}

export default HomePage;
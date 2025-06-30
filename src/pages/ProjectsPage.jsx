// src/pages/ProjectsPage.jsx (FINAL - STABLE 2D CLICK)

import { useState, Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Image, Text } from '@react-three/drei';
import * as THREE from 'three';

import { projects } from '../data/projects';
import ProjectDetail from '../components/ProjectDetail';
import ErrorBoundary from '../components/ErrorBoundary';

// --- Card Component (Visuals Only) ---
// This component has NO onClick handler. Its only job is to look good.
function Card({ project, active, ...props }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, active ? 0.25 : 0, 0.1);
    groupRef.current.position.y = Math.sin(t + props.position[0]) * 0.1;
  });

  return (
    <group ref={groupRef} {...props}>
      <mesh scale={[4, 2.5, 1]}>
        <Image url={project.image} radius={0.05} />
        <meshBasicMaterial transparent opacity={active ? 1 : 0.5} toneMapped={false} />
      </mesh>
      <Text position={[0, -1.5, 0.3]} fontSize={0.25} color="white" anchorX="center" visible={active}>
        {project.title}
      </Text>
    </group>
  );
}

// --- Carousel Component (Visuals Only) ---
// This component has NO onCardClick prop. It just moves the cards.
function Carousel({ currentIndex }) {
  const groupRef = useRef();
  const CARD_SPACING = 5;

  useFrame(() => {
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, -currentIndex * CARD_SPACING, 0.1);
  });

  return (
    <group ref={groupRef}>
      {projects.map((project, i) => (
        <Card
          key={project.id}
          position={[i * CARD_SPACING, 0, 0]}
          project={project}
          active={i === currentIndex}
        />
      ))}
    </group>
  );
}

// --- Main Page Component ---
function ProjectsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const goToNext = () => setCurrentIndex(current => (current + 1) % projects.length);
  const goToPrev = () => setCurrentIndex(current => (current - 1 + projects.length) % projects.length);

  // This is the new, simple click handler for our 2D button.
  const handleCardClick = () => {
    // It uses the current index to find the right project.
    if (projects[currentIndex]) {
      setSelectedProject(projects[currentIndex]);
    }
  };

  return (
    <div className="projects-page-container"> 
    <section className="projects-page-carousel">
      <button className="carousel-arrow left" onClick={goToPrev}>«</button>
      <button className="carousel-arrow right" onClick={goToNext}>»</button>

      <div className="page-header">
        <h1>PROJECTS</h1>
        <p>Use the arrows to navigate my work. Click the centered card for details.</p>
      </div>

      {/* 
        THE STABLE CLICK TARGET:
        This is a simple HTML div. It sits invisibly on top of the 3D canvas.
        When you click it, it opens the modal for the currently centered project.
        This CANNOT cause a 3D rendering error.
      */}
      <div className="click-target" onClick={handleCardClick}></div>

      <ErrorBoundary>
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={1.2} />
          <pointLight position={[0, 5, 5]} intensity={1.5} color="#00FFFF" />
          <fog attach="fog" args={['#0A0F1A', 8, 25]} />
          
          <Suspense fallback={null}>
            <Carousel currentIndex={currentIndex} />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </section>
    {/* 3. ADD THE NEW SECTIONS HERE */}
      <RoadmapSection />
      <SkillsSection />


      {selectedProject && (
        <ProjectDetail 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}
// --- ADD THIS NEW COMPONENT ---
function RoadmapSection() {
    const phases = [
        { title: 'Assessment & Planning', tasks: ['Security Audit', 'Risk Assessment', 'Security Planning', 'Compliance Review', 'Final Adjustments'] },
        { title: 'Implementation', tasks: ['Firewall Configuration', 'Intrusion Detection', 'VPN Setup', 'Access Control', 'Data Encryption'] },
        { title: 'Monitoring & Response', tasks: ['SIEM Implementation', 'Log Analysis', 'Incident Response', 'Threat Intelligence', 'Performance Optimization'] },
        { title: 'Maintenance & Improvement', tasks: ['Regular Updates', 'Vulnerability Scanning', 'Penetration Testing', 'Security Training', 'New Features Integration'] }
    ];

    return (
        <section className="page-section roadmap-section">
            <h2 className="section-title">Cybersecurity Project Roadmap</h2>
            <p className="section-subtitle">Explore the journey and future plans for my cybersecurity projects.</p>
            <div className="roadmap-grid">
                {phases.map((phase, index) => (
                    <div key={index} className="roadmap-phase">
                        <h3>PHASE {index + 1}</h3>
                        <h4>{phase.title}</h4>
                        <ul>
                            {phase.tasks.map((task, taskIndex) => (
                                <li key={taskIndex}>✔ {task}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

// --- AND ADD THIS NEW COMPONENT ---
function SkillsSection() {
    const skills = [
        { icon: '🛡️', title: 'Network Security', description: 'Securing network infrastructure through firewall management and intrusion prevention systems.' },
        { icon: '🎯', title: 'Penetration Testing', description: 'Identifying vulnerabilities through ethical hacking and security assessments.' },
        { icon: '🔥', title: 'Incident Response', description: 'Responding to and mitigating cybersecurity incidents to minimize damage.' },
        { icon: '🔑', title: 'Cryptography', description: 'Applying encryption techniques to protect sensitive data and communications.' },
        { icon: '🔍', title: 'Vulnerability Assessment', description: 'Analyzing systems for weaknesses and providing remediation strategies.' },
        { icon: '📋', title: 'Security Auditing', description: 'Conducting thorough reviews of security policies and procedures.' }
    ];

    return (
        <section className="page-section skills-section">
            <h2 className="section-title">Cybersecurity Skills</h2>
            <p className="section-subtitle">A comprehensive overview of my core competencies in cybersecurity.</p>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <div className="skill-icon">{skill.icon}</div>
                        <h3>{skill.title}</h3>
                        <p>{skill.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}


export default ProjectsPage;
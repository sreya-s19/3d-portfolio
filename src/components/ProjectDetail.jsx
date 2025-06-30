// src/components/ProjectDetail.jsx

import { motion } from 'framer-motion';

// This component parses a simple version of Markdown into HTML elements
function SimpleMarkdown({ content = "" }) {
  if (!content) {
    return <p>No details available for this project yet.</p>;
  }

  const lines = content.trim().split('\n');

  return (
    <>
      {lines.map((line, index) => {
        if (line.startsWith('# ')) return <h1 key={index}>{line.substring(2)}</h1>;
        if (line.startsWith('## ')) return <h2 key={index}>{line.substring(3)}</h2>;
        if (line.startsWith('### ')) return <h3 key={index}>{line.substring(4)}</h3>;
        if (line.startsWith('- ')) {
            const indent = line.match(/^\s*/)[0].length;
            return <li key={index} style={{ marginLeft: `${indent}ch` }}>{line.substring(indent + 2)}</li>;
        }
        if (line.includes('**')) {
            const parts = line.split('**');
            return ( <p key={index}> {parts.map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : part)} </p> )
        }
        if (line.trim() === '') return <br key={index} />;
        return <p key={index}>{line}</p>;
      })}
    </>
  );
}

// This is the main modal component
function ProjectDetail({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      className="project-detail-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="project-detail-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>×</button>
        <div className="readme-content">
          <SimpleMarkdown content={project.readme} />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectDetail;
// NOTE: The 'readme' content below is generated based on project titles.
// Please update it with your actual project details.

export const projects = [
  // --- Row 1 ---
  {
    id: 1,
    title: 'Dark-I',
    category: 'Tools',
    description: 'An OSINT command-line tool',
    image: '/images/Dark-I.png',
    position: [-4.5, 8, 0],
    readme: `
# Dark-I
**Category:** Command-Line Tool

## Overview
Dark-I is a conceptual tool designed for OSINT (Open-Source Intelligence) gathering. The project is currently in the planning phase, aimed at providing a comprehensive toolkit for cybersecurity researchers.
## Status
- Planned
## Tech Stack
- Python
- Argparse for command-line arguments
- Integration with APIs (Shodan, HaveIBeenPwned, etc.)

## Features (Planned)
- Email and username enumeration across platforms.
- Subdomain and open port scanning.
- Social media profile searching and data aggregation.
`
  },
  {
    id: 2,
    title: 'Project Synapse',
    category: 'Web',
    description: 'An investigative intelligence platform',
    image: '/images/Project_Synapse.png',
    position: [0, 8, 0],
    readme: `
# Project Synapse
**Category:** Web Application

## Overview
Synapse is a full-stack web platform for investigators to aggregate and visualize intelligence from multiple sources. It features a node-based graph interface to map connections between data points.

## Tech Stack
- **Frontend:** React, D3.js for graph visualization
- **Backend:** Node.js, Express, PostgreSQL
- **Authentication:** JWT (JSON Web Tokens)

## Features
- Secure user authentication and case management.
- Interactive graph visualization of data relationships.
- Data import from various formats (CSV, JSON).
`
  },
  {
    id: 3,
    title: 'Threat Intelligence Dashboard 2.0',
    category: 'Web',
    description: 'A full-stack cybersecurity application',
    image: '/images/Threat-Intelligence-Dashboard-2-0.png',
    position: [4.5, 8, 0],
    readme: `
# Threat Intelligence Dashboard 2.0
**Category:** Web Application

## Overview
A comprehensive dashboard that aggregates and displays real-time threat intelligence feeds from various sources. It helps security analysts to quickly identify and respond to emerging threats.

## Tech Stack
- **Frontend:** Vue.js, Chart.js
- **Backend:** Flask (Python), MongoDB
- **APIs:** AlienVault OTX, VirusTotal

## Features
- Customizable widgets and dashboards.
- Real-time alerts via email or webhooks.
- Geolocation mapping of ongoing cyber threats.
`
  },

  // --- Row 2 ---
  {
    id: 4,
    title: 'Vector-Threat',
    category: 'AI',
    description: 'AI-powered Fraudulent Message Detector',
    image: '/images/Vector-Threat.png',
    position: [-4.5, 4, 0],
    readme: `
# Vector-Threat
**Category:** Artificial Intelligence

## Overview
This project uses Natural Language Processing (NLP) and machine learning to detect and classify fraudulent messages (e.g., phishing emails, smishing texts) with high accuracy.

## Tech Stack
- Python, Scikit-learn, TensorFlow/Keras
- NLTK for text preprocessing
- Flask for building a REST API endpoint

## Features
- High-accuracy classification model (>98%).
- REST API for easy integration with other services.
- Continuously trainable with new data.
`
  },
  {
    id: 5,
    title: 'Threat Analyzer Platform',
    category: 'Web',
    description: 'A full-stack, multi-page application',
    image: '/images/Threat-Analyzer-Platform.png',
    position: [0, 4, 0],
    readme: `
# Threat Analyzer Platform
**Category:** Web Application

## Overview
A platform for security analysts to submit files or URLs for automated analysis. It provides a detailed report on potential threats, malware signatures, and Indicators of Compromise (IOCs).

## Tech Stack
- **Frontend:** React
- **Backend:** Django (Python)
- **Analysis Engine:** Cuckoo Sandbox, YARA rules

## Features
- Drag-and-drop file and URL submission.
- Static and dynamic analysis in a sandboxed environment.
- Detailed, downloadable PDF reports.
`
  },
  {
    id: 6,
    title: 'TripTailor',
    category: 'Web',
    description: 'Travel Management System',
    image: '/images/TripTailor.png',
    position: [4.5, 4, 0],
    readme: `
# TripTailor
**Category:** Web Application

## Overview
A travel management system that allows users to plan trips, book flights and hotels, and manage itineraries in a single, user-friendly interface.

## Tech Stack
- **Frontend:** Angular
- **Backend:** Spring Boot (Java), MySQL
- **APIs:** Amadeus for flight data, Google Maps for visualization

## Features
- Secure user account and profile management.
- Real-time flight and hotel search and booking simulation.
- Interactive itinerary builder with a timeline view.
`
  },

  // --- Row 3 ---
  {
    id: 7,
    title: 'Cloud Kitchen Management System',
    category: 'DBMS',
    description: 'A database-centric management application',
    image: '/images/Cloud-Kitchen-Management-System.png',
    position: [-4.5, 0, 0],
    readme: `
# Cloud Kitchen Management System
**Category:** Database Management System

## Overview
A robust system for managing orders, inventory, and staff for a cloud kitchen. The focus is on database efficiency and transactional integrity to handle high volumes of orders.

## Tech Stack
- **Core:** Java (JDBC), MySQL
- **Frontend:** JavaFX for a simple admin desktop interface

## Features
- Detailed order tracking from placement to delivery.
- Real-time inventory management with low-stock alerts.
- Employee shift and role management.
- Sales and performance reporting.
`
  },
  {
    id: 8,
    title: 'Cyber Cafe Management System',
    category: 'DBMS',
    description: 'A desktop application for cafe administration',
    image: '/images/Cyber-Cafe-Management-System.png',
    position: [0, 0, 0],
    readme: `
# Cyber Cafe Management System
**Category:** Database Management System

## Overview
A system to manage client sessions, billing, and computer usage in a cyber cafe. It ensures accurate time tracking and secure session management.

## Tech Stack
- **Core:** C#, .NET Framework, SQL Server
- **Networking:** TCP/IP sockets for client-server communication

## Features
- Central server control over client workstations.
- Pre-paid and post-paid billing models.
- Application and website blocking capabilities.
- End-of-day sales and usage reports.
`
  },
  {
    id: 9,
    title: 'Food Tracker',
    category: 'Web',
    description: 'A web app for tracking food consumption',
    image: '/images/Food-Tracker.png',
    position: [4.5, 0, 0],
    readme: `
# Food Tracker
**Category:** Web Application

## Overview
A simple web application that allows users to log their daily food intake, track calories, and view nutritional information.

## Tech Stack
- **Frontend:** HTML, CSS, Vanilla JavaScript
- **Backend:** PHP, MySQL
- **API:** OpenFoodFacts API for nutritional data

## Features
- Search for food items and view nutritional details.
- Daily food log with calorie and macro summaries.
- User registration and persistent data storage.
`
  },

  // --- Row 4 ---
  {
    id: 10,
    title: 'Face Recognition Attendance System',
    category: 'AI',
    description: 'An automated attendance system using AI',
    image: '/images/Face-Recognition-Attendance-System.png',
    position: [-4.5, -4, 0],
    readme: `
# Face Recognition Attendance System
**Category:** Artificial Intelligence

## Overview
A system that automates the process of taking attendance by using a camera to recognize students' faces in a classroom.

## Tech Stack
- **Core:** Python, OpenCV, face_recognition library
- **Database:** SQLite for storing student records and attendance logs

## Features
- Real-time face detection and recognition.
- Automatic marking of 'Present' in the database.
- Simple interface to enroll new students by capturing their image.
- Ability to export attendance reports as CSV files.
`
  },
  {
    id: 11,
    title: 'Interactive Threat Intelligence Dashboard',
    category: 'Web',
    description: 'An interactive data visualization platform',
    image: '/images/Interactive-Threat-Intelligence-Dashboard.png',
    position: [0, -4, 0],
    readme: `
# Interactive Threat Intelligence Dashboard
**Category:** Web Application / Data Visualization

## Overview
This is an earlier version of the Threat Intelligence Dashboard, with a strong focus on creating highly interactive and visually appealing data visualizations for cybersecurity data.

## Tech Stack
- **Frontend:** React, D3.js, WebGL
- **Backend:** Node.js, Express

## Features
- 3D globe for visualizing attack origins and destinations.
- Sankey diagrams for analyzing malware delivery paths.
- Force-directed graphs for exploring threat actor networks.
`
  },
  {
    id: 12,
    title: 'Memory Game',
    category: 'Game',
    description: 'A classic card-matching memory game',
    image: '/images/Memory-Game.png',
    position: [4.5, -4, 0],
    readme: `
# Memory Game
**Category:** Game

## Overview
A simple, fun, and visually pleasing implementation of the classic card-matching memory game, built with web technologies.

## Tech Stack
- HTML, CSS, JavaScript (ES6)

## Features
- Smooth card flip animations using CSS transitions.
- A timer to track completion speed.
- A move counter to track efficiency.
- Multiple difficulty levels (different grid sizes).
`
  },

  // --- Row 5 ---
  {
    id: 13,
    title: 'AI-Powered Personalized Chatbot',
    category: 'AI',
    description: 'A friendly and helpful AI chatbot',
    image: '/images/AI-Powered-Personalized-Chatbot.png',
    position: [-2.25, -8, 0],
    readme: `
# AI-Powered Personalized Chatbot
**Category:** Artificial Intelligence

## Overview
A chatbot designed to provide personalized responses and assistance. It can be integrated into websites to improve user engagement and provide support.

## Tech Stack
- **Core:** Python, Rasa / Google Dialogflow
- **Integration:** REST API for connecting to a frontend interface

## Features
- Natural Language Understanding (NLU) to interpret user intent.
- Manages conversation context and follows dialogue flows.
- Can be trained on custom domain knowledge (e.g., product information).
- Fallback mechanisms for when it doesn't understand.
`
  },
  {
    id: 14,
    title: 'CyberMap-India',
    category: 'Web',
    description: 'A visualization of cyber crimes in India',
    image: '/images/CyberMap-India.png',
    position: [2.25, -8, 0],
    readme: `
# CyberMap-India
**Category:** Web Application / Data Visualization

## Overview
An interactive map of India that visualizes cyber crime statistics across different states and union territories. The project aims to raise awareness by making data accessible.

## Tech Stack
- **Frontend:** React, Leaflet.js / Mapbox GL
- **Data Source:** Publicly available government data (cleaned and processed)

## Features
- Choropleth map showing crime density by region.
- Ability to filter data by year and type of cyber crime.
- Clickable regions that display detailed statistics and charts.
`
  },
  {
    id: 15,
    title: 'S3CURE',
    category: 'Game', 
    description: 'A gamified web platform for learning cybersecurity.',
    image: '/images/s3cure.png', 
    readme: `
# S3CURE
**Category:** Gamified Learning Platform

## Overview
S3CURE is a fully gamified web platform designed to immerse users in the role of cybercrime investigators. Operating under the fictional agency "Cyber Diaries," users tackle complex cybercrime missions, solve interactive, multi-layered challenges, and earn digital badges that reflect their expertise. This project focuses on realistic, skill-based learning over simple memorization, creating an engaging educational experience for aspiring cybersecurity professionals.

## Tech Stack
This project is a full-stack monorepo application built with a modern, scalable architecture.

### Frontend
- **Framework:** React (with Vite)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **State Management:** React Context API
- **Routing:** React Router

### Backend & Database
- **Backend Logic:** Firebase Functions (Node.js)
- **Database:** Cloud Firestore
- **Authentication:** Firebase Authentication
- **Hosting:** Firebase Hosting

### Development Environment
- **Local Simulation:** Firebase Emulator Suite
- **Version Control:** Git & GitHub
- **Node Version Management:** NVM
    `
  },
  {
    id: 16,
    title: 'CryptoCrack',
    category: 'Game', 
    description: 'A gamified, interactive cryptography learning platform.',
    image: '/images/cryptocrack.png', 
    readme: `
# CryptoCrack – Crack the Code, Capture the Flag
**Category:** Gamified CTF Platform

## Overview
CryptoCrack is a gamified, interactive cryptography learning platform designed to help users understand and practice cryptographic techniques through CTF-style challenges. With a retro hacker aesthetic, users solve progressively difficult puzzles using real-world ciphers and encoding techniques to capture flags, earn XP, and unlock new levels. Unlike traditional platforms, CryptoCrack emphasizes visual interaction, real-time feedback, and handcrafted cryptographic gameplay.
## Status
- In progress
## Tech Stack

### Frontend
CryptoCrack is built entirely with **vanilla HTML, CSS, and JavaScript** to create a lightweight, fast, and fully customizable interactive experience.
- **No CSS frameworks** (like Tailwind or Bootstrap) are used — all styling is handcrafted to achieve a retro hacker/glitch-style look.
- **JavaScript** handles all game logic, user interaction, flag validation, and level progression.
- **Optional Animation Libraries:** GSAP or Anime.js could be used for smooth visual transitions, such as vault openings or typewriter effects.

### Backend (Conceptual)
If user accounts, dynamic challenges, or persistent XP tracking were added, the backend could be:
- **Runtime:** Node.js with Express.js to manage API endpoints and challenge logic.
- **Database:** MongoDB (for flexibility) or PostgreSQL (for relational tracking of users and flags).
    `
  },
  {
    id: 17,
    title: 'CLUECRYPT',
    category: 'Game', 
    description: 'An immersive 3D web-based forensic escape room.',
    image: '/images/cluecrypt.png', 
    readme: `
# CLUECRYPT: 3D Forensic Escape Room
**Category:** 3D Interactive Game

## Overview
CLUECRYPT is an immersive 3D web-based forensic escape room where players step into the role of a cybercrime investigator. Set inside a high-tech virtual office, players solve a fictional case involving sabotage, corporate espionage, or digital murder. The gameplay involves navigating through multiple rooms, inspecting virtual evidence (USBs, documents, devices), and solving digital forensic puzzles — such as steganography challenges, hex dump analysis, password cracking, and log file investigation. Each solved puzzle unlocks access to the next area or narrative clue.

CLUECRYPT blends storytelling, interactive 3D exploration, and hands-on digital forensics to deliver an educational yet thrilling experience for cybersecurity students and enthusiasts.
## Status
- In progress
## Tech Stack

### Frontend
- **Framework:** React.js (for the SPA structure and UI components).
- **3D Engine:** React Three Fiber (Three.js) to create and render the 3D environments and interactive objects.
- **Animation:** Framer Motion for smooth UI transitions and interactions.
- **State Management:** Redux or Zustand for managing game state (clue progression, room unlocks, etc.).
- **Styling:** Custom CSS or SCSS for styling UI elements like tool panels and dialogs.

### Backend
- **Runtime:** Node.js with Express or Python with Flask for serving puzzle content and tracking progress.
- **Authentication:** JWT (JSON Web Tokens) to secure player sessions and allow save/resume functionality.
- **Database:** MongoDB for storing user accounts, mission states, and puzzle completions.
- **API:** REST API for interaction between frontend puzzles and backend validation.
    `
  },
  {
    id: 18,
    title: 'BIOCYBER',
    category: 'Web', 
    description: 'A web-based simulation where digital forensics meets DNA.',
    image: '/images/biocyber.png', 
    readme: `
# BIOCYBER: Digital Forensics Meets DNA
**Category:** Forensic Simulation Platform

## Overview
BIOCYBER is a groundbreaking web-based simulation platform that explores the intersection of cyber forensics and bioinformatics. Users take on the role of forensic analysts investigating cases involving synthetic DNA sequence tampering, medical record forgery, or biohacking attempts. Through simulated forensic tasks, players decode manipulated DNA sequences using base64/hex steganography, verify the integrity of digital medical records, and compile findings into professional forensic reports.

Designed for forensic science and cyberlaw students, BIOCYBER brings attention to a rare but increasingly important crossover: the convergence of biology and digital crime.
## Status
- In progress
## Tech Stack

### Frontend
- **Framework:** React.js for building interactive components and case navigation.
- **Data Visualization:** D3.js or Three.js for visualizing DNA strands and highlighting altered base pairs.
- **Data Interface:** Ace Editor / Monaco Editor for an embedded code editor-style view of DNA/base64/hex data.
- **Reporting Module:** React-Quill or Draft.js for building a forensic report writer with rich text formatting.

### Backend
- **Runtime:** Python with Flask, ideal for integrating bioinformatics libraries.
- **Bioinformatics Library:** Biopython for DNA sequence parsing, mutation detection, and pattern searching.
- **Report Generation:** PyPDF2 or ReportLab to generate downloadable forensic reports in PDF format.
- **Database:** SQLite or PostgreSQL for storing case files, user submissions, and reports.
    `
  },

];

// This array populates the filter buttons.
export const categories = [
  'All',
  'Web',
  'AI',
  'Tools',
  'DBMS',
  'Game',
];
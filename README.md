# 3D Interactive Cybersecurity Portfolio

![Portfolio Screenshot](public/images/screenshot.png) 
<!-- Make sure to add a good screenshot of your site named 'screenshot.png' in the public/images folder -->

Welcome to the repository for my 3D interactive portfolio website. This project is a fusion of modern web technologies and 3D graphics, designed to create an immersive and engaging showcase of my skills, projects, and journey in the field of cybersecurity.

**Live Site:** [**[Your Name]'s Portfolio**](https://[Your Live Site URL].netlify.app/)

---

## 🌐 Overview

This isn't just a standard portfolio; it's a dynamic, 3D experience built from the ground up. The goal was to move beyond static pages and create a memorable digital space that reflects my passion for technology and cybersecurity. The site features a "cyber-terminal" aesthetic, interactive 3D models, and smooth animations to guide the user through my professional story.

## ✨ Key Features

-   **Immersive 3D Homepage:** A dynamic scene featuring a floating cyber grid, holographic elements, and a rotating 3D badge to welcome visitors.
-   **Interactive 3D Project Carousel:** A horizontal, sliding carousel showcasing my key projects. The active card is highlighted, and all cards have a subtle floating animation.
-   **Detailed Project Modals:** Each project in the carousel is clickable, opening a detailed modal with a "README-style" description, outlining the tech stack and features.
-   **Scrollable Content Sections:** The homepage seamlessly transitions from the 3D scene to 2D sections for Achievements, Certifications, and Research, creating a rich, layered experience.
-   **Clean & Professional Design:** A consistent dark-mode "cyber" theme across all pages, with custom fonts and glowing UI elements.
-   **Fully Responsive:** The layout and 3D scenes are designed to be functional and visually appealing on both desktop and mobile devices.

---

## 🛠️ Tech Stack

This project was built with a modern, high-performance tech stack focused on creating rich 3D experiences on the web.

-   **Frontend Framework:** [**React**](https://reactjs.org/)
-   **3D Rendering:** [**Three.js**](https://threejs.org/)
-   **React-Three-Fiber Ecosystem:**
    -   [**@react-three/fiber**](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction): A React renderer for Three.js, allowing for a declarative, component-based approach to building 3D scenes.
    -   [**@react-three/drei**](https://github.com/pmndrs/drei): A vast collection of helpers and reusable components for R3F, used for everything from camera controls and text to loading 3D models.
-   **Animation:** [**Framer Motion**](https://www.framer.com/motion/): Used for animating the 2D UI elements, such as the page transitions and modal pop-ups.
-   **Routing:** [**React Router**](https://reactrouter.com/)
-   **Build Tool:** [**Vite**](https://vitejs.dev/)
-   **Deployment:** [**Netlify**](https://www.netlify.com/)

---

## 🚀 Getting Started

To run this project locally on your own machine, follow these steps:

### Prerequisites

-   Node.js (v16 or later)
-   npm or yarn

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/[Your-GitHub-Username]/[Your-Repo-Name].git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd [Your-Repo-Name]
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:5173](http://localhost:5173) (or the address provided in your terminal) in your browser to see the application.

### Building for Production

To create a production-ready build of the site, run:
```bash
npm run build

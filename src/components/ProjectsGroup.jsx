// src/components/ProjectsGroup.jsx

import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import { projects } from '../data/projects';
import { ProjectCard3D } from './ProjectCard3D';

export function ProjectsGroup() {
  const groupRef = useRef();
  const scroll = useScroll();
  const { height: viewportHeight } = useThree().viewport;

  // This is the main animation loop
  useFrame((state, delta) => {
    // The total height of the scrollable area is the viewport height * number of pages
    const totalScrollHeight = viewportHeight * scroll.pages;
    
    // Move the entire group up based on the scroll offset
    groupRef.current.position.y = scroll.offset * totalScrollHeight;

    // --- Parallax Effect ---
    // We loop through each card (child of the group) and apply an additional offset
    // This makes the columns appear to move at different speeds.
    for (let i = 0; i < groupRef.current.children.length; i++) {
      const card = groupRef.current.children[i];
      const cardXPosition = card.position.x;
      
      // The further from the center, the more parallax effect
      const parallaxOffset = (Math.abs(cardXPosition) / 2) * scroll.offset;
      card.position.y += parallaxOffset * delta * 5; // The multiplication makes the effect more noticeable
    }
  });

  // --- Layout Calculation ---
  const CARD_SPACING_X = 5;
  const CARD_SPACING_Y = 5;
  const CARDS_PER_ROW = 3;
  const numRows = Math.ceil(projects.length / CARDS_PER_ROW);

  return (
    <group ref={groupRef}>
      {projects.map((project, index) => {
        const row = Math.floor(index / CARDS_PER_ROW);
        const col = index % CARDS_PER_ROW;

        const x = (col - (CARDS_PER_ROW - 1) / 2) * CARD_SPACING_X;
        // The initial Y position is calculated from the top down
        const y = (numRows / 2) * CARD_SPACING_Y - row * CARD_SPACING_Y;
        const z = -Math.abs(x) * 0.5; // Curve effect

        return (
          <ProjectCard3D
            key={project.id}
            project={project}
            position={[x, y, z]}
            // Pass the onClick handler up to the page component
            onClick={() => props.onCardClick(project)}
          />
        );
      })}
    </group>
  );
}
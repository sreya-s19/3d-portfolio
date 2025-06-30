import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Float, Text, Grid } from '@react-three/drei';

function RotatingBadge() {
  // Make sure your model is in /public/badge.gltf
  const { scene } = useGLTF('/badge.gltf');
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={2.5}
      position={[0, 1, 0]}
    />
  );
}

export default function Scene() {
  return (
    <>
      <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />

      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={100} color="#00FFFF" />
      <pointLight position={[-10, -10, 5]} intensity={80} color="#FFFFFF" />

      <RotatingBadge />

      {/* THE FIX IS HERE: The 'font' prop has been removed from all <Text> components */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Text
          position={[4, 3, -2]}
          fontSize={0.6}
          color="#00FFFF"
          anchorX="center"
          anchorY="middle"
          outlineColor="#0A0F1A"
          outlineWidth={0.05}
        >
          PROJECTS
        </Text>
      </Float>

      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Text
          position={[-4, 3, -2]}
          fontSize={0.6}
          color="#00FFFF"
          anchorX="center"
          anchorY="middle"
          outlineColor="#0A0F1A"
          outlineWidth={0.05}
        >
          ABOUT ME
        </Text>
      </Float>

      <Grid
        position={[0, -1.5, 0]}
        infiniteGrid
        cellSize={1}
        cellThickness={1.5}
        sectionSize={5}
        sectionThickness={2}
        cellColor={"#3B4B68"}
        sectionColor={"#00FFFF"}
        fadeDistance={40}
      />
    </>
  );
}
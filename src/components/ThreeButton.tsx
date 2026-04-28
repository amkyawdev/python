'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { motion } from 'framer-motion';

interface ThreeButtonProps {
  text: string;
  onClick?: () => void;
  color?: string;
  hoverColor?: string;
  size?: 'small' | 'medium' | 'large';
  icon?: string;  // Bootstrap icon class
}

function Cube({ color, hoverColor, onClick, isHovered, isClicked }: { 
  color: string; 
  hoverColor: string;
  onClick?: () => void;
  isHovered: boolean;
  isClicked: boolean;
}) {
  const meshRef = useRef<Mesh>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const targetRotationX = isClicked ? 0.2 : isHovered ? 0.1 : 0;
    const targetRotationY = isClicked ? -0.2 : isHovered ? rotation.y + 0.02 : rotation.y;
    
    meshRef.current.rotation.x += (targetRotationX - meshRef.current.rotation.x) * 0.1;
    meshRef.current.rotation.y += (targetRotationY - meshRef.current.rotation.y) * 0.1;
  });

  return (
    <mesh
      ref={meshRef}
      onClick={onClick}
      onPointerOver={() => setRotation(prev => ({ ...prev, y: prev.y + 0.5 }))}
      onPointerOut={() => setRotation({ x: 0, y: 0 })}
    >
      <boxGeometry args={[2, 1, 0.5]} />
      <meshStandardMaterial 
        color={isHovered || isClicked ? hoverColor : color} 
        metalness={0.5}
        roughness={0.3}
      />
    </mesh>
  );
}

function Sphere({ color, hoverColor, onClick, isHovered, isClicked }: { 
  color: string; 
  hoverColor: string;
  onClick?: () => void;
  isHovered: boolean;
  isClicked: boolean;
}) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    meshRef.current.rotation.y += 0.01;
    meshRef.current.position.y = isClicked ? -0.1 : isHovered ? 0.1 : 0;
  });

  return (
    <mesh ref={meshRef} onClick={onClick}>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshStandardMaterial 
        color={isHovered || isClicked ? hoverColor : color} 
        metalness={0.6}
        roughness={0.2}
      />
    </mesh>
  );
}

export default function ThreeButton({ 
  text, 
  onClick, 
  color = '#B8D4E3',
  hoverColor = '#8BB8CC',
  size = 'medium',
  icon
}: ThreeButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const sizes = {
    small: { canvas: 80, font: 'text-sm' },
    medium: { canvas: 120, font: 'text-lg' },
    large: { canvas: 160, font: 'text-xl' },
  };

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 100);
    onClick?.();
  };

  return (
    <motion.div
      className="relative inline-flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div 
        className="cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <Canvas
          style={{ width: sizes[size].canvas, height: sizes[size].canvas }}
          camera={{ position: [0, 0, 3], fov: 50 }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <Sphere 
            color={color} 
            hoverColor={hoverColor}
            onClick={handleClick}
            isHovered={isHovered}
            isClicked={isClicked}
          />
        </Canvas>
      </div>
      {/* Bootstrap Icon + Text */}
      <div className="text-center mt-2">
        {icon && (
          <i className={`bi ${icon} me-1`} style={{ color: color }}></i>
        )}
        <span className={`${sizes[size].font} font-semibold text-gray-700`}>
          {text}
        </span>
      </div>
    </motion.div>
  );
}
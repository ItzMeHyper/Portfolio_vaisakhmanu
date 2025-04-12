import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const HeroExperience = () => {
  const cubeRef = useRef()

  useFrame(() => {
    cubeRef.current.rotation.y += 0.01
  })

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <ambientLight intensity={0.2} color="#1a1a40"/>
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        <OrbitControls makeDefault enableDamping dampingFactor={0.1} />
        
        <mesh ref={cubeRef}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="teal" />
        </mesh>
      </Canvas>
    </div>
  )
}

export default HeroExperience

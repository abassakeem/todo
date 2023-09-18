import React, { Suspense } from 'react'

import Earth from './../Earth'


import { OrbitControls, Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import CanvasLoader from './Loader'
export default function Waving() {
  return (
   
<div className="vh-100 ">
 
<Canvas

      shadows
      frameloop="demand"
      dpr={[1, 2]}
      camera={{ position: [-9.679, 1.54, 17.39], fov: 32 , near:0.1, far:200}}
      gl={{ preserveDrawingBuffer: true }
       
    }
      
     
>
  
      
    <directionalLight intensity={1}/>
   
       <pointLight intensity={1} />

    
     
    <Suspense fallback={CanvasLoader}>
      <Earth/>
      <OrbitControls 
      autoRotate
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI /2}
       
      />

    </Suspense>
      
       <ambientLight intensity={0.2}/>
       <Preload all/>
    </Canvas>
      
   </div>
  )
}


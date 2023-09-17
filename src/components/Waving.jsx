import React, { Suspense } from 'react'

import Wave from './../Wave'


import { OrbitControls, Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import CanvasLoader from './Loader'
export default function Waving() {
  return (
   
<div className="vh-100 bg-dark">
 
<Canvas

      shadows
      dpr={[1, 2]}
      camera={{ position: [1, 4.24, 8.9], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
     
>
  
      <OrbitControls enableZoom={false}
       
      />
    <directionalLight intensity={1}/>
   
       <pointLight intensity={1} />

    
     
    <Suspense fallback={CanvasLoader}>
      <Wave/>

    </Suspense>
      
       <ambientLight intensity={0.2}/>
       <Preload all/>
    </Canvas>
      
   </div>
  )
}


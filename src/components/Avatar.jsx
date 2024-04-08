import React, { Suspense } from 'react'

import Akeem from './../Akeem'


import { OrbitControls, Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import CanvasLoader from './Loader'
export default function Avatar() {
  return (
   
<div className="vh-100 w-100 avatar-container ">
 
<Canvas

      shadows
      dpr={[1, 2]}
      camera={{ position: [1, 4.24, 8.9], fov: 22 }}
      gl={{ preserveDrawingBuffer: true }}
     
>
  
      <OrbitControls enableZoom={false}
       
      />
    <directionalLight intensity={1}/>
   
       <pointLight intensity={1} />

    
     
    <Suspense fallback={<CanvasLoader/>}>
      <Akeem/>
      
    </Suspense>
      
       <ambientLight intensity={0.2}/>
       <Preload all/>
    </Canvas>
      
   </div>
  )
}


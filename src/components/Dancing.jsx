import React, { Suspense } from 'react'

import Dance from './../Dance'


import { OrbitControls, Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import CanvasLoader from './Loader'
export default function Dancing() {
  return (
   
<div className="vh-100 ">
 
<Canvas

      shadows
     
      camera={{ position: [2.190, 6.008, 7.49], fov: 20 }}
      gl={{ preserveDrawingBuffer: true }}
     
>
  
      <OrbitControls enableZoom={false}
       
      />
    <directionalLight intensity={1}/>
   
       <pointLight intensity={1} />

    
     
    <Suspense fallback={CanvasLoader}>
      <Dance/>

    </Suspense>
      
       <ambientLight intensity={0.2}/>
       <Preload all/>
    </Canvas>
      
   </div>
  )
}


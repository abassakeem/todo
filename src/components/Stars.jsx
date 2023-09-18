import { useState, useRef , Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import React from 'react'
import * as random from 'maath/random/dist/maath-random.esm'
import { Col, Container, Row } from "react-bootstrap";

const Stars=(props) => {
    const ref = useRef();
    const sphere = random.inSphere( new Float32Array(5000), {radius: 1.2})
   
  return (
    <group rotation={[0,0, Math.PI / 4]}>
        <Points ref={ref} position={sphere} stride={3} frustumCulled {...props}>
            <PointMaterial  
            transparent
            color= "black"
            size={0.2}
            sizeAttenuation = {true}
            depthWrite={false}
            />
        </Points>
    </group>
   
  )
}

const  StarsCanvas = () => {
    return ( 
        <Container>
         
                <div className="position-absolute top-0 left-0 right-0 bottom-0 z-index-n1  vw-100"
      >
                <Canvas camera={{position: [0,0,1]}}>
                    <Suspense fallback={null}>
                        <Stars/>
                    </Suspense>

            <Preload all/>
                </Canvas>

                </div>
             
        </Container>
        
    )

}
export default StarsCanvas;
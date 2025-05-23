import React, { useRef } from 'react'
import { Cube } from '../components'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Loader = () => {
   const Cuberef = useRef([]);
 
 
 
  const animation = () => {
    Cuberef.current.forEach((el, i) => {
      
      gsap.to(el,{
         rotateY: "+=360",
          delay: i * 1.4,
          
          duration: 3,
          ease: "linear",
          onComplete:()=>{
            if(i==9){
              animation()
            }
          }
      })
    });
  
  }
  useGSAP(animation);
  return (
    <div className=' absolute top-1/2 origin-center left-[10%]   flex   gap-0 '>
      {['L','O','A','D','I','N','G','.','.','.'].map((name, i) => (
        <Cube key={i} reffer={Cuberef} name={name} />
      ))}
    </div>
  )
}

export default Loader

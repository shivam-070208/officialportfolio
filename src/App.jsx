import React, {  useEffect, useState } from 'react'
import { Loader } from './routes'
import { Navbar,Home,About,Skill,Portfolio,Contact } from './components'



const App = () => {
  const [loading, setLoading] = useState(() => !window.location.hash);


   useEffect(() => {
     if (loading) {
       setTimeout(() => {
         setLoading(false);
       
       }, 4000);
     }
   }, [loading])
  return (
    <div className='w-full h-fit overflow-hidden' >
      {
        loading?<Loader />: (
       <div className='w-screen h-full'>
        <Navbar />
      

       <Home />
       <About />
       <Skill />
       <Portfolio />
       <Contact />
        </div>
     
        )

      }
    </div>
  )
}

export default App

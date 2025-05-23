import React, { useEffect, useState } from 'react'
import { Homeroute,Loader } from './routes'
import { Route,Routes } from 'react-router'
import { Navbar,Header } from './components'

const App = () => {
  const [loading,isLoading]=useState(true)
   useEffect(()=>{
    setTimeout(()=>{
      isLoading(false)
    },4000)
  },[])
  return (
    <div className='w-full h-full'>
      {
        loading?<Loader />: (
        <div className='w-full h-full'>
          <Header />
          <Routes>
            <Route path='/' element={<Homeroute />} />
          </Routes>
          <footer className=' fixed left-1/2 bottom-10 translate-x-[-50%] text-center '>
            <Navbar setCurrentPage={0} />
          </footer>
        </div>)
      }
    </div>
  )
}

export default App

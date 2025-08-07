

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route  } from 'react-router-dom'
import { Landing } from './pages/Landing'
import { Paragraph } from './pages/Paragraph'
import { Iphone } from './pages/Iphone'
import { FloatingCards } from './pages/FloatingCards'
import { CreditCards } from './pages/CreditCards'
import { Balls } from './pages/Balls'
import { Torch } from './pages/Torch'
Light
import { Ratings } from './pages/Ratings'
import CredFooter from './pages/CredFooter'
import { Light } from './pages/Light'

export default function App() {
  return (
    <>

     
     
      <div className="bg-black w-screen">
        <Landing/>
         <Paragraph/>
        <Iphone/> 
       <FloatingCards/>
     
         
         <CreditCards/>
         <Balls/>
         <Torch/>   
          <Ratings/>
          <Light/>
          <CredFooter/>
        
        {/* Other content */}
     
       </div>
    </>
  );
}

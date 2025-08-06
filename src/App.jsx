

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


export default function App() {
  return (
    <>

      <div className=''>
      <Landing></Landing>
         <Paragraph/>
         <Iphone/> 
     
      <div className="bg-black">
       <Card />
      </div>
         <FloatingCards/>
         <CreditCards/>
         <Balls/>
         <Torch/>   
        
        {/* Other content */}
     
       </div>
    </>
  );
}

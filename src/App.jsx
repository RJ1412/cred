
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route  } from 'react-router-dom'
import { Landing } from './pages/Landing'
import { Paragraph } from './pages/Paragraph'
import { Iphone } from './pages/Iphone'
function App() {
  const [count, setCount] = useState(0)

import Menu from "./page/Menu";



export default function App() {
  return (

    <>
      <div className=''>
      <Landing></Landing>
         <Paragraph/>
         <Iphone/>    
      </div>
       <div className="p-4">
      <Menu />
      {/* Other content */}
    </div>
   </>
  );

   
 

}

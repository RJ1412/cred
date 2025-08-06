import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Paragraph } from './pages/Paragraph';
import { Iphone } from './pages/Iphone';
Card// import { Menu } from './pages/Landing'; // ✅ Use only the correct import
import './App.css';
import { Card } from './pages/Card';

export default function App() {
  return (
    <>
 
        
        {/* Other content */}
      
      <div className="bg-black">
        
        <Landing />
        <Paragraph />
        <Iphone />
       <Card />
      </div>
       
    </>
  );
}

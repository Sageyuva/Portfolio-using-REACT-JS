import React from 'react'
import { Route, Routes } from "react-router-dom";
import About from './Routes/About';
import Contact from './Routes/Contact';
import Home from './Routes/Home';
import Project from './Routes/Project';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Project' element={<Project />}/>
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact />}/>
      </Routes>
    </>
  );
}

export default App;


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React,{useState}from 'react';
import Nav from './Component/Nav';
import Home from './pages/Home';
import Credits from './pages/Credits';
import Debits from './pages/Debits';
import Content from './pages/Content';

function App() {





  return (
    <div className="App">
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/Home" element = {<Home />}/>
      <Route path = "/Content" element = {<Content />}/>
      <Route path = "/Credits" element = {<Credits/>}/>
      <Route path = "/Debits" element ={<Debits/>}/>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;

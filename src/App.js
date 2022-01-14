
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import React,{useState}from 'react';
import Nav from './Component/Nav';
import Home from './pages/Home';
import Credits from './pages/Credits';
import Debits from './pages/Debits';
import Content from './pages/Content';


function App() {

  const [accountBalance, setAccountBalance] = useState(14568.27)
  const [username, setUsername] = useState("")


  return (
    <div className="App">
      
    <BrowserRouter>
    
      <Nav/>
      <Routes>
      <Route path = "/" element = {<Home setUsername = {setUsername}/>} />
      <Route path = "/Home" element = {<Home  setUsername = {setUsername}/>}/>
      <Route path = "/Content" element = {<Content accountBalance = {accountBalance} username = {username}/>}/>
      <Route path = "/Credits" element = {<Credits/>}/>
      <Route path = "/Debits" element ={<Debits/>}/>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;

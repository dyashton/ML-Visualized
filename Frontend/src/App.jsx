import { useState } from 'react'
import './App.scss'
import Sidebar from './Components/Sidebar/Sidebar'
import Home from './Pages/Home/Home'
import LinearRegression from './Pages/LinearRegression/LinearRegression'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/linearregression" element={<LinearRegression />} />
      </Routes>
    </div>
  );
}

export default App

import { useState } from 'react'
import './App.css'
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd'; 
import Navbar from './components/Navbar';
function App() {
  const location = useLocation();
  // npm install antd @ant-design/icons react-redux @reduxjs/toolkit axios chart.js html-react-parser millify moment react-chartjs-2

  return (
    <>
      <div className='app'>
        <div className="navbar">
          <Navbar/>
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes location={location} key={location.pathname}>
                <Route path='/' element={''}/>
                <Route path='/exchanges' element={''}/>
                <Route path='/cryptocurrencies' element={''}/>
                <Route path='/crypto/:coinId' element={''}/>
                <Route path='/news' element={''}/>
              </Routes>
            </div>
          </Layout>
        </div>
        <div className="footer">

        </div>
      </div>
    </>
  )
}

export default App

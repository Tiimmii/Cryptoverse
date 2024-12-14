import { useState } from "react";
import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Exchanges from "./components/Exchanges";
import Cryptocurrencies from "./components/Cryptocurrencies";
import CryptoDetails from "./components/CryptoDetails";
import News from "./components/News";
function App() {
  const location = useLocation();
  // npm install antd @ant-design/icons react-redux @reduxjs/toolkit axios chart.js html-react-parser millify moment react-chartjs-2

  return (
    <>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/exchanges" element={<Exchanges />} />
                <Route
                  path="/cryptocurrencies"
                  element={<Cryptocurrencies />}
                />
                <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                <Route path="/news" element={<News />} />
              </Routes>
            </div>
          </Layout>
          <div className="footer">
            <Typography.Title
              level={5}
              style={{ color: "white", textAlign: "center" }}
            >
              Cryptoverse <br />
              All rights reserved
            </Typography.Title>
            <Space>
              <Link to={"/"}>Home</Link>
              <Link to={"/exchanges"}>Exchanges</Link>
              <Link to={"/cryptocurrencies"}>Cryptocurrencies</Link>
              <Link to={"/News"}>News</Link>
            </Space>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
//used redux for fetching data.
//1. npm install @reduxjs/toolkit
//2. create folder services in src. create cryptoApi.js and paste options there
//3. create folder app in src and create store.js and paste code there
//4. in main.jsx make sure to import store from app. also import provider and wrap the <App/> with Provider setting store to store
import { useGetCryptosQuery } from "../services/cryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import Loader from "./Loader";

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(12);
  const globalStats = data?.data?.stats;
  return (
    <>
      <Typography.Title level={2} className="heading">
        Global Crypto Stats
      </Typography.Title>
      {isFetching ? (
        <Loader />
      ) : (
        <Row>
          <Col span={12}>
            <Statistic
              title="Total Cryptocurrencies"
              value={globalStats.total}
            />
            asasas
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Exchanges"
              value={millify(globalStats.totalExchanges)}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Market Cap"
              value={millify(globalStats.totalMarketCap)}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total 24th Volume"
              value={millify(globalStats.total24hVolume)}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Markets"
              value={millify(globalStats.totalMarkets)}
            />
          </Col>
        </Row>
      )}

      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">
          Top Cryptocurrencies in the world
        </Typography.Title>
        <Typography.Title level={3} className="Show more">
          <Link to={"/cryptocurrencies"}>Show More</Link>
        </Typography.Title>
      </div>
      {isFetching ? <Loader /> : <Cryptocurrencies simplified />}
      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">
          Latest Crypto News
        </Typography.Title>
        <Typography.Title level={3} className="Show more">
          <Link to={"/news"}>Show More</Link>
        </Typography.Title>
      </div>
      {isFetching ? <Loader /> : <News simplified />}
    </>
  );
};

export default HomePage;

import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 12 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = cryptoList?.data?.coins.filter((coins) =>
      coins.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
    console.log(filteredData);
  }, [cryptoList, searchTerm]);

  if (isFetching) return <Loader/>;
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={12} lg={6} className="crypto-card" key={currency?.id}>
            <Link to={`/crypto/${currency?.uuid}`}>
              <Card
                title={`${currency?.rank}. ${currency?.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;

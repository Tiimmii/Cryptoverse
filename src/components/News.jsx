import React, { useState } from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'
import { useGetNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi'
const { Text, Title } = Typography
const { Option } = Select

const demoImageUrl = `https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News`

const News = ({simplified}) => {
    const { data: cryptos } = useGetCryptosQuery (100); 
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
    const { data: cryptoNews } =  useGetNewsQuery({ newsCategory: newsCategory, count: simplified? 6: 120})
    console.log(cryptos)
    if(!cryptoNews?.data) return 'Loading....'
  return (
    <Row gutter={[24, 24]}>
        {!simplified && (
            <Col span={24}>
                <Select
                    showSearch
                    className='select-news'
                    placeholder= 'Select a Crypto'
                    optionFilterProp='children'
                    onChange={(value)=>setNewsCategory(value)}
                    filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}

                >
                <Option value='Cryptocurrency'>Cryptocurrency</Option>
                {cryptos?.data.coins.map((coin)=> <Option value={coin.name}>{coin.name}</Option>)}
                </Select>
            </Col>
        )}
        {cryptoNews.data.map((news, i)=>(
            <Col xs={24} sm={12} lg={8} key={i}>
                <Card hoverable className='news-card'>
                    <a href={news.link} target='_blank' rel={'noreferer'}>
                        <div className='news-image-container'>
                            <Title className='news-title' level={4}>{news.title.length > 57? `${news.title.substring(0, 57)} ...`: `${news.title}`}</Title>
                            <img src={news?.photo_url || demoImageUrl} alt='news'/>
                        </div>
                        <div className='provider-container' style={{ marginTop: '1rem'}}>
                            <div>
                                <Avatar src={news.source_favicon_url} alt=''/>
                                <Text className='provider-name'>{news.source_name}</Text>
                            </div>
                            <Text>{moment(news.published_datetime_utc).startOf('ss').fromNow()}</Text>
                        </div>
                    </a>
                </Card>
            </Col>
        ))}
    </Row>
  )
}

export default News

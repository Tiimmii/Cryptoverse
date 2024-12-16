import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'
import { useGetNewsQuery } from '../services/cryptoNewsApi'
const { Text, Title } = Typography
const { Option } = Select

const demoImageUrl = `https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News`

const News = ({simplified}) => {
    const { data: cryptoNews } =  useGetNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified? 6: 12})
    console.log(cryptoNews)
    if(!cryptoNews?.data) return 'Loading....'
  return (
    <Row gutter={[24, 24]}>
        {cryptoNews.data.map((news, i)=>(
            <Col xs={24} sm={12} lg={8} key={i}>
                <Card hoverable className='news-card'>
                    <a href={news.link} target='_blank' rel={'noreferer'}>
                        <div className='news-image-container'>
                            <Title className='news-title' level={4}>{news.title > 10? `${news.title.substring(0, 10)} ...`: `${news.title}`}</Title>
                            <img src={news?.photo_url || demoImageUrl} alt='news'/>
                        </div>
                    </a>
                </Card>
            </Col>
        ))}
    </Row>
  )
}

export default News

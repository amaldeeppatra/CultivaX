import React from 'react'
import './news.css'
import NewsCard from './NewsCard'

const News = () => {
  return (
    <>
    <h1 className="news">Trending News</h1>
    <div className='news-card-container'>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
    </div>
    </>
  )
}

export default News
import React from 'react'
import './newscard.css'

const NewsCard = () => {
  return (
    <>
    <main class="container">
        <div class="news-card">
            <img src="https://via.placeholder.com/400x200" alt="News Image" class="news-image"/>

            <div class="news-content">
                <h2 class="news-title">Breaking News: New Technology Innovation</h2>
                <p class="news-summary">A groundbreaking innovation in technology has been announced today, promising to revolutionize the industry and change the way we live and work...</p>
                <a href="#" class="read-more">Read More</a>
            </div>
        </div>
    </main>
    </>
  )
}

export default NewsCard
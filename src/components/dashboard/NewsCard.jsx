import React from 'react';
import './newscard.css';

const NewsCard = ({ image, title, summary, link }) => {
  return (
    <main className="container">
      <div className="news-card">
        <img src={image} alt="News Image" className="news-image" />
        <div className="news-content">
          <h2 className="news-title">{title}</h2>
          <p className="news-summary">{summary}</p>
          <a href={link} className="read-more">Read More</a>
        </div>
      </div>
    </main>
  );
};

export default NewsCard;

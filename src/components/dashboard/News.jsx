import React from 'react';
import './news.css';
import NewsCard from './NewsCard';

const newsData = [
  {
    image: "https://images.unsplash.com/photo-1498408040764-ab6eb772a145?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "New Techniques for Sustainable Crop Growth",
    summary: "Recent agricultural technology advances are helping farmers grow crops more sustainably, with innovations in soil management and irrigation boosting yields and reducing environmental impact.",
    link: "#"
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1664116928607-896124327b11?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Alert: New Crop Disease Detected",
    summary: "A new crop disease has been detected in several regions, threatening farmers' yields. Experts are developing strategies to control the outbreak and offer preventive guidance.",
    link: "#"
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1680322474521-60fcadf0a416?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Tips for a Successful Harvest Season",
    summary: "As harvest season approaches, farmers are advised on best practices for maximizing crop quality and quantity. Key tips include optimal harvesting times and post-harvest handling techniques.",
    link: "#"
  }
];

const News = () => {
  return (
    <>
      <h1 className="news">Trending News</h1>
      <div className='news-card-container'>
        {newsData.map((news, index) => (
          <NewsCard
            key={index}
            image={news.image}
            title={news.title}
            summary={news.summary}
            link={news.link}
          />
        ))}
      </div>
    </>
  );
}

export default News;

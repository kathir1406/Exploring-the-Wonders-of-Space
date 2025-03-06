import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Discoveries.css';

const spaceMissions = [
  {
    name: "Sputnik 1",
    year: 1957,
    agency: "Soviet Union",
    description: "First artificial satellite to orbit Earth, marking the start of the space age.",
    img: "https://cosmosmagazine.com/wp-content/uploads/2020/04/171004_sputnik_vision.jpg"
  },
  {
    name: "Vostok 1",
    year: 1961,
    agency: "Soviet Union",
    description: "Carried Yuri Gagarin, the first human in space.",
    img: "http://bisbos.com/images_spacecraft/vostok/vostok_orbit1_1024.jpg"
  },
  {
    name: "Apollo 11",
    year: 1969,
    agency: "NASA",
    description: "First human moon landing by Neil Armstrong and Buzz Aldrin.",
    img: "https://www.nasa.gov/wp-content/uploads/2019/07/edu_srch_celebrate_the_50th_anniversary_apollo11.jpg?resize=1536,1198"
  },
  {
    name: "Hubble Space Telescope",
    year: 1990,
    agency: "NASA/ESA",
    description: "Revolutionized astronomy with deep-space images.",
    img: "https://cdn.esahubble.org/archives/images/screen/hubble_earth_sp01.jpg"
  },
  {
    name: "Perseverance Rover",
    year: 2021,
    agency: "NASA",
    description: "Mars rover searching for signs of past life.",
    img: "https://www.nasa.gov/wp-content/uploads/2020/07/pia23764.jpg"
  },
  {
    name: "Europa Clipper",
    year: 2024,
    agency: "NASA",
    description: "Mission to explore Jupiter's moon Europa and investigate its potential for life.",
    img: "https://blogs.nasa.gov/europaclipper/wp-content/uploads/sites/378/2024/10/e3-pia26068-europa-clipper-spacecraft-stylized-illustration.jpg?resize=1024,576"
  }
];

export default function Discoveries() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://api.spaceflightnewsapi.net/v3/articles?_limit=5');
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching space news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="discoveries-section">
      <h2>Space Discoveries: Past & Present</h2>

      {/* Space Exploration Milestones */}
      <div className="missions-container">
        <h3>Space Exploration Milestones</h3>
        <div className="missions-grid">
          {spaceMissions.map((mission) => (
            <div key={mission.name} className="mission-card">
              <img src={mission.img} alt={mission.name} className="mission-image" />
              <h4>{mission.year}: {mission.name}</h4>
              <p><strong>Agency:</strong> {mission.agency}</p>
              <p>{mission.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Latest Space News */}
      <h3>Latest Space News</h3>
      <div className="news-container">
        {news.map((article) => (
          <div key={article.id} className="news-item">
            <img src={article.imageUrl} alt={article.title} className="news-image" />
            <div className="news-content">
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="news-title">
                <strong>{article.title}</strong>
              </a>
              <p className="news-date">{new Date(article.publishedAt).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import "./Home.css"; // Ensure this file contains the provided CSS

const Home = () => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <div className="home-container">
        <h1>Exploring the Wonders of Space</h1>
      </div>

      {/* Introduction Section */}
      <div className="intro-section">
        <p>
          Space exploration is the pursuit of understanding the vast universe beyond Earth.
          From ancient stargazing to modern space missions, humanity has always been fascinated by the cosmos.
          Advancements in technology have enabled us to explore planets, study distant galaxies, 
          and uncover the mysteries of black holes and dark matter.
        </p>
      </div>

      {/* Sections for Additional Information */}
      <div className="section">
        <h2>Our Journey into Space</h2>
        <p>
          Space agencies like NASA, ISRO, ESA, and JAXA continue to push boundaries with missions to Mars, 
          the Moon, and beyond. With the rise of private space exploration companies, the dream of interplanetary travel 
          is closer than ever.
        </p>
        <img src="https://akm-img-a-in.tosshub.com/indiatoday/2024-05/sky%20crane.gif?VersionId=fpjMmzMfVqe.4.zkQivgllsuyQrEkXdn" alt="Mars Exploration" className="space-image" />
      </div>

      <div className="section">
        <h2>The Future of Space Travel</h2>
        <p>
          The future of space exploration includes colonizing Mars, deep-space travel, 
          and even the search for extraterrestrial life. As we expand our knowledge of the universe, 
          we unlock endless possibilities for scientific discoveries and human advancement.
        </p>
        <img src="https://cdn.mos.cms.futurecdn.net/2xeVuMp55c3faoja6JEQuf.jpg" alt="Astronaut in Space" className="space-image" />
      </div>
    </div>
  );
};

export default Home;

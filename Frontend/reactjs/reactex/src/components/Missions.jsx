import React from 'react';
import "./Missions.css";

const missionsData = [
  {
    name: "Mariner 10",
    year: 1973,
    agency: "NASA",
    description: "First spacecraft to visit Mercury.",
    img: "https://www.nasa.gov/wp-content/uploads/2023/03/390819main_Mariner10_full.jpg"
  },
  {
    name: "MESSENGER",
    year: 2004,
    agency: "NASA",
    description: "Orbited and mapped Mercury in detail.",
    img: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/07/messenger.jpg?w=768&h=576&fit=clip&crop=faces%2Cfocalpoint"
  },
  {
    name: "Venera 7",
    year: 1970,
    agency: "USSR",
    description: "First spacecraft to land on Venus.",
    img: "https://www.gardenofmemory.net/content/images/size/w1200/2023/08/venus-landing.png"
  },
  {
    name: "Parker Solar Probe",
    year: 2018,
    agency: "NASA",
    description: "Studying Venus’ atmosphere and the Sun.",
    img: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/internal_resources/5657/Parker_Swingby-1.jpeg?w=1600&h=900&fit=clip&crop=faces%2Cfocalpoint"
  },
  {
    name: "Chandrayaan-3",
    year: 2023,
    agency: "ISRO",
    description: "India’s successful soft landing on the Moon.",
    img: "https://www.isro.gov.in/media_isro/image/index/Chandrayaan3/R_img4.png.webp"
  },
  {
    name: "Apollo 11",
    year: 1969,
    agency: "NASA",
    description: "First human landing on the Moon.",
    img: "https://www.nasa.gov/wp-content/uploads/2019/07/edu_srch_celebrate_the_50th_anniversary_apollo11.jpg?resize=1536,1198"
  },
  {
    name: "Mars Orbiter Mission",
    year: 2013,
    agency: "ISRO",
    description: "First Indian Mars orbiter.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREXSkkX9ASJl52RB8aXRytZjco6KBDMmgA7BS-ZNoTG7XT5xMe6Xaz2_DFlTBeStRxBpQ&usqp=CAU"
  },
  {
    name: "Perseverance Rover",
    year: 2020,
    agency: "NASA",
    description: "Studying Mars' habitability and collecting samples.",
    img: "https://www.nasa.gov/wp-content/uploads/2020/07/pia23764.jpg"
  },
  {
    name: "Voyager 2",
    year: 1986,
    agency: "NASA",
    description: "Only spacecraft to visit Uranus.",
    img: "https://media.rnztools.nz/rnz/image/upload/s--yT80js_I--/ar_16:10,c_fill,f_auto,g_auto,q_auto,w_1050/v1691204159/4L4QVUR_054_novaeson1000015h_jpg?_a=BACCd2AD"
  },
  {
    name: "Cassini-Huygens",
    year: 1997,
    agency: "NASA/ESA",
    description: "Studied Saturn’s rings and moons.",
    img: "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2004/06/cassini-huygens_approaches_saturn/10321974-2-eng-GB/Cassini-Huygens_approaches_Saturn_card_medium.jpg"
  }
];

export default function Missions() {
  return (
    <div className="missions-container">
      <h2>🛰️ Space Missions</h2>
      <div className="missions-grid">
        {missionsData.map((mission, index) => (
          <div key={index} className="mission-card">
            <h3>{mission.name}</h3>
            <img src={mission.img} alt={mission.name} className="mission-image" />
            <p><strong>Year:</strong> {mission.year}</p>
            <p><strong>Agency:</strong> {mission.agency}</p>
            <p>{mission.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

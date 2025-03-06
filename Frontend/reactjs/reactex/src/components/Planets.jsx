import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Planets.css";

export default function Planets() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await axios.get(
          "https://api.le-systeme-solaire.net/rest/bodies/"
        );
        const filteredPlanets = response.data.bodies.filter(
          (body) => body.isPlanet
        );
        setPlanets(filteredPlanets);
      } catch (error) {
        console.error("Error fetching planet data:", error);
      }
    };

    fetchPlanets();
  }, []);

  const planetData = [
    { name: "Mercury", img: "https://space-facts.com/wp-content/uploads/mercury.png", desc: "Closest planet to the Sun. Smallest planet in the Solar System. No atmosphere, extreme temperatures. No moons." },
    { name: "Venus", img: "https://space-facts.com/wp-content/uploads/venus.png", desc: "Similar in size to Earth. Thick atmosphere causes a greenhouse effect. Hottest planet in the Solar System. No moons." },
    { name: "Earth", img: "https://space-facts.com/wp-content/uploads/earth.png", desc: "The only planet known to support life. 71% covered in water. Has one natural satellite: the Moon." },
    { name: "Mars", img: "data:image/jpeg;base64,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", desc: "Known as the 'Red Planet' due to iron oxide. Has the tallest volcano, Olympus Mons. Two moons: Phobos & Deimos." },
    { name: "Jupiter", img: "https://space-facts.com/wp-content/uploads/jupiter.png", desc: "Largest planet in the Solar System. Has the Great Red Spot, a giant storm. 79 known moons, including Ganymede." },
    { name: "Saturn", img: "https://space-facts.com/wp-content/uploads/saturn.png", desc: "Famous for its rings. Second-largest planet. 83 known moons, including Titan." },
    { name: "Uranus", img: "https://dims.apnews.com/dims4/default/6482978/2147483647/strip/true/crop/1996x1329+0+1/resize/320x213!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe6%2Fb0%2F007d31e96adbde4c34b9dee49868%2F07f29ef06bec451fb3b2c26edc7f86e2", desc: "Rotates on its side. Ice giant composed mostly of water, ammonia, and methane. 27 moons, including Titania and Oberon." },
    { name: "Neptune", img: "https://space-facts.com/wp-content/uploads/neptune.png", desc: "Farthest planet from the Sun. Has the strongest winds. 14 moons, including Triton." }
  ];


  const moonsData = [
    { name: "The Moon", planet: "Earth", img: "https://space-facts.com/wp-content/uploads/moon.png", desc: "The fifth-largest moon. Causes Earth's tides. Has a thin exosphere." },
    { name: "Phobos", planet: "Mars", img: "https://space-facts.com/wp-content/uploads/phobos.png", desc: "Small, irregularly shaped. Believed to be a captured asteroid." },
    { name: "Deimos", planet: "Mars", img: "https://space-facts.com/wp-content/uploads/deimos.png", desc: "Smaller than Phobos. Likely captured asteroid." },
    { name: "Ganymede", planet: "Jupiter", img: "https://space-facts.com/wp-content/uploads/ganymede.png", desc: "Largest moon in the Solar System. Has a magnetic field and ice surface." },
    { name: "Europa", planet: "Jupiter", img: "https://space-facts.com/wp-content/uploads/europa.png", desc: "Subsurface ocean, potential site for life." },
    { name: "Titan", planet: "Saturn", img: "https://space-facts.com/wp-content/uploads/titan.png", desc: "Thick atmosphere and liquid methane lakes." },
    { name: "Enceladus", planet: "Saturn", img: "data:image/jpeg;base64,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", desc: "Has geysers that shoot water into space." },
    { name: "Triton", planet: "Neptune", img: "https://space-facts.com/wp-content/uploads/triton.png", desc: "Orbits Neptune backward, possibly a captured Kuiper Belt object." }
  ];

  return (
    <div className="planets-conta+iner">
      <h1>Explore the Solar System</h1>
      <p>Discover the planets and moons in our solar system.</p>

      {/* NASA Solar System Exploration Button */}
      <a
        href="https://eyes.nasa.gov/apps/solar-system/#/home"
        target="_blank"
        rel="noopener noreferrer"
        className="explore-button"
      >
        Explore the Solar System
      </a>

      {/* Planet Information */}
      <h2> Planets</h2>
      <div className="planet-info">
        {planetData.map((planet) => (
          <div key={planet.name} className="planet-card">
            <h2>{planet.emoji} {planet.name}</h2>
            <img src={planet.img} alt={planet.name} className="planet-image" />
            <p>{planet.desc}</p>
          </div>
        ))}
      </div>

      {/* Moon Information */}
      <h2> Moons of the Solar System</h2>
      <div className="moon-info">
        {moonsData.map((moon) => (
          <div key={moon.name} className="moon-card">
            <h3>{moon.name} ({moon.planet})</h3>
            <img src={moon.img} alt={moon.name} className="moon-image" />
            <p>{moon.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

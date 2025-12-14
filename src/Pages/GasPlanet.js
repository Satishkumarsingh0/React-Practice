import React from "react";

const GasPlanet = () => {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Plut", isGasPlanet: true },
  ];
  return (
    <div>
      {planets.map(
        (planet) =>
          planet.isGasPlanet && <h3 key={planet.name}>{planet.name}</h3>
      )}
    </div>
  );
};

export default GasPlanet;

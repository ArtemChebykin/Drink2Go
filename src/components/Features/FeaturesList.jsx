import React from "react";
import FeatureList from "./FeaturesItem";

const Features = () => {
  return (
    <div className="features">
      <div className="features__wrapper container reset-default">
        <h1 className="features__head subheading">Преимущества</h1>
        <h2 className="features__subtitle">Главные причины выбрать Drink2Go</h2>
        <FeatureList />
      </div>
    </div>
  );
};

export default Features;

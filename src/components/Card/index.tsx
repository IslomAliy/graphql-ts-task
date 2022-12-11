import React from "react";
import { FixedSizeList as List } from "react-window";

type CountryProps = {
  name: string;
  emoji: any;
  native: string;
  capital: string;
  currency: string;
};

const Card = ({ name, emoji, native, capital, currency }: CountryProps) => {
  return (
    <div className="card">
      <div className="info">
        <div className="country-flag">{emoji}</div>
        <div>
          <p className="country-name">{name}</p>
          <p className="info-text">
            Captial: <span>{capital}</span>
          </p>
          <p className="info-text">
            Native: <span> {native}</span>
          </p>
          <p className="info-text">
            Currency: <span>{currency}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;

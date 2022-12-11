import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { request } from "../utils/axios";
import { Link } from "react-router-dom";

type CountriesProps = {
  currentPage: number;
  postsPerPage: number;
  countries: [];
  setCountries: React.Dispatch<React.SetStateAction<any[]>>;
};

const Countries = ({
  currentPage,
  postsPerPage,
  countries,
  setCountries,
}: CountriesProps) => {
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = countries?.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="container">
      {currentPosts?.map((elm) => (
        <Link to={`country/${elm.code}`} className="card" key={elm.code}>
          <Card
            name={elm.name}
            capital={elm.capital}
            native={elm.native}
            emoji={elm.emoji}
            currency={elm.currency}
          />
        </Link>
      ))}
    </div>
  );
};

export default Countries;

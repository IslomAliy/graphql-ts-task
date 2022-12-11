import { useEffect, useState } from "react";
import { request } from "../../utils/axios";
import { useParams } from "react-router-dom";
import InfoCard from "./InfoCard";
import Comments from "./Comments";

const CountryProps = {
  emoji: "",
  name: "",
  phone: "",
  code: "",
  capital: "",
  currency: "",
  native: "",
};

const CountryDetails = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(CountryProps);

  useEffect(() => {
    request(
      `query getAllCountries($countryCode: ID!) {
            country(code: $countryCode) {
              name
              code
              emoji
              phone
              currency
              native
            }
          }
          `,
      { countryCode: id }
    ).then((res) => {
      setCountry(res.data.data.country);
    });
  }, []);

  return (
    <div className="container">
      <div className="countrydetails-wrapper">
        <InfoCard
          emoji={country.emoji}
          name={country.name}
          phone={country.phone}
          code={country.code}
          capital={country.capital}
          currency={country.currency}
          native={country.native}
        />
        <Comments />
      </div>
    </div>
  );
};

export default CountryDetails;

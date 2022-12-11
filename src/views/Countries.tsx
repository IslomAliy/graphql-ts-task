import Card from "../components/Card";
import { Link } from "react-router-dom";

type CountriesProps = {
  currentPage: number;
  postsPerPage: number;
  countries: [];
};

const Countries = ({
  currentPage,
  postsPerPage,
  countries,
}: CountriesProps) => {
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts: typeof Countries[] = countries?.slice(
    firstPostIndex,
    lastPostIndex
  );

  return (
    <div className="container">
      {currentPosts?.map((elm: any) => (
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

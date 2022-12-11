import { useEffect, useState } from "react";
import { request } from "../../utils/axios";
import Pagination from "../../components/Pagination";
import Countries from "../Countries";

function Home() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage, setPostsPerPage] = useState<number>(9);
  const [countries, setCountries] = useState<[]>([]);

  useEffect(() => {
    request(`query getAllCountries {
        countries {
          name
          emoji
          capital
          native
          code
          currency
        }
      }`).then((res) => {
      setCountries(res.data.data.countries);
    });
  }, []);

  return (
    <>
      <Countries
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        countries={countries}
      />
      <Pagination
        totalPosts={countries.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}

export default Home;

"use client";

import { useEffect, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";

import { getToken, getMovies } from "@/app/actions";
import Movie from "@/app/components/Movie";

const Search = () => {
  const [token, setToken] = useState(" ");
  const [movies, setMovies] = useState({ data: [], totalPages: 0 });
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchToken = async () => {
      const t = await getToken();
      setToken(t);
    };

    const fetchInitialData = async () => {
      const movies = await getMovies(token, { page: currentPage, limit: 25 });
      setMovies(movies);
    };

    if (token.length > 1) {
      fetchInitialData();
    } else {
      fetchToken();
      fetchInitialData();
    }
  }, [token, currentPage]);
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {movies.data &&
          movies.data.map(({ id, title, posterUrl }) => {
            return (
              <Movie
                key={id}
                id={id}
                token={token}
                posterUrl={posterUrl}
                title={title}
              />
            );
          })}
      </section>
      <section>
        <ResponsivePagination
          current={currentPage}
          total={movies.totalPages}
          onPageChange={setCurrentPage}
        />
      </section>
    </>
  );
};

export default Search;

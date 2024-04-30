"use client";

import { useEffect, useState } from "react";

import { getToken, getMovies } from "@/app/actions";
import Movie from "@/app/components/Movie";

const Search = () => {
  const [token, setToken] = useState("");
  const [movies, setMovies] = useState({ data: [], totalPages: 0 });

  useEffect(() => {
    const fetchInitialData = async () => {
      const t = await getToken();
      setToken(t);

      const movies = await getMovies(t);
      setMovies(movies);
    };

    fetchInitialData();
  }, []);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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
  );
};

export default Search;

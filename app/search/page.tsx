"use client";

import { useEffect, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";

import { getToken, getMovies } from "@/app/actions";
import Movie from "@/app/components/Movie";
import Icon from "@/app/components/Icon";
import Loading from "@/app/components/Loading";
import SearchBar from "@/app/components/SearchBar";

const Search = () => {
  const [token, setToken] = useState(" ");
  const [movies, setMovies] = useState({ data: [], totalPages: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchToken = async () => {
      const t = await getToken();
      setToken(t);
    };

    const reloadData = async () => {
      setMovies({ data: [], totalPages: 0 });

      const movies = await getMovies(token, {
        page: currentPage,
        limit: 25,
        search: "",
        genre: "",
      });
      setMovies(movies);
    };

    if (token.length > 1) {
      reloadData();
    } else {
      fetchToken();
      reloadData();
    }
  }, [token, currentPage]);

  if (error && movies.data?.length < 1) {
    return (
      <>
        <SearchBar token={token} setMovies={setMovies} setError={setError} movieData={movies} />
        <p className="font-bold text-bluey text-5xl font-display flex flex-col min-h-[75vh] items-center justify-center">
          Bummer! No results found ...
        </p>
      </>
    );
  }
  return (
    <>
      <SearchBar token={token} setMovies={setMovies} setError={setError} movieData={movies} />
      {movies.data && movies.data.length > 0 ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {movies.data.map(({ id, title, posterUrl }) => {
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
      ) : (
        <Loading />
      )}
      {movies.totalPages > 1 && (
        <nav className="flex justify-center items-center  max-w-[352px]">
          <ResponsivePagination
            current={currentPage}
            total={movies.totalPages}
            onPageChange={setCurrentPage}
            previousLabel={<Icon name="backarrow" />}
            nextLabel={<Icon name="forwardarrow" />}
          />
        </nav>
      )}
    </>
  );
};

export default Search;

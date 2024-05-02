"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getMovies } from "@/app/actions";

import Icon from "@/app/components/Icon/index";

type SearchBarProps = {
  token: string;
  setMovies: Dispatch<SetStateAction<{ data: never[]; totalPages: number }>>;
  setError: Dispatch<SetStateAction<boolean>>;
};

const SearchBar = ({ setError, setMovies, token }: SearchBarProps) => {
  const [resultCount, setResultCount] = useState(0);
  const [searchTitle, setSearchTitle] = useState(" ");
  const [searchGenre, setSearchGenre] = useState(" ");

  useEffect(() => {
    const runQuery = async () => {
      setMovies({ data: [], totalPages: 0 });

      const movies = await getMovies(token, {
        page: 1,
        limit: 25,
        search: searchTitle,
        genre: "",
      });
      setMovies(movies);
      setResultCount(movies.data?.length);
      movies.data?.length > 0 ? setError(false) : setError(true);
    };

    runQuery();
  }, [token, searchTitle, setError, setMovies]);

  return (
    <section className="mb-24 w-full max-w-[954px]">
      <h2 className="text-bluey font-bold text-5xl mb-6">
        Find your next fav ❤️
      </h2>
      {resultCount > 0 && searchTitle.length > 1 && (
        <p className="uppercase text-gravy font-display font-medium mb-6">
          Found <strong>{resultCount}</strong>{" "}
          {resultCount > 1 ? "movies" : "movie"} 😊
        </p>
      )}

      <div className="relative border-2 border-bluey rounded-full min-h-11 flex items-center justify-between w-full">
        <div className="absolute left-6">
          <Icon name="magnifyingglass" />
        </div>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search ..."
          className="pl-14 w-full min-h-11 bg-transparent rounded-full outline-blue-200 outline-offset-8 uppercase text-gravy font-display text-xl font-medium"
          onChange={(event) => setSearchTitle(event.target.value)}
        />
      </div>
    </section>
  );
};

export default SearchBar;

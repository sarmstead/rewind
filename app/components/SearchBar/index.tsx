"use client";

import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { getGenres, getMovies } from "@/app/actions";
import Icon from "@/app/components/Icon/index";

type SearchBarProps = {
  token: string;
  setMovies: Dispatch<SetStateAction<{ data: never[]; totalPages: number }>>;
  setError: Dispatch<SetStateAction<boolean>>;
};

const SearchBar = ({ setError, setMovies, token }: SearchBarProps) => {
  const [resultCount, setResultCount] = useState(0);
  const [searchTitle, setSearchTitle] = useState(" ");
  const [searchGenre, setSearchGenre] = useState("");
  const [genreMenuOpen, setGenreMenuOpen] = useState(false);
  const [genreList, setGenreList] = useState([]);

  const genreListRef = useRef<HTMLUListElement>(null);

  const genres = useMemo(async () => {
    const genres = await getGenres(token);
    setGenreList(genres.data?.map((genre: { title: string }) => genre.title));
  }, [token]);

  const selectGenre = (genre: string) => {
    const list = genreListRef.current;
    document
      .querySelector(".genres__item--selected")
      ?.classList.remove("genres__item--selected");

    if (list) {
      Array.from(list?.children).forEach((child) => {
        if (
          (child as HTMLElement).innerText.toLowerCase() === genre.toLowerCase()
        ) {
          (child as HTMLElement).firstElementChild?.classList.add(
            "genres__item--selected",
          );
        }

        return;
      });
    }

    genre === "--" ? setSearchGenre(" ") : setSearchGenre(genre);
    setGenreMenuOpen(false);
  };

  useEffect(() => {
    const runQuery = async () => {
      setMovies({ data: [], totalPages: 0 });

      const movies = await getMovies(token, {
        page: 1,
        limit: 25,
        search: searchTitle,
        genre: searchGenre,
      });

      setMovies(movies);
      setResultCount(movies.data?.length);
      movies.data?.length > 0 ? setError(false) : setError(true);
    };

    runQuery();
  }, [searchGenre, searchTitle, setError, setMovies, token]);

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
        <div className="relative">
          {searchGenre.length <= 1 ? (
            <button
              className="flex gap-2 items-center uppercase text-gravy font-display text-xl font-medium px-6"
              onClick={() => setGenreMenuOpen((prevVal) => !prevVal)}
            >
              Genres
              {genreMenuOpen ? (
                <Icon name="caretup" />
              ) : (
                <Icon name="caretdown" />
              )}
            </button>
          ) : (
            <button
              className="uppercase flex items-center gap-3 text-white bg-bluey rounded-full font-display text-xl font-medium ml-6 mr-1 px-3 py-1"
              onClick={() => {
                setGenreMenuOpen(false);
                setSearchGenre("");
              }}
              title="Remove"
            >
              {searchGenre}
              <span>X</span>
            </button>
          )}
          {genreMenuOpen && (
            <div className="absolute top-12 right-0 p-3 rounded-2xl border-[1px] border-gravy-100  overflow-y-hidden bg-white">
              <ul
                className="py-3 w-[250px] h-[216px] overflow-y-auto bg-white"
                ref={genreListRef}
              >
                <li>
                  <button
                    title="None"
                    className="genres__item"
                    onClick={() => selectGenre("--")}
                  >
                    --
                  </button>
                </li>
                {genreList &&
                  genreList.map((genre) => (
                    <li key={genre}>
                      <button
                        title={genre}
                        className="genres__item"
                        onClick={() => selectGenre(genre)}
                      >
                        {genre}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchBar;

"use client";

import { useEffect, useState } from "react";

import { getToken, getMovie, getMovies } from "@/app/actions";
import Rating from "@/app/components/Movie/Rating";
import Movie from "@/app/components/Movie";
import Loading from "@/app/components/Loading";
import Link from "next/link";

const Home = () => {
  const [token, setToken] = useState(" ");
  const [movies, setMovies] = useState({
    data: [{ id: "", title: "", posterUrl: "" }],
    totalPages: 0,
  });
  const [headliner, setHeadliner] = useState({
    posterUrl: "",
    rating: "",
    summary: "",
    title: "",
  });

  useEffect(() => {
    const fetchToken = async () => {
      const t = await getToken();
      setToken(t);
    };

    const reloadData = async () => {
      const payload = await getMovies(token, {
        page: 4,
        limit: 11,
        search: "",
        genre: "Animation",
      });

      setMovies(payload);
    };

    fetchToken();
    reloadData();
  }, [token]);

  useEffect(() => {
    const getHeadliner = async () => {
      await getMovie(token, movies.data[0].id).then((featured) => {
        setHeadliner({
          posterUrl: featured.posterUrl,
          rating: featured.rating,
          summary: featured.summary,
          title: featured.title,
        });
      });
    };

    if (movies.data) [getHeadliner()];
  }, [movies.data, token]);

  if (!movies.data || movies.data.length === 1 || !headliner.summary) {
    return <Loading />;
  }

  return (
    <>
      <header className="bg-bluey py-14 lg:py-24 w-full lg:min-h-[500px] flex-col lg:flex-row flex items-center justify-center mb-5 gap-16">
        <section className="relative max-w-[956px] w-full flex flex-col gap-8 lg:gap-16 px-5 flex-wrap">
          <div
            role="img"
            aria-label={`${headliner.title} movie poster`}
            style={{ backgroundImage: `url(${headliner.posterUrl})` }}
            className="rounded-2xl w-[233px] h-[375px] lg:w-[422px] lg:h-[626px] overflow-hidden bg-cover bg-center bg-no-repeat lg:absolute lg:right-0 lg:-top-20"
          />
          <h1 className="text-left text-white font-display font-medium uppercase text-lg">
            Fan Favorite
          </h1>
          <div className="max-w-[454px]">
            <div className="flex gap-4 items-end lg:items-center mb-5">
              <h2 className="text-left text-white font-display font-bold text-5xl">
                {headliner.title}
              </h2>
              <Rating rating={headliner.rating} />
            </div>
            <p className="text-white text-sans">{headliner.summary}</p>
          </div>
        </section>
      </header>
      <div className="max-w-[956px] w-full mb-36 overflow-hidden">
        <Flourish />
      </div>
      <section>
        <h2 className="text-left text-bluey font-display font-bold text-3xl lg:text-4xl mb-10">
          Trending animated hits
        </h2>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-5 mb-24">
          {movies.data.slice(1, 11).map(({ id, title, posterUrl }) => {
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
      </section>
      <Link
        href="/search"
        className="mb-24 flex items-center justify-center font-display font-bold uppercase rounded-full bg-bluey hover:bg-white text-white hover:text-bluey min-h-11 min-w-24 md:min-w-36 lg:py-3 px-8 text-sm md:text-base border-2 border-bluey"
      >
        Find more movies
      </Link>
    </>
  );
};

const Flourish = () => (
  <svg
    width="588"
    height="90"
    viewBox="0 0 588 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0.5 5H588" stroke="#1405C4" strokeWidth="10" />
    <path d="M65.5 26H588" stroke="#1405C4" strokeWidth="8" />
    <path d="M136 47H588" stroke="#1405C4" strokeWidth="6" />
    <path d="M286.5 68H588" stroke="#1405C4" strokeWidth="4" />
    <path d="M349.5 89L588 89" stroke="#1405C4" strokeWidth="2" />
  </svg>
);

export default Home;

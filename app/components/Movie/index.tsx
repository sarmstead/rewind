"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

import { getMovie } from "@/app/actions";
import Details from "@/app/components/Movie/Details";
import Preview from "@/app/components/Movie/Preview";

type MovieProps = {
  posterUrl: string;
  title: string;
  token: string;
  id: string;
};

const Movie = ({ id, posterUrl, title, token }: MovieProps) => {
  const [details, setDetails] = useState(false);
  const [movieData, setMovieData] = useState({
    rating: "",
    summary: "",
    genres: [],
  });

  const toggleDetails = async () => {
    if (!details) {
      if (movieData.summary?.length === 0) {
        const data = await getMovie(token, id).then((data) => data);
        setMovieData(data);
      }
    }

    setDetails((prevState) => !prevState);
  };

  return (
    <article className="max-w-[233px] mx-auto">
      <button onClick={toggleDetails}>
        {details ? (
          <Details
            genres={movieData.genres}
            rating={movieData.rating}
            summary={movieData.summary}
            title={title}
          />
        ) : (
          <Preview src={posterUrl} title={title} />
        )}
      </button>
    </article>
  );
};

export default Movie;

"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

import { getToken, getMovie } from "@/app/actions";

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
    <article className="max-w-[233px] max-h-[331px]">
      <button onClick={toggleDetails}>
        {details ? (
          <>
            <h2>{title}</h2>
            <p>{movieData.rating}</p>
            <p>{movieData.summary}</p>
            {movieData.genres.length > 0 && (
              <div className="flex">
                {movieData.genres.map(({ id, title }) => (
                  <p key={id}>{title}</p>
                ))}
              </div>
            )}
          </>
        ) : (
          <img
            src={posterUrl}
            alt={`${title} movie poster`}
            className="w-[233px] h-[331px] object-cover"
          />
        )}
      </button>
    </article>
  );
};

export default Movie;

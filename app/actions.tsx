"use server";

import axios from "axios";

export const getToken = () => {
  if (!process.env.MOVIES_ENDPOINT) {
    throw new Error("Token endpoint is undefined.");
  }

  return axios
    .get(`${process.env.MOVIES_ENDPOINT}/auth/token`)
    .then((payload) => payload.data.token);
};

export const getMovies = async (
  token: string,
  options: { page: number; limit: number } = { page: 1, limit: 25 },
) => {
  if (!process.env.MOVIES_ENDPOINT) {
    throw new Error("Token endpoint is undefined.");
  }

  return axios
    .get(
      `${process.env.MOVIES_ENDPOINT}/movies?page=${options.page}&limit=${options.limit}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
    )
    .then((payload) => payload.data)
    .catch((error) => error.message);
};

export const getMovie = async (token: string, id: string) => {
  if (!process.env.MOVIES_ENDPOINT) {
    throw new Error("Token endpoint is undefined.");
  }

  return axios
    .get(`${process.env.MOVIES_ENDPOINT}/movies/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then((payload) => payload.data)
    .catch((error) => error.message);
};

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

export const getMovies = async (token: string) => {
  if (!process.env.MOVIES_ENDPOINT) {
    throw new Error("Token endpoint is undefined.");
  }

  return axios
    .get(`${process.env.MOVIES_ENDPOINT}/movies`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
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

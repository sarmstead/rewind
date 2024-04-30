"use server";

import axios from "axios";

export const getToken = () => {
  if (!process.env.MOVIES_TOKEN_ENDPOINT) {
    throw new Error("Token endpoint is undefined.");
  }

  return axios
    .get(`${process.env.MOVIES_TOKEN_ENDPOINT}/auth/token`)
    .then((payload) => payload.data.token);
};

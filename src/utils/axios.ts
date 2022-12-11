import axios from "axios";
const url: string = "https://countries.trevorblades.com/graphql";

export const request = (query: string, variables?: {}) => {
  return axios.post(url, { query, variables: variables });
};

import axios from "axios";
const url: string = "https://graphqlzero.almansi.me/api";

export const requestv2 = (query: string, variables?: {}) => {
  return axios.post(url, { query, variables: variables });
};

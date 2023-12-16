import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "f95aa258a2msh954e8e5de758fb7p115e8ajsn1abefa17640f",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
  return data
};

import axios from "axios";

export default async function fetchImages(query, page) {
  const key = "kl6_M-_V7dV3Tun8RORxdhXCuITh4hPbvuud0qDD90Y";
  axios.defaults.baseURL = "https://api.unsplash.com/";
  const response = await axios.get("search/photos", {
    params: {
      query: query,
      pep_page: 10,
      page: page,
      client_id: key,
    },
  });

  return response.data.results;
}

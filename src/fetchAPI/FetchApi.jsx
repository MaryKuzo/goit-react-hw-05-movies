import axios from "axios";

const KEY = 'd79036dd91636485f959ac267909ee3a';
const BASE_URL = 'https://api.themoviedb.org/3/'

export async function getTrandingMovies () {
  const url = `${BASE_URL}trending/movie/day?api_key=${KEY}&language=en-US`;
  const response = await axios.get(url)
  return response.data

}

export async function getMoviesById(id) {
  const url = `${BASE_URL}movie/${id}?api_key=${KEY}&language=en-US`;
  const response = await axios.get(url);
  return response.data;
}

export async function getMoviesQuery(query) {
  const url = `${BASE_URL}search/movie?api_key=${KEY}&query=${query}&language=en-US`;
  const response = await axios.get(url);
  return response
}

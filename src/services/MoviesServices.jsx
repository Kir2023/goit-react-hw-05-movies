import axios from 'axios';

const API_KEY = '0f708fe56e4c6c703a9a5ec495c3a94d';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
  params: {
    api_key: API_KEY,
  },
};

export const fetchPopularMovies = async () => {
  const response = await axios.get(`/movie/popular`, params);
  return response.data.results;
};

export const searchMovie = async movieName => {
  const response = await axios.get(`/search/movie?query=${movieName}`, params);
  return response.data.results;
};

export const fetchMovieDetails = async movie_id => {
  const response = await axios.get(`/movie/${movie_id}`, params);
  return response.data;
};

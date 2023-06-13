import axios from 'axios';

const api_key = '5c0bf9db5346d794ef678ef6835ac9bf';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

axios.defaults.params = {
  api_key,
};

export const getTrending = async () => {
  const { data } = await axios.get('/trending/movie/day');
  return data.results;
};

export const searchMovie = async movie => {
  const { data } = await axios.get(`/search/movie?query=${movie}`);
  return data.results;
};

export const getMovie = async movieID => {
  const { data } = await axios.get(`/movie/${movieID}?language=en-US'`);
  return data;
};

export const getCast = async movieID => {
  const { data } = await axios.get(`/movie/${movieID}/credits?language=en-US`);
  return data.cast;
};

export const getReviews = async movieID => {
  const { data } = await axios.get(`/movie/${movieID}/reviews?language=en-US`);
  console.log(data);
  return data.results;
};

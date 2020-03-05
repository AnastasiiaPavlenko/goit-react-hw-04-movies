import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';
const apiKey = '0eb62c2d6ca9e441fe73e4d10fffe660';

const fetchMovieWithQuery = query => {
  return axios
    .get(
      `${baseURL}/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`,
  )
    .then(response => response.data.results);
};

const fetchPopularTVShows = () => {
  return axios
    .get(`${baseURL}/trending/all/day?api_key=${apiKey}`)
    .then(response => response.data.results.filter(movie => movie.media_type === "movie"));
};

const fetchMovieDetails = movieId => {
  return axios
    .get(`${baseURL}/movie/${movieId}?api_key=${apiKey}`)
    .then(response => response.data);
};

const fetchCastDetails = movieId => {
  return axios
    .get(`${baseURL}/movie/${movieId}/credits?api_key=${apiKey}`)
    .then(response => response.data.cast);
};

const fetchReviews = movieId => {
  return axios
    .get(`${baseURL}/movie/${movieId}/reviews?api_key=${apiKey}&page=1`)
    .then(response => response.data.results);
};

export default {
  fetchMovieWithQuery,
  fetchPopularTVShows,
  fetchMovieDetails,
  fetchCastDetails,
  fetchReviews,
};

const axios = require("axios").default;

const API_URL="https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE_URL="https://image.tmdb.org/t/p";

const API_KEY = "333d44a18633e46ae229d1f9f1af61ee";
const ENDPOINTS= {
    NOW_PLAYING_MOVIES: "/movie/now_playing",
    UPCOMING_MOVIES:"/movie/upcoming",
    GENRES: "/genre/movie/list",
    MOVIE: "/movie",
    CASTS:'/credits',
    POPULAR_MOVIES:"/movie/popular",
    TOP_RATED:"/movie/top_rated"
};

const TMDB_HTTP_REQUEST = axios.create({
  baseURL: API_URL,
  params: {
    api_key: API_KEY,
  },
});

const getNowPlayingMovies = () =>
  TMDB_HTTP_REQUEST.get(ENDPOINTS.NOW_PLAYING_MOVIES);

const getUpcomingMovies = () =>
  TMDB_HTTP_REQUEST.get(ENDPOINTS.UPCOMING_MOVIES);

const getPopularMovies = () =>
  TMDB_HTTP_REQUEST.get(ENDPOINTS.POPULAR_MOVIES);

const getTopRatedMovies = () =>
  TMDB_HTTP_REQUEST.get(ENDPOINTS.TOP_RATED);
  

const getMovieById = (movieId, append_to_response = "") =>
  TMDB_HTTP_REQUEST.get(
    `${ENDPOINTS.MOVIE}/${movieId}`,
    append_to_response ? { params: { append_to_response } } : null
  );
const getCasts = (movieId, append_to_response = "") =>
  TMDB_HTTP_REQUEST.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    append_to_response ? { params: { append_to_response } } : null
  );

const getAllGenres = () => TMDB_HTTP_REQUEST.get(ENDPOINTS.GENRES);

const getPoster = (path) => `${TMDB_IMAGE_BASE_URL}/original${path}`;

const searchMovie = (query) =>
  TMDB_HTTP_REQUEST.get(
    `https://api.themoviedb.org/3/search/movie`,
    {
      params:{
        query:query
      }
    }
  );
export {
  getNowPlayingMovies,
  getUpcomingMovies,
  getAllGenres,
  getMovieById,
  getPoster,
  getCasts,
  searchMovie,
  getPopularMovies,
  getTopRatedMovies
};

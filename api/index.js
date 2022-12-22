import {ENDPOINTS,TMDB_HTTP_REQUEST,TMDB_IMAGE_BASE_URL} from "./config"

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

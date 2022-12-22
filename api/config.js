const axios = require("axios").default;

const API_URL="https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE_URL="https://image.tmdb.org/t/p";

const API_KEY = "333d44a18633e46ae229d1f9f1af61ee";

// endpoints
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

export{
    ENDPOINTS,
    TMDB_IMAGE_BASE_URL,
    TMDB_HTTP_REQUEST
}
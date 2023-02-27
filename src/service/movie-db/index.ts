import { request } from '../../utils/request';

const API = {
  getMovieDetail: (url: string) => request.get(url),
  getPopularMovies: () => request.get('/movie/popular'),
  getTopRatedMovies: () => request.get('/movie/top_rated'),
  getGenreList: () => request.get('/genre/movie/list'),
  getDiscoverByGenres: (genre: number) =>
    request.get(`/discover/movie?with_genres=${genre}`),
};

export default API;

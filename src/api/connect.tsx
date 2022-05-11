
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
});

export default api;

// GET MOVIE BY NAME/ID:
// https://api.themoviedb.org/3/search/movie?api_key=5f0de47789bd5535f17999cce273751e&query=$batman&language=pt-BR

// POPULAR:
// https://api.themoviedb.org/3/movie/popular?api_key=5f0de47789bd5535f17999cce273751e&language=pt-BR&page=2

// RATED:
// https://api.themoviedb.org/3/movie/top_rated?api_key=5f0de47789bd5535f17999cce273751e&language=pt-BR&page=2

// TRENDING:
// https://api.themoviedb.org/3/trending/movie/day?api_key=5f0de47789bd5535f17999cce273751e&language=pt-BR&page=5

// WATCHING NOW:
// https://api.themoviedb.org/3/movie/now_playing?api_key=5f0de47789bd5535f17999cce273751e&language=pt-BR&page=2


import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
});

export default api;

// GET MOVIE BY NAME/ID:
// https://api.themoviedb.org/3/search/movie?api_key=5f0de47789bd5535f17999cce273751e&query=$batman&language=pt-BR
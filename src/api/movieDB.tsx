import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'f5630ec4f34bf3f5de6740121bdb568c',
    language: 'es-ES',
  },
});

export default movieDB;

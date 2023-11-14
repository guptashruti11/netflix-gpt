export const LOGO="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const BG="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const PhotoIcon="https://1drv.ms/i/s!Al1wN5kIBxFoiHiWo2M0UU381CMS?e=cXe0Zg"
export const fetch = require('node-fetch');

export const NowPlayingMovies_URL = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
export const PopularMovies_URL = 'https://api.themoviedb.org/3/movie/popular?page=1';
export const TopRatedMovies_URL = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
export const UpcomingMovies_URL = 'https://api.themoviedb.org/3/movie/upcoming?page=1';
export const API_OPTIONS= {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTQ0OGIwMmQ0OGFjOTg1Nzk5ZTIxZGIwMjgwNGQzNSIsInN1YiI6IjY1NTBhYmUxZDQ2NTM3MDBlMWE4YjFjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BSrQmGlqJkR4BN1csjWQQq5X6GKzWPh-fTkpB3Q0QG8'
    }
  };
  export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500"
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjVlYzIxZWM4MzE3OWRiMDNlMjY3YTk3ZDhmNTk0ZCIsInN1YiI6IjY2MzM5NTcxNjYxMWI0MDEyYTY2ODBiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UgMFS4OFGbpIbUhBU_7J5NbaJVBe40tTAPZBQ-oaeak'
    }
  };
  

export const fetchMovies = async() => {
    const response = await axios.get("/trending/movie/day?language=en-US", options)
    return response.data.results
}

export const getMovieById = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}?language=en-US`, options);
    return response.data;
  };

  export const fetchMoviesName = async (name) => {
    const response = await axios.get(`/search/movie?query=${name}&language=en-US`, options);
    return response.data.results;
  };

  export const fetchMovieReviews = async (revieId) => {
    const response = await axios.get(`/movie/${revieId}/reviews`, options);
    return response.data.results;
  };

  export const fetchMovieCast = async (castId) => {
    const response = await axios.get(`/movie/${castId}/credits`, options);
    return response.data.cast;
  };



  
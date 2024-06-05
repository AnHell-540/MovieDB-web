import { MovieResponse } from "../domain/Movies.interface";
// import { useState } from "react";

export const MovieRepository = () => {

  // const [errorFetch, setErrorFetch] = useState<boolean>(false);
  // const [loading, setLoading] = useState<boolean>(false);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzQzYjk5MmRlZmQ2ZWQyOGRlNzMwZDg1ZDJkNjM0OCIsInN1YiI6IjY2NTViNWNkMTVmYTJiNDYzODcwNzFjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eEcz4YQRK55zwQhanxNQ_PophVOrHoXCkuCnAetGPOo",
    },
  };

  const fetchPopularMovies = async (): Promise<MovieResponse> => {
    try {
      // setLoading(true)
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        options
      );
      const response = await data.json();
      // setLoading(false)
      // setErrorFetch(false)
      return response as MovieResponse;
    } catch (e) {
      // setLoading(false)
      // setErrorFetch(true)
      console.error(e);
      throw new Error("Error fetch.");
    }
  };

  const fetchTopRatedMovies = async (): Promise<MovieResponse> => {
    try {
      // setLoading(true)
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options
      );
      const response = await data.json();
      // setLoading(false)
      // setErrorFetch(false)
      return response as MovieResponse;
    } catch (e) {
      // setLoading(false)
      // setErrorFetch(true)
      console.error(e);
      throw new Error("Error fetch.");
    }
  };

  const fetchNextReleases = async (): Promise<MovieResponse> => {
    try {
      // setLoading(true)
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
        options
      );
      const response = await data.json();
      // setLoading(false)
      // setErrorFetch(false)
      return response as MovieResponse;
    } catch (e) {
      // setLoading(false)
      // setErrorFetch(true)
      console.error(e);
      throw new Error("Error fetch.");
    }
  };

  const fetchMovie = async (id:number): Promise<MovieResponse> => {
    try {
      // setLoading(true)
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        options
      );
      const response = await data.json();
      // setLoading(false)
      // setErrorFetch(false)
      return response as MovieResponse;
    } catch (e) {
      // setLoading(false)
      // setErrorFetch(true)
      console.error(e);
      throw new Error("Error fetch.");
    }
  };

  return {
    fetchPopularMovies,
    fetchTopRatedMovies,
    fetchNextReleases,
    fetchMovie,
    // errorFetch,
    // loading
  };
};


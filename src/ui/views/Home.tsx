import { useEffect, useState } from "react";
import { MovieResponse, MovieResult } from "../../domain/Movies.interface";
import style from "../style/Home.module.css";
import { MovieRepository } from "../../infrastructure/MovieRepository";
import { MoviesService } from "../../usecase/MoviesService";
import { MovieCard } from "../components/MovieCard";
import { useFilterMoviesByName, useGetMovies } from "../customHooks";

export const Home = () => {
  const { movies, loading } = useGetMovies();
  const { filterMovies, filteredMovies } = useFilterMoviesByName(movies);

  return (
    <div className={style.container}>
      <h1 className={`${style.title} ${style.poppins_bold}`}>Popular movies</h1>
      <div>
        <input
          className={style.input}
          id="search"
          type="text"
          placeholder={"Search Movies"}
          onChange={filterMovies}
        />
      </div>
      <div className={style.movie_count}>
        <p>{filteredMovies.length} items</p>
      </div>
      <div className={style.movie_list_container}>

        {loading ? (
          <span className="loader"></span>
        ) : (
          <div className={style.movie_list_container}>
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
        
      </div>
    </div>
  );
};

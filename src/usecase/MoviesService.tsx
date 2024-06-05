import { MovieResponse } from "../domain/Movies.interface"
import { MovieRepository } from "../infrastructure/MovieRepository"

export const MoviesService = (movieRepository: ReturnType<typeof MovieRepository>) => {

    const getPopularMovies = async(): Promise<MovieResponse> => {
        return await movieRepository.fetchPopularMovies()
    }
    const getTopRatedMovies = async(): Promise<MovieResponse> => {
        return await movieRepository.fetchTopRatedMovies()
    }
    const getNextReleases = async(): Promise<MovieResponse> => {
        return await movieRepository.fetchNextReleases()
    }
    const getMovie = async(id:number): Promise<MovieResponse> => {
        return await movieRepository.fetchMovie(id)
    }

    return {
        getMovie,
        getTopRatedMovies,
        getPopularMovies,
        getNextReleases,
        loading: movieRepository.loading,
        error: movieRepository.errorFetch
    }
}
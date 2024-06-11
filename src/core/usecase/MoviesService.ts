import { MovieResponse } from "../domain/Movies.interface"
import { MovieRepository } from "../infrastructure"

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

    return {
        getTopRatedMovies,
        getPopularMovies,
        getNextReleases,
    }
}
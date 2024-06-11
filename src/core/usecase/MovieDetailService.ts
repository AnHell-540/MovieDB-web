import { MovieDetailRepository } from "../infrastructure";
import { MovieResult } from "../domain/Movies.interface";

export const MovieDetailService = (
    movieDetailRepository: ReturnType<typeof MovieDetailRepository>) => {

    const getMovieDetail = async(id:string) : Promise<MovieResult> => {
        return await movieDetailRepository.fetchMovieDetail(id)
    }

    return {getMovieDetail}
}

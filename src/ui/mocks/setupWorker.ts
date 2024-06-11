import { setupWorker } from 'msw';
import { mockPopularMoviesHandler } from './mockPopuarMovies';
export const server = setupWorker(...mockPopularMoviesHandler);
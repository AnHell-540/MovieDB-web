import { setupWorker } from 'msw';
import { mockMovies } from '../tests/mocks/mockMovies';
export const server = setupWorker(...mockMovies);
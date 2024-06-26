import { setupServer } from 'msw/node';
import { mockMovies } from './mockMovies';

const server = setupServer(...mockMovies);

export { server };

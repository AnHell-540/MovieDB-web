// src/mocks/server.ts
import { setupServer } from 'msw/node';
import { mockPopularMoviesHandler } from '../../mocks/mockPopuarMovies';

const server = setupServer(...mockPopularMoviesHandler);

export { server };

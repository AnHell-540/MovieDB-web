// src/components/__tests__/Home.test.tsx

import { Home } from '../views';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { render } from './testUtils';
import '@testing-library/jest-dom/extend-expect';
import { rest } from 'msw'
import { server } from './mocks/server';
import { movieBuilder } from './mocks/generator';


beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Home component', () => {

  test('render title', () => {
    render(<Home/>)

    const title = screen.getByRole('title')
    expect(title).toBeInTheDocument()
  })

  test('render cards in movie_list_container', async () => {
    render(<Home />);

    const movieCards = await screen.findAllByTestId('movie-card');
    expect(movieCards.length).toBeGreaterThan(0);
  });

  test('renders loader before MovieCards', async () => {
    server.use(
      rest.get('https://api.themoviedb.org/3/movie/popular', (req, res, ctx) => {
        return res(
          ctx.delay(500),
          ctx.json({
            results: [movieBuilder(), movieBuilder()],
          })
        );
      })
    );
    
    render(<Home />);
    const loader = await screen.findByTestId('loader');
    expect(loader).toBeInTheDocument();
    await waitFor(() => {
      expect(loader).not.toBeInTheDocument();
    });
    const movieCards = await screen.findAllByTestId('movie-card');
    expect(movieCards.length).toBeGreaterThan(0);
  });

  test('filter movies by name', async () => {
    render(<Home />);
    const searchInput = screen.getByPlaceholderText('Search Movies');
    fireEvent.change(searchInput, { target: { value: '1' } });
    const movieCards = await screen.findAllByTestId('movie-card');
    expect(movieCards.length).toBe(1);
    expect(screen.getByText('Movie 1')).toBeInTheDocument();
  });

  test('cards have image, title, and rating', async () => {
    render(<Home/>)

    const rating = await screen.findAllByRole('rating')
    rating.forEach((r) => {
      expect(r).toBeInTheDocument()
    })

    const img = await screen.findAllByRole('img')
    img.forEach((i) => {
      expect(i).toBeInTheDocument()
    })
    
    const movieTitle = await screen.findAllByRole('title')
    movieTitle.forEach((mt) => {
      expect(mt).toBeInTheDocument()
    })
  })
});

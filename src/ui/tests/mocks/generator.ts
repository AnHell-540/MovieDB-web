// src/mocks/generators.ts
import { build, fake } from '@jackfranklin/test-data-bot';

export const movieBuilder = build('Movie', {
  fields: {
    id: fake(f => f.datatype.number()),
    title: fake(f => f.lorem.words(3)),
    // overview: fake(f => f.lorem.sentence()),
    poster_path: fake(f => `/path/to/poster${f.datatype.number()}.jpg`),
    vote_average: fake(f => f.datatype.float({ min: 1, max: 10 })),
  },
});

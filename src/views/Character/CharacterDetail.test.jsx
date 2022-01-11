import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from '../../App.jsx';

const server = setupServer(
  rest.get(
    'https://last-airbender-api.herokuapp.com/api/v1/characters/5cf5679a915ecad153ab68c8d',
    (req, res, ctx) => {
      return res(
        ctx.json({
          _id: '5cf5679a915ecad153ab68c8',
          name: '46th Earth King',
          position: 'Earth King',
          allies: 'Royal Earthbender Guards',
        })
      );
    }
  )
);

describe('CharacterDetail', () => {
  beforeAll(() => {
    server.listen();
  });
  afterAll(() => {
    server.close();
  });

  it('should render a character', async () => {
    render(
      <MemoryRouter initialEntries={['/character/5cf5679a915ecad153ab68c8']}>
        <App />
      </MemoryRouter>
    );
    screen.getByText('Character Detail');
    await screen.findByText('allies: Royal Earthbender Guards');
  });
});

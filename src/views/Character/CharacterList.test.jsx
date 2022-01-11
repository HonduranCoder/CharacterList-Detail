import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from '../../App.jsx';

const server = setupServer(
  rest.get(
    'https://last-airbender-api.herokuapp.com/api/v1/characters',
    (req, res, ctx) => {
      //req.url.searchParams.get('page=1');
      return res(
        ctx.json([
          {
            _id: '5cf5679a915ecad153ab68c8',
            name: '46th Earth King',
          },
        ])
      );
    }
  )
);

describe('CharacterList', () => {
  beforeAll(() => {
    server.listen();
  });
  afterAll(() => {
    server.close();
  });

  it('should render a character list', async () => {
    render(
      <MemoryRouter initialEntries={['/characterlist']}>
        <App />
      </MemoryRouter>
    );
    screen.getByText('Character List');
    await screen.findByText('46th Earth King');
  });
});

import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Character from './Character.jsx';

it('render the character view', () => {
  const character = {
    _id: '5cf5679a915ecad153ab68c8',
    position: 'Earth King',
    allies: 'Roayl Earthbender Guards',
  };

  const { container } = render(
    <MemoryRouter>
      <Character character={character} />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});

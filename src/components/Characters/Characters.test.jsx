import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Characters from './Characters.jsx';

it('should render Characters', () => {
  const characters = [
    {
      _id: '5cf5679a915ecad153ab68c8',
      position: 'Earth King',
      allies: 'Roayl Earthbender Guards',
    },
  ];
  const { container } = render(
    <MemoryRouter>
      <Characters characters={characters} />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});

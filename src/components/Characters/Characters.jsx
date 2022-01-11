import React from 'react';
import { Link } from 'react-router-dom';

export default function Characters({ characters }) {
  return (
    <ul>
      {characters.map((character) => (
        <li key={character._id}>
          <Link to={`/character/${character._id}`}>
            <div>
              <img
                src={character.photoUrl}
                alt={character.name}
                height="200"
                width="200"
              />
              <span>{character.name}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

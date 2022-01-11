import React from 'react';

export default function Character({ character }) {
  return (
    <>
      <img src={character.photoUrl} alt={character.name} width="500" />
      <div>name: {character.name}</div>
      <div>position: {character.position}</div>
      <div>allies: {character.allies}</div>
    </>
  );
}

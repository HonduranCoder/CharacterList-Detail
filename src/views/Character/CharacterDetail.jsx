import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCharacter } from '../../services/airbender.js';
import Character from '../../components/Characters/Character.jsx';

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const newCharacter = async () => {
      const returnChar = await getCharacter(id);
      setCharacter(returnChar);
      setLoading(false);
    };
    newCharacter();
  }, [id]);

  return (
    <>
      <h1>Character Detail</h1>
      {loading ? <h3>Loading</h3> : <Character character={character} />}
      <Link to="/characterlist">Back to Characters</Link>
    </>
  );
}

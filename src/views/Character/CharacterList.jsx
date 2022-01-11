import React from 'react';
import { useEffect, useState } from 'react';
import Characters from '../../components/Characters/Characters.jsx';
import { getCharacters } from '../../services/airbender.js';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const allCharacters = async () => {
      const returnChars = await getCharacters();
      setCharacters(returnChars);
      setLoading(false);
    };
    allCharacters();
  }, []);

  return (
    <div>
      <h1>Character List</h1>
      <div>
        {loading ? <h3>Loading</h3> : <Characters characters={characters} />}
      </div>
    </div>
  );
}

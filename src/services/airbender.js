export const getCharacters = async () => {
  try {
    const res = await fetch(
      'https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=20&page=1'
    );
    const results = await res.json();
    return results;
  } catch (error) {
    console.error(error.message);
    return [];
  }
};

export const getCharacter = async (id) => {
  try {
    const response = await fetch(
      `https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`
    );
    const character = await response.json();
    return character;
  } catch (error) {
    console.error(error.message);
    return {};
  }
};

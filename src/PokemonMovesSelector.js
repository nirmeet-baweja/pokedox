import React, { useState } from "react";

import PokemonMoves from "./PokemonMoves";

function PokemonMovesSelector() {
  const [id, setId] = useState(null);

  function handleBulbasaurClick() {
    setId(1);
  }
  function handleCharmanderClick() {
    setId(4);
  }

  return (
    <div>
      <button onClick={handleBulbasaurClick} className="catchPokemonBtn">
        Fetch Bulbasaur
      </button>
      <button onClick={handleCharmanderClick} className="catchPokemonBtn">
        Fetch Charmander
      </button>
      {id ? <PokemonMoves pokemonId={id} /> : null}
    </div>
  );
}

export default PokemonMovesSelector;

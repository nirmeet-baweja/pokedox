import React, { useState } from "react";

function CaughtPokemon(props) {
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");
  const pokemons = [
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Squirtle",
    "Wartortle",
    "Blastoise",
    "Caterpie",
    "Metapod",
    "Butterfree",
  ];

  const handleInputChange = (event) => {
    setPokemonNameInput(event.target.value);
  };

  const catchPokemon = () => {
    pokemonNameInput && setCaught(caught.concat(pokemonNameInput));
    setPokemonNameInput("");
  };

  return (
    <div>
      <span>
        Caught {caught.length} Pokemon on {props.todayDate}
      </span>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button onClick={catchPokemon} className="catchPokemonBtn">
        Catch a Pokemon
      </button>
      <ul>
        {caught.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
}

export default CaughtPokemon;

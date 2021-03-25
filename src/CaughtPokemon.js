import React, { useState } from "react";

function CaughtPokemon(props) {
  const [caught, setCaught] = useState([]);
  const [index, setIndex] = useState(0);
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

  const catchPokemon = () => {
    setCaught(caught.concat(pokemons[index]));
    setIndex((index) => (index + 1) % pokemons.length);
  };

  return (
    <div>
      <span>
        Caught {caught.length} Pokemon on {props.todayDate}
      </span>
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

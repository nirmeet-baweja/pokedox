import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";

import "./App.css";

function App() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const todayDate = new Date().toLocaleDateString();

  const logWhenClicked = () => {
    console.log("You just clicked the image!");
  };

  return (
    <div>
      <Logo appName="Group 1's Pokedex" logWhenClicked={logWhenClicked} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon todayDate={todayDate} />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
}

export default App;

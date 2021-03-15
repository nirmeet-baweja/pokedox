import React from "react";

function BestPokemon(props) {
  return (
    <div>
      <p>My favourite Pokemon is Jigglypuff</p>
      <ul>
        {props.abilities.map((ability, index) => (
          <li key={index}>{ability}</li>
        ))}
      </ul>
    </div>
  );
}

export default BestPokemon;

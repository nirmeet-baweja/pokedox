import React from "react";

function Logo(props) {
  const logWhenClicked = () => {
    console.log("You just clicked the image!");
  };

  return (
    <header>
      <h1>Welcome to the {props.appName}</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="A bird pokemon"
        onClick={logWhenClicked}
      />
    </header>
  );
}

export default Logo;

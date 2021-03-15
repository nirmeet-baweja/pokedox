import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
// import ReactDOM from "react-dom";

function App() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const todayDate = new Date().toLocaleDateString();

  return (
    <div>
      <Logo appName="Group 1's Pokedex" />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon todayDate={todayDate} />
    </div>
  );
}

export default App;

/*
  Exercise G :
  1. Using the pokedex React app that you created earlier, open the src/App.js file.
  2. Inside the Logo component create a new variable called appName and assign it to "[YOUR_NAME]'s Pokedex".
  3. Now replace the hard-coded app name with {appName}. What do you see in your web browser? What would you do if you wanted to change the app name?
  4. Create a new component named CaughtPokemon. Within this component return a <p> tag with the text "Caught 0 Pokemon on" (we're going to fill in today's date in the next step).
  5. Create a variable named date within the CaughtPokemon component, and assign it today's date (hint: new Date().toLocaleDateString()). Finally, render the date variable after the text "Caught 0 Pokemon on".
  6. Render the CaughtPokemon component within the App component (below BestPokemon).
  7. Within the BestPokemon component, create a variable named abilities and assign it to an array with some Pokemon abilities (e.g. ['Anticipation', 'Adaptability', 'Run-Away']).
  8. Change the BestPokemon component to return a <div> element with the existing <p> element inside it. Then add a <ul> element underneath the <p> element.
  9. Now use the .map() method on the abilities variable to loop over each name and return a <li> element for each (hint: look at the mentors list example above) within the <ul> element.
*/

/*
Exercise E :
 1. In your pokedex React app, open the src/App.js file.
 2. Create a new function named Logo.
 3. Copy the <header> element and its contents and paste it into the Logo component.
 4. Replace the <header> element in the App component with the new Logo component.
 5. Create a new component function named BestPokemon and return a <p> element with some text saying which is your favourite Pokemon (e.g. "My favourite Pokemon is Squirtle").
 6. Render your new BestPokemon component below the Logo component within the App component.
*/

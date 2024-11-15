// Import the function references that generate the HTML lists
import { heroList } from "./heroes.js";
import { villainList } from "./villains.js";

// Capture the return values of the HTML list generators
const heroListHTML = heroList();
const villainListHTML = villainList();

// Build up a single string containing both chunks of HTML
const theWholeEnchilada = `
    <h1>Heroes</h1>
    ${heroListHTML}
    
    <h1>Villains</h1>
    ${villainListHTML}
    `;

const theExistingMainElement = document.querySelector("#container");
if (theExistingMainElement) {
  theExistingMainElement.innerHTML = theWholeEnchilada;
} else {
  console.error("Could not find container element");
}

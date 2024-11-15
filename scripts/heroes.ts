import { Character } from "../types.js";
import { getHeroes } from "./database.js";

const heroes: Character[] = getHeroes();

export const heroList = (): string => {
  let heroHTML = "<ul>";

  for (const hero of heroes) {
    heroHTML += `<li>${hero.name}</li>`;
  }

  heroHTML += "</ul>";

  return heroHTML;
};

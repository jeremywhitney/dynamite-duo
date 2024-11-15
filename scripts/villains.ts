import { Character } from "../types.js";
import { getVillains } from "./database.js";

const villains: Character[] = getVillains();

export const villainList = (): string => {
  let villainHTML = "<ul>";

  for (const villain of villains) {
    villainHTML += `<li>${villain.name}</li>`;
  }

  villainHTML += "</ul>";

  return villainHTML;
};

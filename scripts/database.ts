import { Character } from "../types";

const heroes: Character[] = [
  {
    id: 1,
    name: "Dynoguy",
    power: "Fire blasts",
  },
  {
    id: 2,
    name: "Hyperspeed",
    power: "Super speed",
  },
];

const villains: Character[] = [
  {
    id: 1,
    name: "Dr. Evil",
    power: "Being evil",
  },
  {
    id: 2,
    name: "The Fly",
    power: "Being a pest",
  },
];

export const database = { heroes, villains };

export const getHeroes = (): Character[] => {
  return database.heroes.map((hero) => ({ ...hero }));
};

export const getVillains = (): Character[] => {
  return database.villains.map((villain) => ({ ...villain }));
};

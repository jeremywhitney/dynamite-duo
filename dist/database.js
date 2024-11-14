export const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id: 1,
            name: "Dr. Evil",
            power: "Being evil"
        },
        {
            id: 2,
            name: "The Fly",
            power: "Being a pest"
        }
    ]
};
export const getHeroes = () => {
    return database.heroes.map(hero => (Object.assign({}, hero)));
};
export const getVillains = () => {
    return database.villains.map(villain => (Object.assign({}, villain)));
};
//# sourceMappingURL=database.js.map
import { Houses } from "./houseData";

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithId {
  id: number;
  name: string;
  planets: string | string[];
}

// Function Signatures
function findHouses(houses: string): HouseWithId[];
function findHouses(
  houses: string,
  filter: (house: House) => boolean
): HouseWithId[];

// Implementation
function findHouses(
  input: string | House[],
  filter?: (v: House) => boolean
): HouseWithId[] {
  const houses: House[] = typeof input === "string" ? JSON.parse(input) : input;

  return (filter ? houses.filter(filter) : houses).map((house) => {
    return {
      id: houses.indexOf(house),
      ...house,
    };
  });
}

console.log(
  findHouses(JSON.stringify(Houses), (house: House): boolean => {
    return house.name === "Harkkonen" ? true : false;
  })
);

import { type Pokemon } from "@prisma/client";
import { prisma } from "../src/config/db";

const API_BASE_URL = 'https://pokeapi.co/api/v2'

const load = async (): Promise<void> => {
  try {
    const pokemon = [];
    // const pokemonCount = await fetchPokemonCount();
    const pokemonCount = 1008; // Hardcode this for now until we can troubleshoot why Pokemon 1011 is breaking things.

    // We can run this on every deploy (or just on application startup)
    // and diff the table with the pokemon count.
    //
    // If we have new pokemon, we will start at the id that is 
    // total - diff count.
    const dbDiff = await getDbDiff(pokemonCount);

    if (dbDiff === 0) {
      return;
    }

    const newPokemonIdx = pokemonCount - dbDiff;

    for (let i = newPokemonIdx; i < pokemonCount; i++) {
      const data = await fetchPokemon(i + 1);

      const pokemonData = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default || ''
      };
      pokemon.push(pokemonData);
    }

    // Write to db
    const updateCount = await updatePokemonTable(pokemon);
    console.log(`Updated pokemon db with ${updateCount} new pokemon!`)
  } catch (e) {
    // TODO: Handle errors w/ Axiom
    console.log(e)
  }
}

const fetchPokemonCount = async (): Promise<number> => {
  try {
    const response = await fetch(`${API_BASE_URL}/pokemon`)
    const data = await response.json();

    if (!data || data.count === 0) {
      throw new Error('No pokemon found.');
    }

    return data.count;
  } catch (e) {
    throw new Error('Error fetching pokemon count.');
  }
}

const getDbDiff = async (pokemonCount: number) => {
  try {
    // Go to db, get count of table -- return the diff
    const pokemon = await prisma.pokemon.findMany();
    return pokemonCount - pokemon.length;
  } catch (e) {
    throw new Error('Unable to fetch pokemon from db for dbDiff');
  }
}

const fetchPokemon = async (pokemonId: number): Promise<any> => {
  try {
    const response = await fetch(`${API_BASE_URL}/pokemon/${pokemonId}`)

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error(`Error fetching pokemon by id: pokemonId=${pokemonId}, error=${JSON.stringify(e)}`)
  }
}

const updatePokemonTable = async (pokemonList: Pokemon[]): Promise<number> => {
  try {
    const updateQuery = await prisma.pokemon.createMany({
      data: pokemonList,
      skipDuplicates: true
    });

    return updateQuery.count;
  } catch (e) {
    throw new Error('Error updating pokemon table with latest pokemon data.')
  }
}


load().catch((e) => console.error(e));
import { pokemonActionTypes } from '../ActionTypes/PokemonActionTypes';

const initialState = {
  loading: false,
  pokemon: [],
  pokemonDetails: null,
};

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case pokemonActionTypes.LIST_POKEMON_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case pokemonActionTypes.LIST_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemon: [...action.payload],
      };
    case pokemonActionTypes.LIST_POKEMON_FAIL:
      return {
        ...state,
        loading: false,
        pokemon: [],
      };
    //
    case pokemonActionTypes.DETAILS_POKEMON_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case pokemonActionTypes.DETAILS_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemonDetails: action.payload,
      };
    case pokemonActionTypes.DETAILS_POKEMON_FAIL:
      return {
        ...state,
        loading: false,
        pokemonDetails: null,
      };
    default:
      return state;
  }
};

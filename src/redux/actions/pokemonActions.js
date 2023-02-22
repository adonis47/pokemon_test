import { AxiosRequest } from '../../utils/Utils';
import { pokemonActionTypes } from '../ActionTypes/PokemonActionTypes';

export const listPokemons = limit => dispatch => {
  let checkLimit = limit ? limit : 8;
  try {
    dispatch({
      type: pokemonActionTypes.LIST_POKEMON_REQUEST,
    });
    AxiosRequest('GET', `v1/pokemon/limit/${checkLimit}`).then(res => {
      dispatch({
        type: pokemonActionTypes.LIST_POKEMON_SUCCESS,
        payload: res.data,
      });
    });
  } catch (error) {
    dispatch({
      type: pokemonActionTypes.LIST_POKEMON_FAIL,
      payload: error.message,
    });
  }
};
//

export const getPokemonDetails = id => dispatch => {
  try {
    dispatch({
      type: pokemonActionTypes.DETAILS_POKEMON_REQUEST,
    });
    AxiosRequest('GET', `v1/pokemon/${id}`).then(res => {
      dispatch({
        type: pokemonActionTypes.DETAILS_POKEMON_SUCCESS,
        payload: res.data,
      });
    });
  } catch (error) {
    dispatch({
      type: pokemonActionTypes.DETAILS_POKEMON_FAIL,
      payload: error.message,
    });
  }
};

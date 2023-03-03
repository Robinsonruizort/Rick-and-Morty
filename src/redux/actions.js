import { ADD_FAVORITE, DEL_FAVORITE, FILTER, ORDER} from "./action.types";


export const addFavorite = (character) => {
    return { type: ADD_FAVORITE, payload: character}
}

export const delFavorite = (id) => {
    return {type: DEL_FAVORITE, payload: id}
}

export const filterCards = (gender) => {
    return {type: FILTER, payload: gender}
}

export const orderCards = (id) => {
    return {type: ORDER, payload: id}
}
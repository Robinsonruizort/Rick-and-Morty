import { ADD_FAVORITE, DEL_FAVORITE, FILTER, ORDER} from "./action.types";
import axios from "axios"

export const addFavorite = (character) => {
    return {type: ADD_FAVORITE, payload: character}
//     return async (dispatch) => {
//     const response = await axios.post("http://localhost:3001/rickandmorty/fav", character);
//     const data = response.data;

//         return dispatch ({
//             type: ADD_FAVORITE,
//             payload: data
//         })
//     }
}

export const delFavorite = (id) => {
//    return async (dispatch) => {
//     const response = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
//     const data = response.data;

//     return dispatch ({
//         type: DEL_FAVORITE,
//         payload: data
//     })
//     }
return {type: DEL_FAVORITE, payload: id}
// }
}


export const filterCards = (gender) => {
    return {type: FILTER, payload: gender}
}

export const orderCards = (id) => {
    return {type: ORDER, payload: id}
}
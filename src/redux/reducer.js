import { ADD_FAVORITE, DEL_FAVORITE, FILTER, ORDER} from "./action.types";

const initialState = {
    myFavorites: [],
    allCharacters: []
} 

const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_FAVORITE:
            if (state.myFavorites.includes(payload)) {
                return state;
            } else {
            
            return{
                ...state,
                myFavorites: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload]
            }
        }
        
        case DEL_FAVORITE:

            return {
                ...state,
                myFavorites: state.myFavorites.filter((element) => element.id !== payload),
                allCharacters: state.allCharacters.filter((element) => element.id !==payload),
            }

        case FILTER:
            const allCharsFiltered = state.allCharacters.filter(char => char.gender === payload);
            return {
                ...state,
                myFavorites: allCharsFiltered
            }

        case ORDER:
            const allCharsCopy = [...state.allCharacters]; // make a copy of the original array
            const sortedChars = payload === "Ascendente"
            ? allCharsCopy.sort((a, b) => a.id - b.id)
            : allCharsCopy.sort((a, b) => b.id - a.id)
            return {
                ...state,
                myFavorites: sortedChars
            }
        default:
            return{...state}
    }
}

export default reducer;
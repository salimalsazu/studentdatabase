import { actionTypes } from "./ActionType"

export const initailState = {
    loading: false,
    students: [],
    error: false
}

export const studentReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.FETCHING_START:
            return {
                ...state,
                loading: true,
                error: false
            }
        case actionTypes.FETCHING_SUCCESS:
            return {
                ...state,
                loading: false,
                students: action.payload,
                error: false
            }
        case actionTypes.FETCHING_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }

        default:
            return state;
    }
}
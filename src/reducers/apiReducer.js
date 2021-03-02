import * as actions from '../actions/types'

const initialState = {
    result: [],
    option: null,
    input: null,
    loading: false
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case actions.GET_API:
            // console.log("user's search terms: ",action.payload.query)
            return {
                ...state,
                result: action.payload,
                loading: false
            }
        case actions.API_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}
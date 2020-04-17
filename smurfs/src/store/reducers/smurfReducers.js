import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS } from "../actions/smurfActions"

const initialState= {
    data: [],
    isFetching: false,
    error: ""

}

export const smurfReducer = (state = initialState, action) =>{
    switch(action.type){

        case FETCH_SMURF_START:
            return{
                ...state,
                isFetching: true
            }

        case FETCH_SMURF_SUCCESS:
            return{
                ...state,
                data: action.payload,
                isFetching:false
            }

        default:
            return state
    }
}
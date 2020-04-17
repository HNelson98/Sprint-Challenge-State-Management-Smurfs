import axios from 'axios'

export const FETCH_SMURF_START = 'FETCH_SMURF_START'
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS'


export function fetchSmurf(){
    return dispatch => {
        dispatch({type:FETCH_SMURF_START});
        axios.get('http://localhost:3333/smurfs')
        .then(res =>{
            console.log("Smurf axios:", res.data)
            dispatch({
                type: FETCH_SMURF_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log('AXIOS ERROR:', err)
        })
    }
}
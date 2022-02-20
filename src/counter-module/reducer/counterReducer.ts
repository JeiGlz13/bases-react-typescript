import { CounterActionTypes } from "../actions/actions";
import { CounterStateInterface } from "../interfaces/interfaces";


export const counterReducer = (state: CounterStateInterface, action: CounterActionTypes):CounterStateInterface =>{
    switch (action.type) {
        case 'increaseBy':
            return {
                ...state,
                previous: state.counter,
                counter: state.counter + action.payload.value,
                changes: state.changes +1
            } 

        case 'reset':
            return {
                ...state,
                counter: 0,
                previous: 0,
                changes: 0,
            }
    
        default:
            return state;
    }
}
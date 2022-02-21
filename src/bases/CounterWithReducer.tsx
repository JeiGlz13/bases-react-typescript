import { useReducer } from "react";

interface CounterStateInterface {
    counter: number,
    previous: number,
    changes: number
}

const INITIAL_STATE:CounterStateInterface = {
    counter: 0,
    previous: 0,
    changes: 0
}

type CounterActionTypes = 
    | {type: 'increaseBy', payload: {value: number}}
    | {type: 'reset'}

const counterReducer = (state: CounterStateInterface, action: CounterActionTypes):CounterStateInterface =>{
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

export const CounterWithReducer = () => {
    const [{counter, previous, changes}, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const incrementar = (increaseValue: number) =>{
        dispatch({type: 'increaseBy', payload: {
            value: increaseValue
        }})
    }

    const reset = () =>{
        dispatch({type: 'reset'})
    }

  return (
    <div className="mt-10 flex flex-col justify-center items-center font-Poppins text-xl" >
        <h1 className="text-white" >Counter Reducer</h1>

        <div className="flex flex-wrap w-6/12 mt-6">
            <div className="flex w-8/12">
                <input type="text"
                placeholder="valor"
                value={counter}
                className="bg-white text-2xl text-gray-900 text-center focus:outline-none border border-gray-800 focus:border-gray-600 rounded-l-md w-full" />
            </div>
                
            <div className="flex flex-col w-4/12">
                <button onClick={()=>incrementar(1)}
                type="button"
                className="text-white text-center text-md font-semibold rounded-tr-md px-1 bg-gray-900 focus:bg-gray-700 focus:outline-none border border-gray-800 focus:border-gray-600">
                +
                </button>
                <button onClick={reset}
                type="button"
                className="text-white text-center text-md font-semibold rounded-br-md px-1 bg-gray-900 focus:bg-gray-700 focus:outline-none border border-gray-800 focus:border-gray-600">
                reset
                </button>
            </div>

            <div className="flex flex-row justify-around w-8/12 font-Poppins text-white mt-10">
                <h1>Prev: {previous}</h1>
                
                <h1>Cambios: {changes}</h1>
            </div>

            <div className="flex flex-row" >
                <button type="button"
                    onClick={()=>{incrementar(2)}}
                    className=" mx-4 mt-4 text-white text-center text-md font-semibold rounded-lg px-4 py-2 bg-gray-900 focus:bg-gray-700 focus:outline-none border border-gray-800 focus:border-gray-600">
                        + 2
                </button>
                
                <button type="button"
                    onClick={()=>{incrementar(4)}}
                    className=" mx-4 mt-4 text-white text-center text-md font-semibold rounded-lg px-4 py-2 bg-gray-900 focus:bg-gray-700 focus:outline-none border border-gray-800 focus:border-gray-600">
                        + 4
                </button>
               
                <button type="button"
                    onClick={()=>{incrementar(8)}}
                    className=" mx-4 mt-4 text-white text-center text-md font-semibold rounded-lg px-4 py-2 bg-gray-900 focus:bg-gray-700 focus:outline-none border border-gray-800 focus:border-gray-600">
                        + 8
                </button>
                
            </div>
        </div>
    </div>
  )
}

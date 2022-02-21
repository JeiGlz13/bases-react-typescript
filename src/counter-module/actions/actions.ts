
export type CounterActionTypes = 
    | {type: 'increaseBy', payload: {value: number}}
    | {type: 'reset'}

export const doReset = (): CounterActionTypes =>({type: 'reset'})

export const doIncreaseBy = (value: number): CounterActionTypes =>({
    type: 'increaseBy',
    payload: {
        value
    }
})
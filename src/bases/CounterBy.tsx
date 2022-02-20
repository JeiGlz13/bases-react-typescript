import { useState } from "react";

interface CounterByProps {
    initialValue: number
} 

interface CounterStateInterface {
    counter: number,
    clicks: number
}

export const CounterBy = ({initialValue}: CounterByProps) => {
    const [{counter, clicks}, setCounterState] = useState<CounterStateInterface>({
        counter: initialValue,
        clicks: 0
    });

    const incrementar = (increment: number): void =>{
        setCounterState(prev => ({
            counter: prev.counter + increment,
            clicks: prev.clicks + 1,
        }));
    }

  return (
    <div className="mt-10 flex flex-col justify-center items-center font-Poppins text-xl" >
        <h1 className="text-white" >Counter By</h1>

        <div className="flex flex-wrap w-6/12 mt-6">
            <div className="flex w-8/12 bg-white flex-col rounded-l-xl px-4">
                <h1>Counter: {counter}</h1>
                <h1>Clicks: {clicks} </h1>
            </div>
                
            <div className="flex flex-col w-4/12">
                <button onClick={()=>incrementar(1)}
                type="button"
                className="text-white text-center text-md font-semibold rounded-tr-md px-1 bg-gray-900 focus:bg-gray-700 focus:outline-none border border-gray-800 focus:border-gray-600">
                +1
                </button>
                <button onClick={()=>incrementar(5)}
                type="button"
                className="text-white text-center text-md font-semibold rounded-br-md px-1 bg-gray-900 focus:bg-gray-700 focus:outline-none border border-gray-800 focus:border-gray-600">
                +5
                </button>
            </div>
        </div>
    </div>
  )
}

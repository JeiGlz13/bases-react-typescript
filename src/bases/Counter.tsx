import { useState } from "react";

interface CounterProps {
    initialValue: number
} 

export const Counter = ({initialValue}: CounterProps) => {
    const [counter, setCounter] = useState<number>(initialValue);

    const incrementar = () =>{
        setCounter(prevValue => prevValue + 1);
    }

    const decrementar = () =>{
        setCounter(prevValue => prevValue - 1);
    }

  return (
    <div className="mt-10 flex flex-col justify-center items-center font-Poppins text-xl" >
        <h1 className="text-white" >Counter</h1>

        <div className="flex flex-wrap w-6/12 mt-6">
            <div className="flex w-8/12">
                <input type="text"
                placeholder="valor"
                value={counter}
                className="bg-white text-2xl text-gray-900 text-center focus:outline-none border border-gray-800 focus:border-gray-600 rounded-l-md w-full" />
            </div>
                
            <div className="flex flex-col w-4/12">
                <button onClick={incrementar}
                type="button"
                className="text-white text-center text-md font-semibold rounded-tr-md px-1 bg-gray-900 focus:bg-gray-700 focus:outline-none border border-gray-800 focus:border-gray-600">
                +
                </button>
                <button onClick={decrementar}
                type="button"
                className="text-white text-center text-md font-semibold rounded-br-md px-1 bg-gray-900 focus:bg-gray-700 focus:outline-none border border-gray-800 focus:border-gray-600">
                -
                </button>
            </div>
        </div>
    </div>
  )
}

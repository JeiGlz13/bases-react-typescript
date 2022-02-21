import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";
import { CounterEffect } from "./bases/CounterEffect";
import { CounterHook } from "./bases/CounterHook";
import { CounterWithReducer } from "./bases/CounterWithReducer";
import { CounterWithReducerSegment } from "./counter-module/CounterReducerSegment";

function App() {
  return (
    <div className="px-20 py-10" >
      <h1 className="text-white font-Poppins" >React</h1>

      <hr/>

      <Counter initialValue = {10} />

      <CounterBy initialValue={0}/>

      <CounterEffect/>

      <CounterHook/>

      <CounterWithReducer  />

      <CounterWithReducerSegment/>
    </div>
  );
}

export default App;

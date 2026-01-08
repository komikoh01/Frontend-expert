import { useState } from "react";
import { useDebounce } from "../../../hooks/useDebouncedState";

function Counter() {
  // const [counter, setCounter] = useState<number>(0);
  const [timer1, setTimer1] = useState<number>(0);
  const [timer2, setTimer2] = useState<number>(0);
  const [text, setText, elapsedText] = useDebounce<T>(0, 4000);

  return (
    <div className=" flex flex-col gap-2 items-center justify-center">
      {/* <h2 className=" font-semibold text-3xl text-center bg-emerald-600 rounded-2xl p-3">
        Vamos a contar !!!!
      </h2>
      <div className=" flex gap-3 justify-center items-center">
        <button
          className=" px-3 py-1 font-semibold !bg-red-400"
          onClick={() => setCounter(counter - 1)}
        >
          -
        </button>
        <span>{counter}</span>
        <button
          className=" px-3 py-1 font-semibold !bg-red-700"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </button>
      </div> */}
      <div className="  flex justify-center items-center gap-3">
        <button
          className=" bg-violet-500 font-semibold text-center py-1 px-3"
          onClick={() => setText(text + 1)}
        >
          TimerNormal
        </button>
        <span className=" text-xl">{text}</span>
      </div>
      <div
        className=" flex justify-center items-center gap-3"
      >
        <span className=" text-xl py-1 px-3 bg-cyan-950">timer retarded: {elapsedText}</span>
      </div>

      <div className=" flex justify-center items-center gap-3">
        <button
          className=" bg-rose-500 font-semibold text-center py-1 px-3"
          onClick={() => setTimeout(() => setTimer1(timer1 + 1), 1000)}
        >
          TimerBad
        </button>
        <span className=" text-xl">{timer1}</span>
      </div>
      <div
        className=" flex justify-center items-center gap-3"
        onClick={() => setTimeout(() => setTimer2((prev) => prev + 1), 1000)}
      >
        <button className=" bg-green-500 font-semibold text-center py-1 px-3">
          TimerGood
        </button>
        <span className=" text-xl">{timer2}</span>
      </div>
    </div>
  );
}

export default Counter;

import { useCounterStore } from "../store/globalState1"

export default function Stuffs() {
  const counter = useCounterStore((state) => state.counter)
  const increment = useCounterStore((state) => state.increment)
  const decrement = useCounterStore((state) => state.decrement)

  return(
    <div className=" flex flex-col gap-3 justify-center items-center w-full p-4 mt-4 bg-gradient-to-bl from-red-600 via-pink-600 to-violet-600">
      <h1>Esta es la pagina de Stuffs pa q sepan y no me hagan ponerme pesaisisisimo</h1>
      <div className=" flex flex-col justify-center items-center gap-1.5">
        <h2 className=" text-xl text-green-400 font-bold">Zustand Counter</h2>
        <div className=" flex gap-2 justify-center items-center">
          <button className=" px-3 py-1.5 bg-blue-600" onClick={decrement}>decrement</button>
          <p className=" text-xl font-bold text-white">{counter}</p>
          <button className=" px-3 py-1.5 bg-blue-600" onClick={increment}>increment</button>
        </div>
      </div>
    </div>
  )
}
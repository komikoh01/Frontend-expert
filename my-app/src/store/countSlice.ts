import { create } from "zustand";

type Counter = {
  counter: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

export const useCounterStore= create<Counter>((set) => ({
  counter: 0,

  increment: () => set((state) => ({counter: state.counter + 1})),
  decrement: () => set((state) => ({counter: state.counter - 1})),
  reset: () => set({counter: 0})
}))
import { create } from "zustand";

type Task = {
  id: number
  name: string
  description: string
  isDone: boolean
}

type TaskList = {
  list: Task[]
  add: (item: Task) => void
  remove: (id: number) => void
  isDone: (id: number) => void
  
}

export const useTaskListStore = create<TaskList>((set) => ({
  list: [],
  
  add: (item: Task) => set((state) => ({ list: [...state.list, item]})),
  remove: (id: number) => set((state) => ({ list: [...state.list.filter((item) => item.id !== id)]})),
  isDone: (id: number) => set((state) => ({ list: [...state.list.map((item) => 
    item.id === id ? { ...item, isDone: !item.isDone} : item 
  )]}))
}))
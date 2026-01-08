import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Task = {
  id: number
  name: string
  isDone: boolean
}

type TaskList = {
  list: Task[]
  add: (item: Task) => void
  remove: (id: number) => void
  isDone: (id: number) => void
  getCountNum: () => number
}

export const useTaskListStore = create(persist<TaskList>((set, get) => ({
  list: [],
  
  add: (item: Task) => set((state) => ({ list: [...state.list, item]})),
  remove: (id: number) => set((state) => ({ list: [...state.list.filter((item) => item.id !== id)]})),
  isDone: (id: number) => set((state) => ({ list: [...state.list.map((item) => 
    item.id === id ? { ...item, isDone: !item.isDone} : item 
  )]})),
  getCountNum: () => get().list.filter(task => task.isDone).length
}), { name: "task-storage"}))
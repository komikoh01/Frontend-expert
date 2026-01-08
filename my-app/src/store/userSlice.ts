import { create } from "zustand";
import { persist } from "zustand/middleware";

export type UserInfo = {
  user: User | null
  token: string | null
  loading: boolean
  login: () => Promise<void>
  logout: () => void
}

export type User = {
  name: string
  age: number
  cash: number
}

type UserPersist = Pick<UserInfo, "user" | "token">

export const useUserStore = create<UserInfo>()(persist((set) => ({
  user: null,
  token: null,
  loading: false,

  login: async() => {
    set({ loading: true })
    const data = await fetch("https://backend.inventado.com/users").then((res) => res.json())
    set({ user: data, loading: false, token: String(Math.random() * 100 - 451)})
  },

  logout: () => set({ user: null, token: null, loading: false}),
  // isAuthenticated: get().token !== null  //---- Esto se deriva afuera no se debe usar dentro

}), {
  name: "userData",
  partialize: (state): UserPersist => ({
    user: state.user,
    token: state.token
  })
}))
import { useEffect, useState } from "react"

export default function useDebouncedSearch(onSearch: (query: string) => void) {
    const [inputValue, setInputValue] = useState<string>("")

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(inputValue)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [inputValue, onSearch])

  return { inputValue, setInputValue}
}
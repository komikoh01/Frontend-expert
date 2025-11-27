import { useEffect, useState } from "react";

export const useDebounce = (initialValue: T, time: number = 500) => {
  const [text, setText] = useState<T>(initialValue);
  const [elapsedText, setElapsedText] = useState<T>(initialValue);

  useEffect(() => {
    const updateElapsedText = setTimeout(() => {
      setElapsedText(text);
    }, time);

    return () => {
      clearTimeout(updateElapsedText);
    };
  }, [text, time]);

  return [text, setText, elapsedText] as const
};

import { useState } from "react";

function Queue() {
  const [history, setHistory] = useState({
    past: [] as string[],
    present: "",
    futuro: [] as string[],
  });

  const handleChange = (value: string) => {
    setHistory((prev) => ({
      past: [...prev.past, prev.present],
      present: value,
      futuro: [],
    }));
  };

  const handleUndo = () => {
    setHistory((prev) => {
      if (prev.past.length === 0) return prev;
      const newPresent = prev.past[prev.past.length - 1];
      const newPast = prev.past.slice(0, prev.past.length - 1);
      return {
        past: newPast,
        present: newPresent,
        futuro: [prev.present, ...prev.futuro],
      };
    });
  };

  const handleRedo = () => {
    setHistory((prev) => {
      if (prev.futuro.length === 0) return prev;
      const newPresent = prev.futuro[0];
      const newFuture = prev.futuro.slice(1)
      return {
        past: [...prev.past, prev.present],
        present: newPresent,
        futuro: newFuture,
      };
    });
  };

  return (
    <div className=" flex gap-3 justify-center items-center">
      <button
        className=" bg-blue-200 text-center font-semibold text-base py-1 px-3"
        onClick={handleUndo}
      >
        Undo
      </button>
      <input
        value={history.present}
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(e.target.value)
        }
      />
      <button
        className=" bg-blue-500 text-center font-semibold text-base py-1 px-3"
        onClick={handleRedo}
      >
        Redo
      </button>
    </div>
  );
}

export default Queue;

import useDebouncedSearch from "./hooks/useDebouncedSearch";

function SearchBar({
  onSearch
}: {
  onSearch: (query: string) => void
}) {
  const { inputValue, setInputValue} = useDebouncedSearch(onSearch)

  return (
    <nav className=" w-full bg-slate-800 flex justify-between m-auto p-4">
      <h2 className=" font-bold text-center bg-red-400 px-3 py-1 rounded-lg">
        IE1
      </h2>
      <div>
        <label htmlFor="search" className=" font-semibold text-lg">
          Buscar:{" "}
        </label>
        <input
          type="text"
          className=" px-4 py-2 border-b-3 border-b-red-500 bg-slate-400 rounded-lg"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </nav>
  );
}

export default SearchBar;

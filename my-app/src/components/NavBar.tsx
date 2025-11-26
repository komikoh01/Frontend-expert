import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className=" bg-amber-300 flex justify-center items-center gap-4 px-3 py-2 text-red-600">
      <Link to={"/"} className=" font-semibold text-center bg-amber-500 px-3 py-2 rounded-xl">Home</Link>
      <Link to={"/products"} className=" font-semibold text-center bg-amber-500 px-3 py-2 rounded-xl">Products</Link>
      <Link to={"/stuffs"} className=" font-semibold text-center bg-amber-500 px-3 py-2 rounded-xl">Stuffs</Link>
    </nav>
  );
}

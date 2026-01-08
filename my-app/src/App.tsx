import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/products";
import NavBar from "./components/NavBar";
import Product from "./pages/product";
import ShoppingCart from "./components/ShoopingCart";
import Shopping from "./components/Shopping";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//////////////////////////////////////////////////////////
// import Button from "./components/Button";
// import Counter from "./components/Counter";
// import FirstForm from "./components/FirstForm";
// import Queue from "./components/Queue";
// import ReducerCounter from "./components/L-UseReducer";

// type Tasks = {
//   name: string
//   description: string
//   done: boolean
// }

// const [beProfessional, setBeProfessional] = useState<boolean>(false);
// const [modal, setModal] = useState<boolean>(false)
// const [task, setTask] = useState<Tasks[]>([])

{
  /* {beProfessional && modal ? <div className=" absolute inset-0 text-center w-full h-full bg-slate-950 z-50">
        <p className=" text-center font-semibold text-balance">
          Hola ...Ya eres un Profesional
        </p>
        <button className=" bg-cyan-500 py-2 px-3 text-center font-semibold" onClick={() => {
          setModal(true)
          setBeProfessional(false)}}>Close</button>
      </div> : <></>}
      <p className=" tracking-tight leading-1 text-center font-bold mb-7">
        Hola esta es una app para{" "}
        <span className=" bg-rose-600 px-2 py-1 font-semibold">aprender</span> y
        hacerce{" "}
        <span className="bg-emerald-600 px-2 py-1 font-semibold">
          profesional
        </span>
      </p>
      <button
        className=" text-center px-3 py-2 !bg-amber-300 font-bold "
        onClick={() => {
          setBeProfessional(true)
          setModal(true)}}
      >
        Ser Profesional
      </button>
      <Button title="Hola Mundo" /> */
}

{
  /* <Counter />
      <FirstForm />
      <Queue /> */
}
{
  /* <ReducerCounter /> */
}

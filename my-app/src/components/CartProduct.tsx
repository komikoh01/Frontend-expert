import { useLocation } from "react-router-dom";
import { type Product } from "../store/productSlice";

export default function CartProduct({
  product,
  onAdd,
  onRemove,
  onBuy,
  onReject
}: {
  product: Product;
  onAdd?: (item: Product) => void;
  onRemove?: (id: number) => void;
  onBuy?: (id: number) => void
  onReject?: (id: number) => void
}) {
  const location = useLocation();
  const pathname = location.pathname;

  

  return (
    <>
      {pathname === "/shopping" ? (
        <li key={product.id} className=" flex flex-col gap-2 items-center mt-3">
          <div className=" w-[200px] h-[200px]">
            <img
              src={product.image}
              alt={product.title}
              className=" w-full h-full"
            />
          </div>
          <h2>{product.title}</h2>
          <p>{product.category}</p>
          <p>{product.description}</p>
          <div className=" w-full flex justify-between items-center gap-2">
            <p className="pl-8">Price: {product.price}$</p>
            <p>Rating: {product.rating.rate}⭐</p>
            <p className=" pr-8">Unities: {product.rating.count}</p>
          </div>

          <button
            onClick={onAdd && onBuy && (() => {
              onAdd(product)
              onBuy(product.id)
            })}
            className=" font-extrabold text-base px-4 py-2.5 text-center bg-cyan-600 rounded-xl cursor-pointer hover:bg-cyan-900 transition-colors ease-in border-2 border-cyan-300 mt-7"
          >
            Add to 🛒
          </button>
        </li>
      ) : (
        <li key={product.id} className=" flex flex-col gap-2 items-center mt-3">
          <div className=" w-[200px] h-[200px]">
            <img
              src={product.image}
              alt={product.title}
              className=" w-full h-full"
            />
          </div>
          <h2>{product.title}</h2>
          <p>{product.category}</p>
          <p>{product.description}</p>
          <div className=" w-full flex justify-between items-center gap-2">
            <p className="pl-8">Price: {product.price}$</p>
            <p>Rating: {product.rating.rate}⭐</p>
            <p className=" pr-8">Unities: {product.rating.count}</p>
          </div>
          <p className=" text-xl text-center font-semibold text-white"><span className=" text-xl font-bold text-slate-300">Stock{" "}:</span>{product.stock}</p>
          <button
            onClick={onRemove && onReject && (() => {
              onReject(product.id)
              onRemove(product.id)})}
            className=" font-extrabold text-base px-4 py-2.5 text-center bg-rose-600 rounded-xl cursor-pointer hover:bg-rose-900 transition-colors ease-in border-2 border-rose-300 mt-7"
          >
            Remove from 🛒
          </button>
        </li>
      )}
    </>
  );
}

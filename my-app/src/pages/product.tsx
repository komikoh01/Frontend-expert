import { useParams } from "react-router-dom";
import { generatedProducts } from "../helpers/helpers";
import { useEffect, useState } from "react";
import type { Product } from "./products";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  console.log("Estos son los params", id);

  useEffect(() => {
    const parsedId = Number(id);
    const expectedProduct = generatedProducts(parsedId);
    if (Array.isArray(expectedProduct)) setProduct(null);
    else setProduct(expectedProduct);
  }, [id, product]);

  return (
    <div className="text-4xl text-red-500">
      {product ? (
        <div className=" flex flex-col justify-center items-center bg-emerald-300 p-5 w-[400px] m-auto mt-4">
          <h1 className=" text-center text-3xl text-violet-700">
            {product.name}
          </h1>
          <p className=" text-lg text-white font-semibold text-center">{product.price}</p>
          <p className=" tracking-tight text-center font-semibold text-base text-slate-600">{product.description}</p>
        </div>
      ) : (
        <div className=" text-center text-5xl m-auto w-full h-full text-blue-400"> 
          No hay productos q mostrar por hoy ... Vuelva mañana
        </div>
      )}
    </div>
  );
}

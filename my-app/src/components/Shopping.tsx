import { useEffect } from "react";
import { useProductStore } from "../store/productSlice";
import CartProduct from "./CartProduct";

export default function Shopping() {
  const fetchProducts = useProductStore((state) => state.fetchProducts)
  const catalogueProducts = useProductStore((state) => state.catalogueProducts)
  const loading = useProductStore((state) => state.loading)
  const error = useProductStore((state) => state.error)
  const decrementProductCount = useProductStore((state) => state.decrementProductCount)
  const addProduct = useProductStore((state) => state.addProduct);

  useEffect(() => {
    if(catalogueProducts.length === 0) fetchProducts()
    else return
  }, [fetchProducts, catalogueProducts.length])

  return (
    <section className=" w-full h-fulls px-4 py-2.5">
      <div className=" flex flex-col justify-center items-center gap-2">
        <h1 className=" text-4xl font-bold text-blue-600">Boutique🏬</h1>
        <h3 className=" text-xl text-blue-400 font-semibold">
          Aqui vas a encontrar todos los productos necesarios
        </h3>
      </div>
      <div>
        {loading && !error ? (
          <h1 className=" text-2xl text-white font-semibold">Loading ....</h1>
        ) : !loading && !error ? (
          <ul className=" grid grid-cols-4 gap-7 py-8 px-5">
            {catalogueProducts.map((product) => (
              <CartProduct product={product} onAdd={addProduct} onBuy={decrementProductCount}/>
            ))}
          </ul>
        ) : (
          <h1 className=" text-red-600 text-2xl font-extrabold">{error}</h1>
        )}
      </div>
    </section>
  );
}

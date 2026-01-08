import { useProductStore } from "../store/productSlice";
import CartProduct from "./CartProduct";

export default function ShoppingCart() {
  const cartProducts = useProductStore((state) => state.products);
  const removeProduct = useProductStore((state) => state.removeProduct)
  const restoreProductCount = useProductStore((state) => state.restoreProductCount)

  return (
    <section>
      <h1 className=" text-4xl font-bold text-blue-600">
        Este es el carrito de la compra🛒
      </h1>
      <ul>
        {cartProducts.map((product) => (
          <CartProduct product={product} onRemove={removeProduct} onReject={restoreProductCount}/>
        ))}
      </ul>
    </section>
  );
}

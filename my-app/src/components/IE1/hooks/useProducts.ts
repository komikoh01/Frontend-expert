import { useCallback, useEffect, useMemo, useState } from "react";
import type { Product } from "../../../pages/products";
import { generatedProducts } from "../../../helpers/helpers";

const stockProducts: Product[] | Product = generatedProducts();

export default function useProducts() {
  const [query, setQuery] = useState<string>("");
  const [completedProducts, setCompletedProducts] = useState<number[]>([]);
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const storagedProducts = localStorage.getItem("storagedProducts");
      if (!storagedProducts) return stockProducts;
      const parsedProducts = JSON.parse(storagedProducts);
      if (parsedProducts) return parsedProducts;
      return stockProducts
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      console.log("Error al parsear los datos del localtorage", error);
    }
  });
  const [editingID, setEditingID] = useState<number | null>(null);
  const [editedName, setEditedName] = useState<string>("");

  useEffect(() => {
    const toSaveProducts = JSON.stringify(products);
    try {
      localStorage.setItem("storagedProducts", toSaveProducts);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
      console.log("Error al guardar en localStorage");
    }
  }, [products]);

  const handleDone = (id: number) => {
    setCompletedProducts((prev) =>
      prev.includes(id) ? prev.filter((p) => p != id) : [...prev, id]
    );
  };

  const handleSearch = useCallback(
    (query: string) => {
      setQuery(query);
    },
    [query, stockProducts]
  );

  const filteredProducts = useMemo(() => {
    const searchQuery = query.toLowerCase().trim();
    if (!searchQuery) return products;

    const stockProducts = products.filter((p) =>
      p.name.toLowerCase().includes(searchQuery)
    );

    return stockProducts;
  }, [query, products]);

  return {
    products,
    setProducts,
    editingID,
    setEditingID,
    editedName,
    setEditedName,
    handleSearch,
    filteredProducts,
    completedProducts,
    handleDone,
  };
}

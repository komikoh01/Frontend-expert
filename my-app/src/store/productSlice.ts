import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Rating = {
  rate: string;
  count: number;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: Rating;
  image: string;
  stock: number;
};

export type ProductStore = {
  // Store
  catalogueProducts: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  decrementProductCount: (id: number) => void;
  restoreProductCount: (id: number) => void;

  // Cart
  products: Product[];
  firstStock: number;
  addProduct: (item: Product) => void;
  removeProduct: (id: number) => void;
  incrementStock: (id: number) => void;
  decrementStock: (id: number) => void;
};

export const useProductStore = create(
  persist<ProductStore>(
    (set, get) => ({
      catalogueProducts: [],
      loading: false,
      error: null,
      initialCountProductValues: [],

      products: [],
      firstStock: 1,

      // Store related state actions
      fetchProducts: async () => {
        set({ loading: true, error: null });
        try {
          const res = await fetch("https://fakestoreapi.com/products");
          const data: Product[] = await res.json();

          set({
            catalogueProducts: data,
            loading: false,
            error: null,
          });
        } catch (error) {
          set({
            loading: false,
            error: error instanceof Error ? error.message : "Error desconocido",
          });
        }
      },
      decrementProductCount: (id: number) =>
        set((state) => ({
          catalogueProducts: state.catalogueProducts.map((product) =>
            product.id === id && product.rating.count > 0
              ? {
                  ...product,
                  rating: {
                    ...product.rating,
                    count: product.rating.count - 1,
                  },
                }
              : product
          ),
        })),
      restoreProductCount: (id: number) => {
        const productCount = get().products.find((p) => p.id === id);
        if (!productCount) return;

        const rightCountValue = productCount?.stock;

        set((state) => ({
          catalogueProducts: state.catalogueProducts.map((product) =>
            product.id === productCount.id
              ? {
                  ...product,
                  rating: {
                    ...product.rating,
                    count: product.rating.count + rightCountValue,
                  },
                }
              : product
          ),
        }));
      },

      // Cart related state actions
      addProduct: (item: Product) =>
        set((state) => {
          const existingProduct = get().products.find(
            (product) => product.id === item.id
          );

          if (existingProduct) {
            return {
              products: state.products.map((product) =>
                product.id === item.id
                  ? {
                      ...product,
                      rating: {
                        ...product.rating,
                        count: product.rating.count - 1,
                      },
                      stock: product.stock + 1,
                    }
                  : product
              ),
            };
          } else {
            return {
              products: [
                ...state.products,
                {
                  ...item,
                  rating: { ...item.rating, count: item.rating.count - 1 },
                  stock: get().firstStock,
                },
              ],
            };
          }
        }),
      removeProduct: (id: number) =>
        set((state) => ({
          products: [...state.products.filter((product) => product.id !== id)],
        })),
      incrementStock: (id: number) =>
        set((state) => ({
          products: [
            ...state.products.map((product) =>
              product.id === id
                ? { ...product, stock: product.stock + 1 }
                : product
            ),
          ],
        })),
      decrementStock: (id: number) =>
        set((state) => ({
          products: [
            ...state.products.map((product) =>
              product.id === id
                ? {
                    ...product,
                    stock: product.stock > 0 ? product.stock - 1 : 0,
                  }
                : product
            ),
          ],
        })),
    }),
    { name: "productStore" }
  )
);

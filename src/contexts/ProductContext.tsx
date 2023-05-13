import React, { useContext } from "react";
import { IProduct } from "@/models/product";

type TProductContext = {
  product: IProduct | null;
  setProduct: React.Dispatch<React.SetStateAction<IProduct | null>>;
};

export const ProductContext = React.createContext<TProductContext>({
  product: null,
  setProduct: () => {},
});

export const ProductProvider = ({ children }: any) => {
  const [product, setProduct] = React.useState<IProduct | null>(null);

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export function useProductContext() {
  return useContext(ProductContext);
}

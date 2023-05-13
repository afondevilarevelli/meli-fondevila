import { useProductContext } from "@/contexts/ProductContext";
import React from "react";

export default function ProductFeatures() {
  const { product } = useProductContext();

  return <div>ProductFeatures</div>;
}

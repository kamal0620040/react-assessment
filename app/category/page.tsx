import React from "react";
import PiechartSection from "./PiechartSection";
import { CategoryCard } from "../components";

const ProductCategoryPage = async () => {
  const categories = await fetch(
    "https://dummyjson.com/products/categories"
  ).then((res) => res.json());

  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div className="ml-4 xs:ml-0 md:w-1/2">
        <h1 className="text-zinc-700 text-2xl minlg:text-2xl xs:text-xl font-bold mb-6">
          Product Categories:
        </h1>
        <div className="flex  gap-6 flex-wrap items-center w-full">
          {categories.map((category: string, idx: number) => (
            <CategoryCard key={idx} category={category} />
          ))}
        </div>
      </div>
      <div className="bg-zinc-400 w-1/2">
        <PiechartSection categories={categories} />
      </div>
    </div>
  );
};

export default ProductCategoryPage;

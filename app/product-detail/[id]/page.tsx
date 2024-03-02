import { calculateDiscount } from "@/app/utils/calculateDiscount";
import { notFound } from "next/navigation";
import React from "react";
import ImageSection from "../ImageSection";

interface Props {
  params: {
    id: string;
  };
}

const ProductDetailPage = async ({ params }: Props) => {
  const product = await fetch(
    `https://dummyjson.com/products/${parseInt(params.id)}`
  ).then((res) => res.json());

  if (!product) return notFound();

  return (
    <div className="flex flex-col justify-end sm:px-4 p-12 pt-16">
      <div className="mt-6 w-full flex gap-10 h-96">
        <ImageSection product={product} />
        <div className="basis-1/2 flex flex-col justify-center items-center">
          <div className="flex flex-col">
            <p className="text-subtitle-blue italic font-semibold text-base md:mb-4 sm:mb-1 xs:ml-0">
              - {product.category}
            </p>
            <h1 className="text-4xl font-bold">{product.title}</h1>
            <div className="mt-5 flex">
              <span className="cursor-pointer bg-gray-600 px-4 py-2 rounded-2xl text-white text-sm font-semibold">
                {product.brand.toUpperCase()}
              </span>
              <div className="flex gap-3 ml-8 text-2xl">
                {product.discountPercentage > 0 && (
                  <div className="text text-zinc-400 line-through">
                    ${product.price}
                  </div>
                )}
                <div className="font-semibold">
                  $
                  {calculateDiscount(product.price, product.discountPercentage)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

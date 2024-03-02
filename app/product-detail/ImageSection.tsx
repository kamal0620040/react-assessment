"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

const ImageSection = ({ product }: { product: Product }) => {
  const [mainImage, setMainImage] = useState(product.thumbnail);

  return (
    <>
      <div className="basis-1/5 flex flex-col flex-wrap gap-2 rounded-lg border-2 border-zinc-300 p-2 overflow overflow-x-scroll no-scrollbar">
        {product.images.map((item: string, idx: number) => (
          <div
            key={idx}
            onClick={(e) => {
              setMainImage(item);
              console.log(item);
            }}
            className={`${
              item === mainImage ? "border-2 border-zinc-800 rounded-2xl" : ""
            } relative w-full h-1/3 hover:border-2 cursor-pointer`}
          >
            <Image
              className="rounded-2xl"
              src={item}
              layout="fill"
              objectFit="cover"
              alt="product-image"
            />
          </div>
        ))}
      </div>
      <div className="border-2 border-logo-green rounded-2xl basis-1/2 relative w-full h-full">
        {product.discountPercentage > 0 && (
          <div className="z-10 absolute bg-red-600 px-2 py-1 rounded-2xl top-4 -right-8 text-white text-sm font-semibold">
            {product.discountPercentage.toFixed()}% OFF
          </div>
        )}
        <Image
          className="rounded-2xl"
          src={mainImage}
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>
    </>
  );
};

export default ImageSection;

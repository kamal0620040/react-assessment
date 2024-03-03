"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { calculateDiscount } from "../utils/calculateDiscount";

interface Props {
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

const ProductCard = ({ product }: { product: Props }) => {
  return (
    <Link href={{ pathname: `/product-detail/${product.id}` }}>
      <div className="flex-1 min-w-215 max-w-max xs:max-w-none sm:w-full sm:min-w-155 minmd:min-w-256 minlg:min-w-327 rounded-2xl p-4 m-4 minlg:m-8 sm:my-2 sm:mx-2 cursor-pointer border-2 relative hover:scale-105 transition ease-in-out">
        {product.discountPercentage > 0 && (
          <div className="z-10 absolute bg-zinc-500 px-2 py-1 rounded-2xl top-5 -right-5 text-white text-sm font-semibold">
            {product.discountPercentage.toFixed()}% OFF
          </div>
        )}
        <div className="relative w-60 h-52 sm:h-36 xs:h-56 minmd:h-60 minlg:h-300 rounded-2xl overflow-hidden">
          <Image
            key={`product-${product.id}`}
            src={product.thumbnail}
            onError={() => {
              //   set default product image here
            }}
            fill
            sizes="2xl"
            style={{ objectFit: "cover" }}
            alt="product"
          />
        </div>
        <p className="mt-2 text-lg font-semibold">
          {product.title.length > 24
            ? product.title.substring(0, 24) + "..."
            : product.title}
        </p>
        <div className="mt-2 flex justify-between items-center">
          <span className="border-2 px-2 py-1 rounded-2xl text-zinc-600 font-montserrat text-sm">
            {product.category}
          </span>
          {product.discountPercentage > 0 ? (
            <div className="flex gap-3">
              <div className="text text-zinc-400 line-through">
                ${product.price}
              </div>
              <div className="font-semibold">
                ${calculateDiscount(product.price, product.discountPercentage)}
              </div>
            </div>
          ) : (
            <div className="flex gap-3">
              <div className="font-semibold">${product.price}</div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

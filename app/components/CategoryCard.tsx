"use client";
import { useRouter } from "next/navigation";
import React from "react";

const CategoryCard = ({ category }: { category: string }) => {
  const router = useRouter();
  return (
    <div
      className="bg-zinc-400 p-2 rounded-sm cursor-pointer hover:scale-105 ease-in-out"
      onClick={() => router.push(`category/${category}`)}
    >
      {category}
    </div>
  );
};

export default CategoryCard;

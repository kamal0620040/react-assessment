"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const router = useRouter();
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;

  const changePage = (page: number) => {
    const params = new URLSearchParams();
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };

  return (
    <div>
      <div className="flex items-center gap-2 w-full justify-center mt-3">
        <button
          className="text-4xl text-white bg-zinc-600 rounded-full"
          disabled={currentPage === 1}
          onClick={() => changePage(currentPage - 1)}
        >
          <BiChevronLeft />
        </button>
        Page {currentPage} of {pageCount}
        <button
          className="text-4xl text-white bg-zinc-600 rounded-full"
          disabled={currentPage === pageCount}
          onClick={() => changePage(currentPage + 1)}
        >
          <BiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

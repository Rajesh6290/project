import useSwr from "@/hooks/useSwr";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa6";
import ProductCard from "../home/ProductCard";
import Link from "next/link";
import { AiFillHeart, AiFillEye } from "react-icons/ai";
import { HiOutlinePlusSm } from "react-icons/hi";

const AllProducts = () => {
  const PRODUCT_ARR = [
    {
      id: "1",
      image: "/product/p1.webp",
      name: "Digital BP Machine",
    },
    {
      id: "1",
      image: "/product/p2.webp",
      name: "Digital BP Machine",
    },
    {
      id: "1",
      image: "/product/p3.webp",
      name: "Digital BP Machine",
    },
    {
      id: "1",
      image: "/product/p4.webp",
      name: "Digital BP Machine",
    },
    {
      id: "1",
      image: "/product/p5.webp",
      name: "Digital BP Machine",
    },
    {
      id: "1",
      image: "/product/p6.webp",
      name: "Digital BP Machine",
    },
    {
      id: "1",
      image: "/product/p7.webp",
      name: "Digital BP Machine",
    },
    {
      id: "1",
      image: "/product/p7.webp",
      name: "Digital BP Machine",
    },
    {
      id: "1",
      image: "/product/p8.webp",
      name: "Digital BP Machine",
    },
    {
      id: "1",
      image: "/product/p9.webp",
      name: "Digital BP Machine",
    },
    {
      id: "1",
      image: "/product/p10.webp",
      name: "Digital BP Machine",
    },
  ];
  return (
    <main className=" flex flex-col justify-between items-center gap-10 w-full">
      <div className="h-fit w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-3">
        {PRODUCT_ARR.map((item: any, index: number) => {
          return (
            // <AllProductsCard key={curEle.id} item={curEle} index={index} />
            <div
              className="relative h-full group overflow-hidden  w-full flex flex-col gap-2 justify-between items-center  bg-white shadow-[0px_0px_4px_0px_#00000024] rounded-lg p-4"
              key={item?.id}
            >
              <Link href="/wishlist">
                <p className=" absolute z-10 top-2 sm:group-hover:right-2 right-2 sm:-right-10 duration-300 w-8 h-8 cursor-pointer  rounded-lg flex items-center justify-center bg-primary/60 bg-opacity-60">
                  <AiFillHeart className=" hover:scale-125 duration-200 text-white" />
                </p>
              </Link>
              <Link href="/wishlist">
                <p className=" absolute z-10 top-12 sm:group-hover:right-2 right-2 sm:-right-20 duration-300 w-8 h-8 cursor-pointer  rounded-lg flex items-center justify-center bg-primary/60 bg-opacity-60">
                  <AiFillEye className=" hover:scale-125 duration-200 text-white" />
                </p>
              </Link>

              <div className=" w-full flex  flex-col gap-4">
                <Link href={`/products/${item?.id}`}>
                  <img
                    src={item?.image}
                    className=" w-full object-contain md:h-36 h-24 object-fil rounded-lg cursor-pointer group-hover:scale-105 duration-300 "
                    alt=""
                  />
                </Link>
                <div className=" flex w-full flex-col gap-2">
                  {/* <div className=" flex items-center justify-between">
                  <p className=" flex items-center gap-1.5 py-1 px-2 rounded-full border border-gray-300">
                    <FaStar className=" text-xs text-amber-500" />
                    <span className=" text-xs">5.0</span>
                  </p>
                  <p className="  text-green-500 text-xs font-semibold">Instock</p>
                </div> */}
                  <p className=" flex items-center gap-1">
                    <span className=" uppercase text-primary/80 font-medium text-sm">
                      brand:
                    </span>
                    <span className=" text-xs capitalize text-gray-600">
                      Alive Core
                    </span>
                  </p>
                  <p className="  font-semibold  text-gray-700">{item?.name}</p>
                  <p className="text-sm flex items-center gap-1">
                    <FaStar className=" text-amber-500" />
                    <FaStar className=" text-amber-500" />
                    <FaStar className=" text-amber-500" />
                    <FaStar className=" text-amber-500" />
                    <FaStar className=" text-amber-500" />
                  </p>
                  <div className=" flex justify-between items-center  ">
                    <p className=" flex flex-col sm:flex-row items-center gap-1">
                      <span className="text-gray-800 font-semibold">
                        ₹999.12
                      </span>
                      <span className="line-through text-xs  text-gray-400">
                        ₹2999.00
                      </span>
                    </p>
                    <Link href="/cart">
                      <p className=" w-8 h-8 rounded-md cursor-pointer  hover:bg-primary border duration-300 border-primary flex items-center justify-center">
                        <HiOutlinePlusSm className=" text-primary hover:text-white text-xl duration-300" />
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default AllProducts;

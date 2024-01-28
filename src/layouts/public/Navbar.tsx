import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import { IoCall, IoSearchSharp } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <nav className="w-full h-fit bg-gray-50 flex flex-col sticky top-0 z-[999]">
      <div className=" xl:block hidden flex    gap-2  flex-col w-full">
        <div className="w-full bg-gradient-to-bl from-rose-400 to-orange-600">
          <div className="w-full py-3 main-container flex items-center gap-5 justify-between">
            <img src="/logo1.png" className="w-72 h-12 object-contain" alt="" />

            <div className="flex items-center gap-7">
              <Link
                href="/"
                className="font-medium navbar__link relative text-lg tracking-wide text-white  cursor-pointer "
              >
                Home
              </Link>
              <Link
                href="/products"
                className="font-medium navbar__link relative text-lg tracking-wide text-white  cursor-pointer "
              >
                Products
              </Link>

              <p className="font-medium navbar__link relative text-lg tracking-wide text-white  cursor-pointer ">
                Testimonials
              </p>
              <p className="font-medium navbar__link relative text-lg tracking-wide text-white  cursor-pointer ">
                Blogs
              </p>
              <p className="font-medium navbar__link relative text-lg tracking-wide text-white  cursor-pointer ">
                About Us
              </p>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-11 h-11 bg-slate-100 cursor-pointer rounded-full flex items-center justify-center relative">
                <IoSearchSharp className="text-gray-600 text-xl " />
              </div>
              <div className="w-11 h-11 bg-slate-100 cursor-pointer rounded-full flex items-center justify-center relative">
                <p className=" absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center bg-red-500 text-white font-semibold text-xs">
                  2
                </p>
                <MdOutlineShoppingCart className="text-gray-600 text-xl " />
              </div>
              <div className="w-11 h-11 bg-slate-100 cursor-pointer rounded-full flex items-center justify-center relative">
                <p className=" absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center bg-red-500 text-white font-semibold text-xs">
                  5
                </p>
                <AiOutlineHeart className="text-gray-600 text-xl " />
              </div>
              <div className="w-11 h-11 bg-slate-100 cursor-pointer rounded-full flex items-center justify-center">
                <FaRegUser className="text-gray-600 text-lg " />
              </div>
              <Link
                href="/contact"
                className="flex shake items-center gap-2 shake py-2 px-3 rounded-lg bg-primary  shadow-md shadow-primary/70 cursor-pointer"
              >
                <IoCall className="text-white shake-animation text-lg  shake-animation " />
                <p className=" text-white font-medium ">Contact Us</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <MobileNavbar />
    </nav>
  );
};

export default Navbar;

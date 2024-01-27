// import { Collapse, SideDrawer } from "@/components/common";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsFillHandbagFill } from "react-icons/bs";
import { FaHome, FaSignInAlt, FaUserTie } from "react-icons/fa";
import { HiMenuAlt1, HiOutlineShoppingCart } from "react-icons/hi";
import { MdContacts } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { TbLogout2, TbSitemap } from "react-icons/tb";
import { PiUserFill, PiUserSwitchFill } from "react-icons/pi";
import { useRouter } from "next/router";
import { Drawer } from "@mui/material";
import MenuCollapse from "@/components/common/MenuCollapse";
export const MENU_ARR = [
  {
    id: "1",
    name: "Home",
    path: "/",
    haveList: false,
    icon: <FaHome className=" text-3xl text-primary/40" />,
  },
  {
    id: "2",
    name: "All Category",
    haveList: true,
    path: "/category",
    icon: <TbSitemap className=" text-3xl text-primary/40" />,
    list: [
      {
        id: 1,
        name: "Imaging",
        image: "/asset/category/imaging.png",
        path: "/category",
      },
      {
        id: 2,
        name: "Laboratory",
        image: "/asset/category/laboratory.png",
        path: "/category",
      },
      {
        id: 3,
        name: "Surgery",
        image: "/asset/category/surgery-room.png",
        path: "/category",
      },
      {
        id: 4,
        name: "Monitoring",
        image: "/asset/category/monitoring.png",
        path: "/category",
      },
      {
        id: 5,
        name: "Respiratory",
        image: "/asset/category/respiratory.png",
        path: "/category",
      },
      {
        id: 6,
        name: "Dental",
        image: "/asset/category/dental.png",
        path: "/category",
      },
      {
        id: 7,
        name: "Cardiology",
        image: "/asset/category/cardiology.png",
        path: "/category",
      },
      {
        id: 8,
        name: "Rehabilitation",
        image: "/asset/category/regabiliatition.png",
        path: "/category",
      },
      {
        id: 9,
        name: "Emergency",
        image: "/asset/category/emergency.png",
        path: "/category",
      },
      {
        id: 10,
        name: "Orthopedics",
        image: "/asset/category/joint.png",
        path: "/category",
      },
    ],
  },
  {
    id: "3",
    name: "Products",
    path: "/products",
    haveList: false,
    icon: <BsFillHandbagFill className=" text-3xl text-primary/40" />,
  },
  {
    id: "4",
    name: "About Us",
    haveList: false,
    icon: <FaUserTie className=" text-3xl text-primary/40" />,
    path: "/",
  },
  {
    id: "5",
    name: "Contact Us",
    haveList: false,
    icon: <MdContacts className=" text-3xl text-primary/40" />,
    path: "/contact",
  },
  {
    id: "6",
    name: "Become A Seller",
    haveList: false,
    icon: <PiUserSwitchFill className=" text-3xl text-primary/40" />,
    path: "/seller",
  },
  {
    id: "7",
    name: "My Wishlist",
    haveList: false,
    icon: <MdContacts className=" text-3xl text-primary/40" />,
    path: "/wishlist",
  },
  {
    id: "8",
    name: "My Account",
    haveList: false,
    icon: <PiUserFill className=" text-3xl text-primary/40" />,
    path: "/my-account",
    // list: [
    //   {
    //     id: 1,
    //     name: "Imaging",
    //     image: "/asset/category/imaging.png",
    //   },
    //   {
    //     id: 2,
    //     name: "Laboratory",
    //     image: "/asset/category/laboratory.png",
    //   },
    //   {
    //     id: 3,
    //     name: "Surgery",
    //     image: "/asset/category/surgery-room.png",
    //   },
    //   {
    //     id: 4,
    //     name: "Monitoring",
    //     image: "/asset/category/monitoring.png",
    //   },
    //   {
    //     id: 5,
    //     name: "Respiratory",
    //     image: "/asset/category/respiratory.png",
    //   },
    //   {
    //     id: 6,
    //     name: "Dental",
    //     image: "/asset/category/dental.png",
    //   },
    //   {
    //     id: 7,
    //     name: "Cardiology",
    //     image: "/asset/category/cardiology.png",
    //   },
    //   {
    //     id: 8,
    //     name: "Rehabilitation",
    //     image: "/asset/category/regabiliatition.png",
    //   },
    //   {
    //     id: 9,
    //     name: "Emergency",
    //     image: "/asset/category/emergency.png",
    //   },
    //   {
    //     id: 10,
    //     name: "Orthopedics",
    //     image: "/asset/category/joint.png",
    //   },
    // ],
  },
  {
    id: "9",
    name: "SignIn",
    haveList: false,
    icon: <FaSignInAlt className=" text-3xl text-primary/40" />,
    path: "/register",
  },
];
const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const router = useRouter();

  return (
    <section className="block xl:hidden main-container py-4 bg-white text-black">
      <div className="flex justify-between items-center">
        <div className=" flex gap-5 items-center">
          <p
            onClick={() => setOpen(true)}
            className=" w-10 h-10 rounded-lg bg-primary/20 cursor-pointer p-1 flex items-center justify-center"
          >
            <HiMenuAlt1 className=" text-2xl" />
          </p>
          <Link href="/" className="">
            <img
              src="/logo.png"
              alt="TerracottaCraft"
              className="w-32 md:w-40"
            />
          </Link>
        </div>
        <div className=" flex items-center gap-3">
          <p
            className=" w-10 h-10 rounded-lg hover:bg-primary/20 duration-300 bg-white cursor-pointer p-1 flex items-center justify-center"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <BiSearch className=" text-2xl  text-primary/70 cursor-pointer" />
          </p>

          <Link href="/cart">
            <p className=" relative w-10 h-10 rounded-lg hover:bg-primary/20 duration-300 bg-white cursor-pointer p-1 flex items-center justify-center">
              <span className=" absolute -top-1 -right-1 bg-red-500 w-5 h-5 rounded-full flex items-center justify-center text-white font-medium text-xs">
                0
              </span>
              <HiOutlineShoppingCart className=" text-2xl  text-primary/70 cursor-pointer" />
            </p>
          </Link>
          <Link href="/login">
            <p className=" w-10 h-10 rounded-lg hover:bg-primary/20 duration-300 bg-white cursor-pointer p-1 flex items-center justify-center">
              <AiOutlineUser className="  text-2xl  text-primary/70 cursor-pointer" />
            </p>
          </Link>
        </div>
      </div>
      <Drawer open={open} onClose={() => setOpen(false)} anchor={"left"}>
        <div className=" w-4/5 md:w-4/6  bg-primary  h-screen flex flex-col">
          <div className=" w-full h-[10%] justify-between items-center flex bg-primary/20 p-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
            <img
              src="/logo.png"
              className=" w-3/5 h-fit object-contain"
              alt=""
            />
            <p
              onClick={() => setOpen(false)}
              className=" w-10 h-10 md:w-14 md:h-14 rounded-lg bg-primary/20 duration-300  cursor-pointer p-1 flex items-center justify-center"
            >
              <RiMenu3Fill className="  text-2xl md:text-3xl   text-gray-700 cursor-pointer" />
            </p>
          </div>
          <div className="w-full h-[80%] overflow-y-auto">
            <div className=" w-full h-full flex flex-col gap-3 py-3 px-5">
              {MENU_ARR.map((item) =>
                item?.haveList ? (
                  <MenuCollapse
                    key={item?.id}
                    title={item?.name}
                    icon={item?.icon}
                  >
                    <div className=" w-full flex flex-col gap-2 ">
                      {item?.list?.map((data) => (
                        <div
                          onClick={() => router.push(data?.path)}
                          key={data?.id}
                        >
                          <div className="w-full flex items-center gap-5 border hover:shadow-[0px_0px_6px_0px_#00000024] hover:bg-white duration-300 rounded-lg p-3">
                            <img
                              src={data?.image}
                              className=" w-8 h-8 object-contain"
                              alt=""
                            />
                            <p className=" text-lg font-semibold text-gray-800">
                              {data?.name}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </MenuCollapse>
                ) : (
                  <Link href={item.path} key={item?.id}>
                    <div className=" flex items-center gap-5 w-full rounded-lg bg-white shadow-[0px_0px_6px_0px_#00000024] cursor-pointer hover:bg-primary/20 duration-300 p-4">
                      {item?.icon}
                      <p className=" text-lg font-semibold text-gray-800">
                        {item?.name}
                      </p>
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>
          <div className=" w-full  h-[10%] bg-primary/20 flex items-center">
            <div className=" w-full  py-5 px-3 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src="/asset/house.png"
                  className=" w-12 h-12 rounded-lg object-contain"
                  alt=""
                />
                <p className=" flex flex-col">
                  <span className=" text-lg md:text-2xl font-bold text-gray-700">
                    YardHealth
                  </span>
                  <span className=" text-sm md:text-xl text-gray-600">
                    yardhealth@gmail.com
                  </span>
                </p>
              </div>
              <TbLogout2 className=" text-3xl md:text-5xl cursor-pointer text-red-500" />
            </div>
          </div>
        </div>
      </Drawer>
    </section>
  );
};

export default MobileNavbar;

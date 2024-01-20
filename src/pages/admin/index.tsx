// import BarChart from "@/components/charts/BarChart";
// import CircleChart from "@/components/charts/CircleChart";
import { AdminLayout } from "@/layouts";
import React, { useEffect, useRef, useState } from "react";
import { BsStopwatch } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import { FaEllipsisVertical } from "react-icons/fa6";
import { IoIosArrowUp, IoMdArrowRoundUp } from "react-icons/io";
import { MdKeyboardArrowDown, MdPayment } from "react-icons/md";
import { ImPaypal } from "react-icons/im";
import PieChart from "@/components/charts/PieChart";
import CircleChart from "@/components/charts/CircleChart";
import BarChart from "@/components/charts/BarChart";
import { useTheme } from "@/context/ThemeProvide";
const YearData = [
  {
    title: "2019",
    value: "2019",
  },
  {
    title: "2020",
    value: "2020",
  },
  {
    title: "2021",
    value: "2021",
  },
  {
    title: "2022",
    value: "2022",
  },
  {
    title: "2023",
    value: "2023",
  },
  {
    title: "2024",
    value: "2024",
  },
  {
    title: "2025",
    value: "2025",
  },
];
const Home = () => {
  const mainDivRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();
  const [yearOpen, setYearOpen] = useState(false);
  const [yearValue, setYearValue] = useState<string>("2019");
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        yearOpen &&
        mainDivRef.current &&
        !(
          event.target instanceof Node &&
          mainDivRef.current.contains(event.target)
        )
      ) {
        setYearOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setYearOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [yearOpen, setYearOpen]);
  return (
    <AdminLayout title="Admin Dashboard">
      <div className=" w-full h-full flex flex-col gap-5 py-3 ">
        <div className=" flex items-center justify-between gap-5">
          <div className=" w-[67%] commonClass  rounded-lg shadow-[0px_0px_10px_1px_#e2e8f0] h-44 px-6 py-5 flex justify-between">
            <div className=" flex flex-col justify-between w-[60%]">
              <p className=" font-medium text-primary font-serif text-lg">
                Congratulations Rajesh! 🎉
              </p>
              <p className=" font-medium text-sm dark-text">
                You have done 72% more sales today. Check your new badge in your
                profile.
              </p>
              <p className=" w-40 flex items-center justify-center cursor-pointer text-primary py-1 px-3 rounded-md border border-primary">
                View Badges
              </p>
            </div>
            <div className="w-[40%] h-full flex relative">
              <img
                src="/admin/entry.png"
                className=" w-fit h-full absolute -bottom-5 right-10"
                alt=""
              />
            </div>
          </div>
          <div className="  flex items-center justify-between w-[33%] h-44 gap-5">
            <div className="commonClass w-full px-6 py-5 h-full  rounded-lg   flex flex-col justify-between ">
              <p className=" absolute top-7 cursor-pointer right-5 text-gray-400">
                <FaEllipsisVertical />
              </p>
              <p className=" w-10 p-2 rounded-lg flex items-center justify-center bg-lime-50">
                <BsStopwatch className=" text-lime-500 text-2xl" />
              </p>
              <p className="flex flex-col gap-0.5">
                <span className=" font-medium text-gray-400 text-sm">
                  Profit
                </span>
                <span className=" text-gray-500 font-medium text-2xl">
                  $12,628
                </span>
              </p>
              <p className=" flex items-center gap-1 text-lime-400 font-semibold text-sm">
                <IoMdArrowRoundUp />
                <span> +72.80%</span>
              </p>
            </div>
            <div className="commonClass  w-full px-6 py-5 h-full  rounded-lg   flex flex-col justify-between ">
              <p className=" absolute top-7 cursor-pointer right-5 text-gray-400">
                <FaEllipsisVertical />
              </p>
              <p className=" w-10 p-2 rounded-lg flex items-center justify-center bg-cyan-50">
                <CiWallet className=" text-cyan-500 text-2xl" />
              </p>
              <p className="flex flex-col gap-0.5">
                <span className=" font-medium text-gray-400 text-sm">
                  Sales
                </span>
                <span className=" text-gray-500 font-medium text-2xl">
                  $12,628
                </span>
              </p>
              <p className=" flex items-center gap-1 text-cyan-400 font-semibold text-sm">
                <IoMdArrowRoundUp />
                <span> +72.80%</span>
              </p>
            </div>
          </div>
        </div>
        <div className="  flex items-center justify-between gap-5">
          <div className="w-[67%] commonClass   h-96 rounded-lg  flex justify-between">
            <div className="w-[65%] h-full  flex flex-col gap-2 px-2 pt-3">
              <p className=" font-medium tracking-wider text-gray-500 px-4 text-lg ">
                Total Revenue
              </p>
              <BarChart />
            </div>
            <div
              className={`w-[35%] h-full border-l ${
                theme === "light" ? `border-gray-300` : `border-gray-700`
              }  flex items-center justify-center `}
            >
              <div className="w-full h-full p-4 flex flex-col justify-between items-center">
                <div
                  onClick={() => setYearOpen(!yearOpen)}
                  className="py-1.5 px-3 cursor-pointer gap-1 relative   text-primary border border-primary rounded-md text-sm w-20 flex items-center justify-center"
                >
                  {yearValue}
                  <MdKeyboardArrowDown />
                  {yearOpen && (
                    <div
                      ref={mainDivRef}
                      className=" absolute top-6  -left-20  shadow-[0px_0px_10px_2px_#e2e8f0] items-center rounded-lg w-fit h-fit flex flex-col gap-1"
                    >
                      {YearData?.map((item, i) => (
                        <p
                          key={i}
                          onClick={() => setYearValue(item?.value)}
                          className={`py-2 px-5  rounded-md
                          ${
                            item?.value === yearValue
                              ? `bg-primary/10`
                              : `hover:bg-gray-100`
                          }
                          `}
                        >
                          {item?.title}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                <CircleChart />
                <p className=" font-medium text-gray-500">62% Company Growth</p>
              </div>
            </div>
          </div>
          <div className="w-[33%]  h-96 rounded-lg flex flex-col gap-5">
            <div className=" w-full h-full flex items-center justify-between gap-5">
              <div className="commonClass w-full px-6 py-5 h-full  rounded-lg   flex flex-col justify-between ">
                <p className=" absolute top-7 cursor-pointer right-5 text-gray-400">
                  <FaEllipsisVertical />
                </p>
                <p className=" w-10 p-2 rounded-lg flex items-center justify-center bg-red-50">
                  <ImPaypal className=" text-red-500 text-2xl" />
                </p>
                <p className="flex flex-col gap-0.5">
                  <span className=" font-medium text-gray-400 text-sm">
                    Payments
                  </span>
                  <span className=" text-gray-500 font-medium text-2xl">
                    $2,456
                  </span>
                </p>
                <p className=" flex items-center gap-1 text-red-400 font-semibold text-sm">
                  <IoMdArrowRoundUp />
                  <span> -14.82%</span>
                </p>
              </div>
              <div className="commonClass w-full px-6 py-5 h-full  rounded-lg   flex flex-col justify-between ">
                <p className=" absolute top-7 cursor-pointer right-5 text-gray-400">
                  <FaEllipsisVertical />
                </p>
                <p className=" w-10 p-2 rounded-lg flex items-center justify-center bg-yellow-50">
                  <MdPayment className=" text-yellow-400 text-2xl" />
                </p>
                <p className="flex flex-col gap-0.5">
                  <span className=" font-medium text-gray-400 text-sm">
                    Revenue
                  </span>
                  <span className=" text-gray-500 font-medium text-2xl">
                    $42,389
                  </span>
                </p>
                <p className=" flex items-center gap-1 text-lime-400 font-semibold text-sm">
                  <IoMdArrowRoundUp />
                  <span>+52.18%</span>
                </p>
              </div>
            </div>
            <div className=" w-full h-full flex items-center justify-between gap-5">
              <div className="commonClass w-full px-6 py-5 h-full rounded-lg shadow-[0px_0px_10px_2px_#e2e8f0]  flex flex-col justify-between ">
                <p className=" absolute top-7 cursor-pointer right-5 text-gray-400">
                  <FaEllipsisVertical />
                </p>
                <p className=" w-10 p-2 rounded-lg flex items-center justify-center bg-red-50">
                  <ImPaypal className=" text-red-500 text-2xl" />
                </p>
                <p className="flex flex-col gap-0.5">
                  <span className=" font-medium text-gray-400 text-sm">
                    Payments
                  </span>
                  <span className=" text-gray-500 font-medium text-2xl">
                    $2,456
                  </span>
                </p>
                <p className=" flex items-center gap-1 text-red-400 font-semibold text-sm">
                  <IoMdArrowRoundUp />
                  <span> -14.82%</span>
                </p>
              </div>
              <div className="commonClass w-full px-6 py-5 h-full  rounded-lg shadow-[0px_0px_10px_2px_#e2e8f0]  flex flex-col justify-between ">
                <p className=" absolute top-7 cursor-pointer right-5 text-gray-400">
                  <FaEllipsisVertical />
                </p>
                <p className=" w-10 p-2 rounded-lg flex items-center justify-center bg-primary/10">
                  <MdPayment className=" text-primary text-2xl" />
                </p>
                <p className="flex flex-col gap-0.5">
                  <span className=" font-medium text-gray-400 text-sm">
                    Transactions
                  </span>
                  <span className=" text-gray-500 font-medium text-2xl">
                    $14,857
                  </span>
                </p>
                <p className=" flex items-center gap-1 text-lime-400 font-semibold text-sm">
                  <IoMdArrowRoundUp />
                  <span>+28.14%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="   items-center  gap-5 w-full grid grid-cols-3 pb-5">
          <div className="w-full h-[30rem] commonClass rounded-lg  flex flex-col  px-5 py-2">
            <div className="w-full h-[15%]  flex items-center justify-between">
              <p className=" flex flex-col ">
                <span className="text-xl font-medium text-gray-600">
                  Order Statistics
                </span>
                <span className="text-sm font-medium text-gray-400">
                  42.82k Total Sales
                </span>
              </p>
              <p className=" text-gray-500 cursor-pointer">
                <FaEllipsisVertical />
              </p>
            </div>
            <div className="w-full h-[30%]  flex items-center justify-between">
              <p className=" w-1/2 flex flex-col gap-1">
                <span className="font-semibold text-gray-600 text-2xl">
                  8,258
                </span>
                <span className=" text-gray-400">Total Orders</span>
              </p>
              <div className="w-1/2 flex items-center justify-end">
                <PieChart />
              </div>
            </div>
            <div className="w-full h-[65%] border border-red-500"></div>
          </div>
          <div className="w-full h-[30rem] commonClass rounded-lg "></div>
          <div className="w-full h-[30rem] commonClass rounded-lg "></div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Home;

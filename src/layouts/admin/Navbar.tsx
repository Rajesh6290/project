import { useTheme } from "@/context/ThemeProvide";
import useMenuItems from "@/hooks/useMenuItems";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineFullscreen, AiOutlineMenuUnfold } from "react-icons/ai";
import { FaAnglesRight } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import {
  MdDarkMode,
  MdKeyboardDoubleArrowRight,
  MdNotificationsNone,
  MdOutlineChat,
  MdOutlineLightMode,
} from "react-icons/md";
interface Props {
  isFull: boolean;
  setIsFull: any;
}
const Navbar = ({ isFull, setIsFull }: Props) => {
  const { theme, toggleTheme } = useTheme();
  const [isFullScreen, setIsFullScreen] = useState(false);
  const MenuItems = useMenuItems;
  const { pathname } = useRouter();
  const toggleFullScreen = () => {
    if (!isFullScreen) {
      // Enter full screen mode
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
    } else {
      // Exit full screen mode
      if (document?.exitFullscreen) {
        document?.exitFullscreen();
      }
    }

    setIsFullScreen(!isFullScreen);
  };

  useEffect(() => {
    const handleFullScreen = (event: KeyboardEvent) => {
      if (event?.ctrlKey && event?.shiftKey && event.key === "K") {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        }
      } else if (event?.key === "Escape") {
        if (document?.exitFullscreen) {
          document?.exitFullscreen();
        }
      }
    };
    return document.addEventListener("keydown", handleFullScreen);
  }, []);
  return (
    <nav className=" sticky top-0  w-full h-fit flex items-center  justify-center pt-3 ">
      <div className=" w-[98%] commonClass  flex items-center px-5  shadow-[0px_0px_10px_2px_#e2e8f0] rounded-md h-16">
        <div className=" w-full flex items-center justify-between">
          <div className=" flex items-center gap-4">
            <p
              onClick={() => setIsFull(!isFull)}
              className="  flex items-center cursor-pointer border-primary justify-center border rounded-md p-2"
            >
              {isFull ? (
                <FaAnglesRight className="text-xl text-primary" />
              ) : (
                <AiOutlineMenuUnfold className="text-xl text-primary  " />
              )}
            </p>
            <p className=" flex items-center cursor-pointer border-primary justify-center border rounded-md p-2">
              <IoIosSearch className="text-xl  text-primary " />
            </p>
            <div
              className={`flex items-center font-semibold text-[1.1rem] tracking-wide uppercase ${
                theme === "light" ? "text-gray-900" : "text-primary"
              }`}
            >
              {MenuItems.find((item) => item.route === pathname)?.title}
              {
                MenuItems?.find((item) =>
                  item?.submenus?.find(
                    (submenus) => submenus.route === pathname
                  )
                )?.title
              }
              {MenuItems.find((item) =>
                item?.submenus?.find((submenus) => submenus.route === pathname)
              )?.title ? (
                <span className="px-2 flex items-center">
                  <MdKeyboardDoubleArrowRight className="!text-xl" />
                </span>
              ) : (
                <span> </span>
              )}

              {
                MenuItems?.find((item) =>
                  item?.submenus?.find(
                    (submenus) => submenus.route === pathname
                  )
                )?.submenus?.find((submenus) => submenus.route === pathname)
                  ?.title
              }
            </div>
          </div>
          <div className=" flex items-center gap-5">
            <p onClick={toggleFullScreen} className=" cursor-pointer ">
              <AiOutlineFullscreen className="text-2xl  text-primary " />
            </p>
            <p className=" cursor-pointer ">
              <MdOutlineChat className="text-2xl  text-primary " />
            </p>
            <p className=" cursor-pointer ">
              <MdNotificationsNone className="text-2xl  text-primary " />
            </p>
            <p onClick={toggleTheme} className=" cursor-pointer ">
              {theme === "light" ? (
                <MdOutlineLightMode className="text-2xl  text-primary " />
              ) : (
                <MdDarkMode className="text-2xl  text-primary " />
              )}
            </p>
            <div className=" w-9 h-9 rounded-full flex items-center justify-center relative cursor-pointer">
              <p className=" absolute bottom-0 right-0 z-10 p-1 rounded-full bg-green-600"></p>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuPy33jRr8oKADvBbqq0TU6dQ7fOms_eoDQPR33BWhpWBlJaFwp_aHmM8Den-ePhdqx7Y&usqp=CAU"
                alt=""
                className=" w-full h-full object-fill rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

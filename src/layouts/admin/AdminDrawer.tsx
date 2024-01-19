import Collapse from "@/components/common/Collapse";
import { UseMenuItems } from "@/hooks";
import { useRouter } from "next/router";
import { Fragment } from "react";

interface Props {
  isFull: boolean;
  setIsFull: any;
}
const AdminDrawer = ({ isFull, setIsFull }: Props) => {
  const router = useRouter();

  return (
    <div
      className={`h-screen  lg:block hidden duration-500  bg-gradient-to-b  p-2  transition-all z-0 ease-out  ${
        isFull ? "w-[6%]" : "w-[20%]"
      }`}
    >
      <div
        className={`commonClass  shadow-[0px_0px_10px_2px_#e2e8f0]  w-full h-full flex items-center flex-col gap-2  py-1
      ${isFull ? `rounded-xl` : `rounded-2xl`}
      `}
      >
        <div
          onClick={() => router?.push("/admin")}
          className="w-full cursor-pointer flex px-6  items-center justify-center  h-[10%]  "
        >
          {isFull ? (
            <img src="/slogo.png" alt="logo" className="w-10 h-10" />
          ) : (
            <img src="/logo.png" alt="logo" className=" w-full h-10" />
          )}
        </div>
        {/* <hr className=" w-full bg-black/50" /> */}
        <div className="w-full h-[90%] overflow-y-auto scroll-hide flex flex-col gap-2 pb-3 px-4">
          {UseMenuItems?.map((item: any, i: number) =>
            item?.submenus ? (
              <Fragment key={i}>
                <Collapse
                  isFull={isFull}
                  title={item?.title}
                  icon={item?.icon}
                  data={item}
                >
                  <div
                    className={`flex w-full flex-col   py-1
                ${isFull ? `px-2 gap-3` : `px-4 gap-1`}
                `}
                  >
                    {item?.submenus?.map((subItem: any, i: number) => (
                      <div
                        key={i}
                        onClick={() => router?.push(subItem?.route)}
                        className={`flex relative items-center font-medium cursor-pointer gap-4 
                      ${isFull ? `p-1` : `p-2`}
                    ${
                      subItem?.route === router?.asPath
                        ? ` bg-primary/10 rounded-lg text-primary`
                        : `hover:bg-primary/10 duration-300 rounded-lg text-gray-500 `
                    }
                    `}
                      >
                        {isFull ? null : subItem?.route === router?.asPath ? (
                          <span className=" absolute z-10 h-7 w-1 top-1.5 right-0.5 rounded-l bg-primary"></span>
                        ) : null}
                        {subItem?.icon}

                        {isFull ? null : <p className="  ">{subItem?.title}</p>}
                      </div>
                    ))}
                  </div>
                </Collapse>
              </Fragment>
            ) : (
              <div
                key={i}
                onClick={() => router?.push(item?.route)}
                className={`${
                  item?.route === router?.asPath
                    ? " bg-primary/10  rounded-lg text-primary"
                    : "text-gray-500 hover:bg-primary/5 duration-300 rounded-lg"
                } flex items-center cursor-pointer gap-4 px-3 py-3 font-medium text-base tracking-wider relative `}
              >
                {item?.route === router?.asPath ? (
                  <span className=" absolute z-10 h-[2.58rem] w-1 top-1 -right-4 rounded-l bg-primary"></span>
                ) : null}

                {item?.icon}

                {isFull ? null : item?.title}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDrawer;

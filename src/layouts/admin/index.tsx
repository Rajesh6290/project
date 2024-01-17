// import { useAppContext } from "contexts";
import Head from "next/head";
import AdminDrawer from "./AdminDrawer";
import Navbar from "./Navbar";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
};
export default function AdminLayout({
  children = <></>,
  title = "Dashboard Layout",
  description,
  ogImage,
}: Props) {
  const [isFull, setIsFull] = useState(false);
  return (
    <>
      <Head>
        <meta property="og:url" content="https://printbrix-web.vercel.app/" />
        <meta property="og:type" content="website" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          property="og:image"
          content={ogImage || "https://printbrix-web.vercel.app/logo.png"}
        />
      </Head>
      <section className=" w-full  h-screen ">
        <div className=" relative w-full h-full flex items-start  justify-between bg-[#f5f5f9]">
          <AdminDrawer isFull={isFull} setIsFull={setIsFull} />
          <div
            className={`h-full  duration-500 transition-all ease-out
          ${isFull ? "lg:w-[95.5%] w-full" : " lg:w-[90%] w-full"}
          
          `}
          >
            <Navbar isFull={isFull} setIsFull={setIsFull} />
            <article className="w-full h-[calc(100vh-78px)] overflow-y-scroll px-3 py-2 ">
              {children}
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

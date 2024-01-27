import Slider from "react-slick";

const CategorySlider = () => {
  const Category_arr = [
    {
      id: "1",
      imageUrl: "/product/p11.webp",
    },
    {
      id: "2",
      imageUrl: "/product/p12.webp",
    },
    {
      id: "3",
      imageUrl: "/product/p13.webp",
    },
    {
      id: "4",
      imageUrl: "/product/p14.avif",
    },
    {
      id: "5",
      imageUrl: "/product/p15.avif",
    },
    {
      id: "6",
      imageUrl: "/product/p16.avif",
    },
    {
      id: "7",
      imageUrl: "/product/p17.avif",
    },
    {
      id: "8",
      imageUrl: "/product/p18.jpg",
    },
    {
      id: "9",
      imageUrl: "/home/customersSlider/logo_9.jpg",
    },
    {
      id: "10",
      imageUrl: "/home/customersSlider/logo_10.jpeg",
    },
  ];
  const settings = {
    infinite: true,
    slidesToShow: 7,
    arrows: false,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <section className="main-container flex flex-col gap-10 top-spacing py-10">
      <article className="flex flex-col gap-1 items-center">
        <div className="w-full text-center">
          <h2 className="title">
            Discover Our Popular
            <span className=" text-gray-500"> Category</span>{" "}
          </h2>
        </div>
        <p className="h-1 w-48 bg-primary rounded-full"></p>
      </article>

      <div className="relative w-full overflow-hidden feature-slick-slider z-0 ">
        <div className="absolute bg-gradient-to-r from-white via-white/40 to-white/10 h-[10rem] w-[8rem] left-0 z-10"></div>
        <div className="absolute bg-gradient-to-l from-white via-white/40 to-white/10 h-[10rem] w-[8rem] right-0 z-10"></div>
      </div>
    </section>
  );
};

export default CategorySlider;

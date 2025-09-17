import React, { useState, useEffect } from "react";

function Homepage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: "/img/home1.jpg",
      title: "Perfect Learned",
      subtitle: "For Your Child",
      button: "Read More",
    },
    {
      src: "/img/homepage2.jpg",
      title: "Better Education",
      subtitle: "For Bright Future",
      button: "Join Now",
    },
  ];

  // Auto-advance: using timeout so manual clicks reset the timer
  useEffect(() => {
    const t = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearTimeout(t);
  }, [activeIndex, images.length]);

  return (
    <div className="mb-10">
      {/* Carousel */}
      <div className="relative overflow-hidden h-[80vh] w-full max-sm:h-[60vh]">
        {/* slides wrapper: translateX moves slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((item, idx) => (
            <div
              key={idx}
              className="min-w-full h-[80vh] relative flex items-center justify-center max-sm:h-[60vh]"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* Optional subtle gradient so white text stays readable */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.25) 100%)",
                }}
              />

              {/* Overlay text & button (centered) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 bottom-32 text-center max-sm:bottom-0 max-sm:px-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl gap-2 p-2 font-extrabold leading-tight text-white drop-shadow-lg max-sm:text-3xl max-sm:p-1">
                  {item.title}
                </h1>
                <h2 className="text-4xl md:text-6xl lg:text-7xl gap-2 p-2 font-extrabold leading-tight text-white drop-shadow-lg mb-6 max-sm:text-3xl max-sm:p-1 max-sm:mb-4">
                  {item.subtitle}
                </h2>
                <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition max-sm:px-5 max-sm:py-2">
                  {item.button}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Manual operator circles (dots) */}
        <div className="absolute bottom-48 left-1/2 -translate-x-1/2 flex gap-3 z-20 max-sm:bottom-6">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setActiveIndex(i)}
              className={`w-4 h-4 rounded-full flex items-center justify-center transition-transform duration-150
                ${activeIndex === i ? "bg-blue-500 scale-125" : "bg-transparent border-2 border-white hover:scale-110"}
                max-sm:w-3 max-sm:h-3
              `}
            />
          ))}
        </div>
      </div>

      {/* Card section (unchanged for md/lg; stacked on phones) */}
      <div className="flex text-center relative  bottom-40 max-sm:bottom-0 max-sm:flex-col max-sm:gap-3 max-sm:px-3 max-sm:py-3">
        <div className="border border-gray-400 p-5 bg-sky-600 text-white flex-1 items-center text-center max-sm:p-4 max-sm:rounded-lg">
          <span className="text-[50px]  relative md:bottom-20 bg-white rounded-full p-4 inline-block max-sm:text-[36px] max-sm:p-3 max-sm:-top-3">
            👨‍🏫
          </span>
          <h1 className="text-center font-bold text-2xl mt-4 max-sm:text-xl">Certified Teacher</h1>
          <p className="max-sm:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, ipsam
            sed hic at minima facilis.
          </p>
        </div>

        <div className="border border-gray-400 p-5 bg-green-500 text-white flex-1 text-center items-center max-sm:p-4 max-sm:rounded-lg">
          <span className="text-[50px] relative md:bottom-20 bg-white rounded-full p-4 inline-block max-sm:text-[36px] max-sm:p-3 max-sm:-top-3">
            🎓
          </span>
          <h1 className="text-center font-bold text-2xl mt-4 max-sm:text-xl">Special Education</h1>
          <p className="max-sm:text-sm">
            Lmollitia totamm dolores dignissimos Lorem ipsum dolor sit amet
            consectetur adipisicing elit.!
          </p>
        </div>

        <div className="border border-gray-400 p-5 bg-blue-700 text-white flex-1 items-center text-center max-sm:p-4 max-sm:rounded-lg">
          <span className="text-[50px] relative md:bottom-20 bg-white rounded-full p-4 inline-block max-sm:text-[36px] max-sm:p-3 max-sm:-top-3">
            📚
          </span>
          <h1 className="font-bold text-2xl mt-4 max-sm:text-xl">Book & library</h1>
          <p className="mb-4 max-sm:mb-2 max-sm:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            illum commodi maxime mollitia reprehenderit ullam.
          </p>
        </div>

        <div className="border border-gray-400 p-5 bg-red-500 text-white flex-1 items-center text-center max-sm:p-4 max-sm:rounded-lg">
          <span className="text-[50px] relative bottom-20  bg-white rounded-full p-4 inline-block max-sm:text-[36px] max-sm:p-3 max-sm:-top-3">
            🏅
          </span>
          <h1 className="text-center font-bold text-2xl mt-4 max-sm:text-xl">Certification</h1>
          <p className="max-sm:text-sm">
            cupiditate impedit quam nemo. Ipsum animi mollitia totam eius fuga
            ducimus Lorem ipsum dolor sit amet.!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

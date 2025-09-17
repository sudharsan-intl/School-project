import Footer from "./components/Footer";
import Header from "./components/Header";
import React, { useEffect, useRef, useState } from "react";

function Price() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          obs.disconnect(); // run once
        }
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const plans = [
    { name: "Basic", price: "$14.50", color: "bg-red-500", img: "/img/ts1.png" },
    { name: "Standard", price: "$24.50", color: "bg-purple-500", img: "/img/ts2.jpg" },
    { name: "Premium", price: "$34.50", color: "bg-pink-500", img: "/img/ts3.jpg" },
    { name: "Platinum", price: "$44.50", color: "bg-indigo-900", img: "/img/ts4.jpg" },
  ];

  return (
    <div>
      <Header />
      <div>

    <div className="w-full md:h-[450px] overflow-hidden">
  <img
    className="w-full h-full object-cover object-top" 
    src="/img/about.jpg"
    alt="About Us Hero"
  />
   <h1 className="text-5xl text-white   text-center font-extrabold relative bottom-72">
        Pricing 
      </h1>
</div>


      </div>

      <div ref={sectionRef}>
        <div className="flex m-10 justify-center gap-10 flex-wrap max-sm:flex-col max-sm:m-4 max-sm:gap-4 max-sm:items-center">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`w-[280px] sm:w-[320px] lg:w-[350px] text-center border border-slate-200 
                bg-white rounded-2xl shadow-lg p-5 flex flex-col justify-between
                transition-all duration-700 ease-in-out
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{ transitionDelay: visible ? `${i * 200}ms` : "0ms" }}
            >
              <h1 className="text-black font-bold mb-2 text-3xl">{plan.name}</h1>

              <div className="flex justify-center items-baseline mb-3">
                <h1 className="font-bold text-2xl" style={{ color: "#25a3cc" }}>
                  {plan.price}
                </h1>
                <h1 className="text-[12px] mt-2">/5mos</h1>
              </div>

              <img
                className="w-full h-[200px] object-cover rounded-xl mb-3"
                src={plan.img}
                alt={plan.name}
              />

              <h1 className="text-gray-600 px-2 mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Mollitia, sequi.
              </h1>

              <button
                className={`${plan.color} text-white rounded-full px-6 py-3 font-semibold hover:scale-105 transition`}
              >
                Take A Course
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Price;

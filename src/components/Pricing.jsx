import React, { useEffect, useRef, useState } from "react";

function Pricing() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const plans = [
    {
      name: "Basic",
      price: "$14.50",
      color: "bg-red-500",
      img: "/img/ts1.png",
    },
    {
      name: "Standard",
      price: "$24.50",
      color: "bg-purple-500",
      img: "/img/ts2.jpg",
    },
    {
      name: "Premium",
      price: "$34.50",
      color: "bg-pink-500",
      img: "/img/ts3.jpg",
    },
    {
      name: "Platinum",
      price: "$44.50",
      color: "bg-indigo-900",
      img: "/img/ts4.jpg",
    },
  ];

  return (
    <div ref={sectionRef}>
      <div>
        <div className="text-2xl  font-bold flex gap-3 text-center justify-center relative bottom-0 mt-8 p-5 max-sm:text-xl max-sm:bottom-0">
          <h1 className="text-blue-600">Our </h1>
          <h1 className="text-orange-500">Pricing :)</h1>
        </div>
        <h1 className="text-center text-gray-400 w-[900px] ml-72 mt-3 p-5 relative bottom-0 max-sm:w-full max-sm:ml-0 max-sm:px-3 max-sm:bottom-0">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          tenetur alias ipsam est minus facilis quasi sit dignissimos doloribus
          voluptates blanditiis corrupti illo mollitia assumenda.
        </h1>
      </div>

      {/* Cards */}
      <div className="flex m-10 justify-center gap-10 flex-wrap max-sm:flex-col max-sm:m-4 max-sm:gap-4 max-sm:items-center">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`w-[280px] sm:w-[320px] lg:w-[350px] text-center border border-slate-200 
              bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 
              transition-all duration-300 p-5 flex flex-col justify-between
              max-sm:transition-all max-sm:duration-1000 max-sm:ease-in-out
              ${
                visible
                  ? `max-sm:opacity-100 max-sm:translate-y-0 max-sm:delay-[${i * 200}ms]`
                  : "max-sm:opacity-0 max-sm:translate-y-10"
              }`}
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
  );
}

export default Pricing;

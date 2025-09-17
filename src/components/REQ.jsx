import React, { useEffect, useRef, useState } from "react";

function Req() {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

  // === scroll reveal animation (exact as before) ===
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

  const revealClasses =
    (visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10") +
    " transition-all duration-[1000ms] ease-in-out delay-300";

  // how many pixels the image can move (increase for stronger parallax)
  const MAX_MOVE = 500;

  useEffect(() => {
    const img = imgRef.current;
    const section = sectionRef.current;
    if (!img || !section) return;

    img.style.height = `calc(100% + ${MAX_MOVE}px)`;
    img.style.willChange = "transform";

    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

    const update = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.bottom > 0 && rect.top < windowHeight) {
        const progress = clamp(
          (windowHeight - rect.top) / (windowHeight + rect.height),
          0,
          1
        );

        // Smaller move on small screens to avoid overflow
        const isSmall = window.innerWidth < 640;
        const move = isSmall ? Math.min(200, MAX_MOVE) : MAX_MOVE;

        const target = progress * move;
        img.style.transform = `translateY(-${target}px)`;
      } else {
        img.style.transform = "translateY(0)";
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="req-section"
      className={`relative top-7 w-full p-5 h-[500px] bottom-10 overflow-hidden ${revealClasses} max-sm:h-[420px] max-sm:bottom-0`}
    >
      {/* Moving image (parallax) */}
      <img
        ref={imgRef}
        id="req-img"
        src="/img/REQ IMG.jpg"
        alt="Request background"
        className="absolute left-0 top-0 w-full h-full object-cover max-sm:scale-110"
      />

      {/* Left blue box */}
     <div className="absolute left-0 top-0 w-1/2 h-full bg-blue-500 text-white p-10 z-20 flex flex-col justify-center
                max-sm:relative max-sm:w-full max-sm:h-auto">

        <h1 className="font-extrabold text-3xl mb-4 max-sm:text-2xl">Request A Quote</h1>
        <p className="mb-6 max-sm:text-sm">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>

        <form className="space-y-4">
          <div className="flex space-x-4 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-3">
            <input
              placeholder="First Name"
              className="flex-1 bg-transparent placeholder-white border-b border-white outline-none p-2"
            />
            <input
              placeholder="Last Name"
              className="flex-1 bg-transparent placeholder-white border-b border-white outline-none p-2"
            />
          </div>

          <div className="flex space-x-4 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-3">
            <select className="flex-1 bg-transparent placeholder-white border-b border-white outline-none p-2">
              <option>Select your Course</option>
              <option>Sports</option>
              <option>Communication</option>
              <option>Language</option>
            </select>
            <input
              placeholder="Phone"
              className="flex-1 bg-transparent placeholder-white border-b border-white outline-none p-2"
            />
          </div>

          <div className="flex items-start space-x-4 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-4">
            <textarea
              placeholder="Message"
              className="flex-1 bg-transparent placeholder-white border-b border-white outline-none p-2 min-h-[90px]"
            />
            <button className="bg-orange-400 text-white px-6 py-3 rounded-full font-bold max-sm:w-full">
              Request A Quote
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Req;

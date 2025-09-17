import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

function Pcount() {
  // === Scroll reveal animation ===
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true); // triggers reveal + counters
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

  // === Pencil parallax effect ===
  useEffect(() => {
    const handleScroll = () => {
      const image = document.getElementById("pencil-img");
      const section = document.getElementById("pencil-section");
      if (!image || !section) return;

      const sectionRect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (sectionRect.bottom > 0 && sectionRect.top < windowHeight) {
        const scrollProgress = Math.min(
          Math.max(
            (windowHeight - sectionRect.top) /
              (windowHeight + section.offsetHeight),
            0
          ),
          1
        );
        const translateY = scrollProgress * 50; // max 50%
        image.style.transform = `translateY(-${translateY}%)`;
      } else {
        image.style.transform = "translateY(0)";
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // CountUp appears only when visible; shows nothing before reveal
  const CountWhenVisible = ({ end, duration, className = "" }) =>
    visible ? (
      <span className={className}>
        <CountUp end={end} duration={duration} />
      </span>
    ) : (
      <span className={className}>&nbsp;</span>
    );

  return (
    <div ref={sectionRef} className={revealClasses}>
      <div className="relative h-[500px] overflow-hidden" id="pencil-section">
        <img
          id="pencil-img"
          src="/img/pencil pic.jpg"
          alt="Pencil"
          className="absolute top-0 left-0 w-full transition-all duration-500 ease-in-out"
          style={{ transform: "translateY(0%)" }}
        />

        {/* === SM: Centered overlay counters (hidden on md+) === */}
        <div className="absolute bottom-60 inset-0 md:hidden flex items-center justify-center">
          <div className="bg-black/35 backdrop-blur-sm rounded-2xl px-5 py-6">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <CountWhenVisible
                  end={38}
                  duration={3.5}
                  className="text-3xl font-bold text-fuchsia-300 drop-shadow-[0_2px_8px_rgba(217,70,239,0.35)]"
                />
                <div className="text-white text-xs mt-1">Certified Teachers</div>
              </div>
              <div>
                <CountWhenVisible
                  end={551}
                  duration={4}
                  className="text-3xl font-bold text-emerald-300 drop-shadow-[0_2px_8px_rgba(52,211,153,0.35)]"
                />
                <div className="text-white text-xs mt-1">Successful Kids</div>
              </div>
              <div>
                <CountWhenVisible
                  end={764}
                  duration={4.5}
                  className="text-3xl font-bold text-cyan-300 drop-shadow-[0_2px_8px_rgba(34,211,238,0.35)]"
                />
                <div className="text-white text-xs mt-1">Happy Parents</div>
              </div>
              <div>
                <CountWhenVisible
                  end={600}
                  duration={5}
                  className="text-3xl font-bold text-amber-300 drop-shadow-[0_2px_8px_rgba(251,191,36,0.35)]"
                />
                <div className="text-white text-xs mt-1">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === MD+: Counter Content (hidden on sm) === */}
      <div className="hidden md:block text-center bg-transparent relative bottom-[500px] py-20">
        <h1 className="text-4xl font-bold text-purple-800 mb-4">
          20 Years of <span className="text-white">Experience</span>
        </h1>
        <p className="text-white max-w-2xl mx-auto mb-12">
          Separated they live in. A small river named Duden flows by their
          place and supplies it with the necessary regelialia. It is a
          paradisematic country.
        </p>

        <div className="flex flex-wrap justify-center gap-20 text-5xl font-bold">
          <div className="text-center">
            <CountWhenVisible
              end={38}
              duration={3.5}
              className="text-fuchsia-500 drop-shadow-[0_2px_8px_rgba(217,70,239,0.35)]"
            />
            <div className="text-white text-base mt-2">Certified Teachers</div>
          </div>
          <div className="text-center">
            <CountWhenVisible
              end={551}
              duration={4}
              className="text-emerald-400 drop-shadow-[0_2px_8px_rgba(52,211,153,0.35)]"
            />
            <div className="text-white text-base mt-2">Successful Kids</div>
          </div>
          <div className="text-center">
            <CountWhenVisible
              end={764}
              duration={4.5}
              className="text-cyan-400 drop-shadow-[0_2px_8px_rgba(34,211,238,0.35)]"
            />
            <div className="text-white text-base mt-2">Happy Parents</div>
          </div>
          <div className="text-center">
            <CountWhenVisible
              end={600}
              duration={5}
              className="text-amber-400 drop-shadow-[0_2px_8px_rgba(251,191,36,0.35)]"
            />
            <div className="text-white text-base mt-2">Awards Won</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pcount;

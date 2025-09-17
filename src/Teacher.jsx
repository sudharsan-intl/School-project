import Header from "./components/Header";
import { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa6";
import Footer from "./components/Footer";

function Teacher() {
  // --- simple intersection observer helper ---
  const useReveal = () => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const el = ref.current;
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

    return { ref, visible };
  };

  const cards = useReveal();

  return (
    <div>
      <Header />
      {/* img section */}
     <div className="w-full md:h-[450px] overflow-hidden">
  <img
    className="w-full h-full object-cover object-top" 
    src="/img/home1.jpg"
    alt="About Us Hero"
  />
</div>


      {/* Title */}
      <h1 className="text-5xl bg-gradient-to-t from-violet-900 to-gray-900 to-pink-600 bg-clip-text text-transparent text-center font-extrabold relative bottom-64">
        Certified Teacher
      </h1>

      {/* ===== Teacher Profiles (staggered reveal) ===== */}
      <div
        ref={cards.ref}
        className="flex justify-around ml-20 mr-20 relative 
                   max-sm:bottom-0 max-sm:ml-0 max-sm:mr-0
                   max-sm:flex-col max-sm:gap-6 max-sm:items-center flex-wrap gap-8"
      >
        {[
          { name: "Lisa", role: "English Teacher", img: "/img/teacher1.jpg" },
          { name: "Miza", role: "Maths Teacher", img: "/img/teacher 2.jpg" },
          { name: "Reo", role: "Science Teacher", img: "/img/teacher 3.jpg" },
          { name: "John", role: "Art Teacher", img: "/img/teacher 4.jpg" },
          { name: "Wilson", role: "History Teacher", img: "/img/p1.jpg" },
          { name: "Mike", role: "Computer Teacher", img: "/img/p2.jpg" },
          { name: "Zara", role: "Music Teacher", img: "/img/p5.jpg" },
          { name: "Jeny", role: "Dance Teacer", img: "/img/p4.jpg" },
        ].map((t, i) => (
          <div
            key={i}
            className={
              "w-72 max-sm:w-[92%] group bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-500 " +
              (cards.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6")
            }
            style={{
              transition: "all 900ms ease-out",
              transitionDelay: cards.visible ? `${i * 160}ms` : "0ms", // <- stagger
            }}
          >
            <div className="relative group overflow-hidden rounded-t-xl">
              <img
                className="w-full h-80 object-cover max-sm:h-60"
                src={t.img}
                alt={t.name}
              />
              {/* Hover overlay (desktop/tablet only) */}
              <div
                className="absolute inset-0 max-sm:hidden flex items-center justify-center space-x-4
                            bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <a href="#" className="text-white hover:text-blue-500">
                  <FaFacebookF className="text-2xl" />
                </a>
                <a href="#" className="text-white hover:text-blue-400">
                  <FaTwitter className="text-2xl" />
                </a>
                <a href="#" className="text-white hover:text-red-600">
                  <FaGooglePlusG className="text-2xl" />
                </a>
              </div>
            </div>

            {/* Social row on small screens */}
            <div
              className="hidden max-sm:flex justify-center gap-5 py-3 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <a href="#" className="text-orange-500">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-orange-500">
                <FaFacebookF className="text-xl" />
              </a>
              <a href="#" className="text-orange-500">
                <FaGooglePlusG className="text-xl" />
              </a>
            </div>

            {/* Text block */}
            <div className="mt-2 text-center max-sm:px-3 px-4 pb-4">
              <h1 className="text-lg font-bold max-sm:text-2xl max-sm:text-sky-600 group-hover:text-blue-600 transition-colors duration-300">
                {t.name}
              </h1>
              <h2 className="text-sm text-gray-600 max-sm:uppercase max-sm:tracking-wide">
                {t.role}
              </h2>
              <p className="text-xs text-gray-500 mt-2 max-sm:text-[13px]">
                I am an ambitious workaholic, but apart from that, pretty simple
                person.
              </p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default Teacher;

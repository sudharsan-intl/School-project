import { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa6";

function Profile() {
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

  // sections to animate
  const hero = useReveal();
  const heading = useReveal();
  const cards = useReveal(); // container for staggered cards

  // shared reveal classes
  const reveal = (v) =>
    (v ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6") +
    " transition-all duration-[1200ms] ease-in-out";

  return (
    <div className="mt-32 mb-10">
      <div className="relative max-sm:overflow-x-hidden">
        {/* ===== Hero (keep md/lg; fix only sm) ===== */}
        <div className="flex flex-col justify-center items-center">
          {/* Background image */}
          <div className="w-full">
            <img
              className="w-full object-cover max-sm:h-[250px] md:h-auto"
              src="/img/img4.jpg"
              alt="Hero"
            />
          </div>

          {/* Overlay text with scroll reveal */}
          <div
            ref={hero.ref}
            className={
              "parallax-container relative bottom-96 max-sm:bottom-64 mt-10 max-sm:mt-4 " +
              reveal(hero.visible)
            }
          >
            <div className="parallax-content text-white max-sm:px-4">
              <h1 className="text-5xl font-bold mb-4 max-sm:text-2xl">
                Teaching Your Child Some Good Manners
              </h1>
              <p className="text-lg w-1/2 max-sm:w-full max-sm:text-sm">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <button className="mt-6 bg-orange-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300 max-sm:mx-auto max-sm:text-sm">
                Take a Course
              </button>
            </div>
          </div>
        </div>

        {/* ===== Certified Teacher heading ===== */}
        <div className="sm:bottom-8">
          <div
            ref={heading.ref}
            className={"p-5 " + reveal(heading.visible)}
          >
            <div className="flex justify-center text-3xl font-semibold relative bottom-52 
                            max-sm:bottom-0 max-sm:text-2xl max-sm:flex-wrap max-sm:text-center">
              <h1 className="text-blue-600 mr-2">Certified</h1>
              <h1 className="text-orange-500">Teacher</h1>
            </div>
            <h1 className="text-center text-gray-400 w-[900px] ml-72 mt-3 p-2 relative bottom-52 
                          max-sm:w-full max-sm:ml-0 max-sm:px-3 max-sm:bottom-0 max-sm:text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
              tenetur alias ipsam est minus facilis quasi sit dignissimos
              doloribus voluptates blanditiis corrupti illo mollitia assumenda.
            </h1>
          </div>

          {/* ===== Teacher Profiles (staggered reveal) ===== */}
          <div
            ref={cards.ref}
            className="flex justify-around ml-20 mr-20 relative bottom-48
                       max-sm:bottom-0 max-sm:ml-0 max-sm:mr-0
                       max-sm:flex-col max-sm:gap-6 max-sm:items-center"
          >
            {[
              { name: "Lisa", role: "English Teacher", img: "/img/teacher1.jpg" },
              { name: "Miza", role: "English Teacher", img: "/img/teacher 2.jpg" },
              { name: "Reo", role: "English Teacher", img: "/img/teacher 3.jpg" },
              { name: "John", role: "English Teacher", img: "/img/teacher 4.jpg" },
            ].map((t, i) => (
              <div
                key={i}
                className={
                  "w-72 max-sm:w-[92%] group " +
                  (cards.visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6")
                }
                style={{
                  transition: "all 900ms ease-out",
                  transitionDelay: cards.visible ? `${i * 160}ms` : "0ms", // <- stagger
                }}
              >
                <div className="relative group overflow-hidden">
                  <img
                    className="w-full h-80 object-cover max-sm:h-60"
                    src={t.img}
                    alt={t.name}
                  />
                  {/* Hover overlay (desktop/tablet only) */}
                  <div className="absolute inset-0 max-sm:hidden flex items-center justify-center space-x-4
                                  bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                <div className="hidden max-sm:flex justify-center gap-5 py-3 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                <div className="mt-2 text-center max-sm:px-3">
                  <h1 className="text-lg font-bold max-sm:text-2xl max-sm:text-sky-600">
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
        </div>
      </div>
    </div>
  );
}

export default Profile;

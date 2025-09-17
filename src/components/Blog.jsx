import React, { useEffect, useRef, useState } from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Blog(){
  // === exact scroll animation from your reference ===
  const blogRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = blogRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect(); // run once
        }
      },
      { threshold: 0.15 } // trigger when ~15% visible
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const revealClasses =
    (visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10") +
    " transition-all duration-[1000ms] ease-in-out delay-300";

  return (
    <div ref={blogRef} className={revealClasses}>
      {/* content */}
      <div className="justify-center bg-gray-100 gap-8 max-sm:px-3">
        <div className="p-4">
          <div className="text-3xl font-bold flex gap-3 text-center justify-center max-sm:text-2xl">
            <h1 className="text-blue-600">Recent</h1>
            <h1 className="text-orange-500">Blog :)</h1>
          </div>
          <h1 className="text-center text-gray-400 max-w-3xl mx-auto mt-3 p-5 max-sm:p-3 max-sm:text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, tenetur alias ipsam est minus facilis quasi sit dignissimos doloribus voluptates blanditiis corrupti illo mollitia assumenda.
          </h1>
        </div>

        {/* Cards row */}
        <div className="flex justify-center gap-10 max-sm:flex-col max-sm:items-center max-sm:gap-6">
          {/* Card 1 */}
          <div className="bg-gray-100 py-16 max-sm:py-6 max-sm:w-full">
            <div className="w-[300px] bg-white shadow-md rounded-md overflow-hidden mx-auto max-sm:w-full max-sm:max-w-[360px]">
              <div className="relative">
                <img className="w-full h-[250px] object-cover max-sm:h-56" src="/img/k1.jpg" alt="blog" />
                <div className="absolute top-3 left-3 bg-purple-700 text-white px-3 py-2 text-center rounded-md">
                  <h1 className="text-lg font-bold">27</h1>
                  <p className="text-sm">January</p>
                  <p className="text-xs">2019</p>
                </div>
              </div>

              <div className="p-4">
                <h1 className="font-semibold text-[20px] mb-2 max-sm:text-lg">
                  Skills To Develop Your Child Memory
                </h1>
                <p className="text-gray-600 mb-4 max-sm:text-sm">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>

                <div className="flex justify-between items-center">
                  <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                    Read More →
                  </button>
                  <div className="text-sm max-sm:text-xs">
                    <span className="text-blue-500 font-medium cursor-pointer">Admin</span>
                    <span className="text-gray-400 ml-2">💬 3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 py-16 max-sm:py-6 max-sm:w-full">
            <div className="w-[300px] bg-white shadow-md rounded-md overflow-hidden mx-auto max-sm:w-full max-sm:max-w-[360px]">
              <div className="relative">
                <img className="w-full h-[250px] object-cover max-sm:h-56" src="/img/k2.jpg" alt="blog" />
                <div className="absolute top-3 left-3 bg-purple-700 text-white px-3 py-2 text-center rounded-md">
                  <h1 className="text-lg font-bold">27</h1>
                  <p className="text-sm">January</p>
                  <p className="text-xs">2019</p>
                </div>
              </div>

              <div className="p-4">
                <h1 className="font-semibold text-[20px] mb-2 max-sm:text-lg">
                  Skills To Develop Your Child Memory
                </h1>
                <p className="text-gray-600 mb-4 max-sm:text-sm">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>

                <div className="flex justify-between items-center">
                  <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                    Read More →
                  </button>
                  <div className="text-sm max-sm:text-xs">
                    <span className="text-blue-500 font-medium cursor-pointer">Admin</span>
                    <span className="text-gray-400 ml-2">💬 3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 py-16 max-sm:py-6 max-sm:w-full">
            <div className="w-[300px] bg-white shadow-md rounded-md overflow-hidden mx-auto max-sm:w-full max-sm:max-w-[360px]">
              <div className="relative">
                <img className="w-full h-[250px] object-cover max-sm:h-56" src="/img/ts2.jpg" alt="blog" />
                <div className="absolute top-3 left-3 bg-purple-700 text-white px-3 py-2 text-center rounded-md">
                  <h1 className="text-lg font-bold">27</h1>
                  <p className="text-sm">January</p>
                  <p className="text-xs">2019</p>
                </div>
              </div>

              <div className="p-4">
                <h1 className="font-semibold text-[20px] mb-2 max-sm:text-lg">
                  Skills To Develop Your Child Memory
                </h1>
                <p className="text-gray-600 mb-4 max-sm:text-sm">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>

                <div className="flex justify-between items-center">
                  <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                    Read More →
                  </button>
                  <div className="text-sm max-sm:text-xs">
                    <span className="text-blue-500 font-medium cursor-pointer">Admin</span>
                    <span className="text-gray-400 ml-2">💬 3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{/* /cards row */}
      </div>

      {/* ✅ Thumbnails: phone-only responsive; md/lg unchanged */}
      <div className="flex ml-3 gap-3 mr-3 max-sm:grid max-sm:grid-cols-2 max-sm:gap-3 max-sm:mx-2">
        {["/img/ts4.jpg", "/img/ts3.jpg", "/img/ts2.jpg", "/img/k1.jpg"].map(
          (src, i) => (
            <div key={i} className="relative group max-sm:w-full">
              <img
                src={src}
                alt="thumbnail"
                className="rounded-md w-[350px] h-[300px] max-sm:w-full max-sm:h-40 max-sm:object-cover"
              />
              {/* Overlay with Twitter icon */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <a href="/"><FaTwitter className="text-white text-2xl" /></a>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
export default Blog;

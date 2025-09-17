import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { useEffect, useRef, useState } from "react";

function Mainblog() {
  const blogRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const postsPerPage = 3;

  useEffect(() => {
    const el = blogRef.current;
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

  const revealClasses =
    (visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10") +
    " transition-all duration-[1000ms] ease-in-out delay-300";

  // ---- Blog data (instead of hardcoding each card) ----
  const blogPosts = [
    {
      id: 1,
      img: "/img/k1.jpg",
      date: { day: "27", month: "January", year: "2019" },
      title: "Skills To Develop Your Child Memory",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
      comments: 3,
    },
    {
      id: 2,
      img: "/img/k2.jpg",
      date: { day: "15", month: "March", year: "2020" },
      title: "Creative Ways To Learn",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, tenetur alias ipsam...",
      comments: 5,
    },
    {
      id: 3,
      img: "/img/ts2.jpg",
      date: { day: "10", month: "July", year: "2021" },
      title: "Fun Activities For Kids",
      desc: "Behind the word mountains, far from the countries Vokalia and Consonantia...",
      comments: 2,
    },
    {
      id: 4,
      img: "/img/k1.jpg",
      date: { day: "21", month: "August", year: "2022" },
      title: "Building Strong Habits",
      desc: "Quasi sit dignissimos doloribus voluptates blanditiis corrupti illo mollitia assumenda...",
      comments: 6,
    },
    {
      id: 5,
      img: "/img/k2.jpg",
      date: { day: "5", month: "October", year: "2023" },
      title: "Effective Parenting Skills",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia...",
      comments: 4,
    },



  {
      id: 6,
      img: "/img/k2.jpg",
      date: { day: "5", month: "October", year: "2023" },
      title: "Effective Parenting Skills",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia...",
      comments: 4,
    },

  {
      id: 7,
      img: "/img/k2.jpg",
      date: { day: "5", month: "October", year: "2023" },
      title: "Effective Parenting Skills",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia...",
      comments: 4,
    },


  {
      id: 8,
      img: "/img/k2.jpg",
      date: { day: "5", month: "October", year: "2023" },
      title: "Effective Parenting Skills",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia...",
      comments: 4,
    },





  ];

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  // Pick posts for current page
  const start = (activePage - 1) * postsPerPage;
  const currentPosts = blogPosts.slice(start, start + postsPerPage);

  return (
    <div>
      <Header />

      {/* Hero */}
      <div className="w-full md:h-[450px] overflow-hidden relative">
        <img
          className="w-full h-full object-cover object-top"
          src="/img/about.jpg"
          alt="About Us Hero"
        />
        <h1 className="text-5xl text-white text-center font-extrabold absolute inset-0 flex items-center justify-center">
          Our Blog :)
        </h1>
      </div>

      {/* Blog Section */}
      <div>
        <div ref={blogRef} className={revealClasses}>
          <div className="justify-center bg-gray-100 gap-8 max-sm:px-3">
           

            {/* Cards row */}
            <div className="flex md:flex-wrap justify-center gap-10 max-sm:flex-col max-sm:items-center max-sm:gap-6">
              {currentPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-gray-100 py-16 max-sm:py-6 max-sm:w-full"
                >
                  <div className="w-[300px] bg-white shadow-md rounded-md overflow-hidden mx-auto max-sm:w-full max-sm:max-w-[360px]">
                    <div className="relative">
                      <img
                        className="w-full h-[250px] object-cover max-sm:h-56"
                        src={post.img}
                        alt="blog"
                      />
                      <div className="absolute top-3 left-3 bg-purple-700 text-white px-3 py-2 text-center rounded-md">
                        <h1 className="text-lg font-bold">{post.date.day}</h1>
                        <p className="text-sm">{post.date.month}</p>
                        <p className="text-xs">{post.date.year}</p>
                      </div>
                    </div>

                    <div className="p-4">
                      <h1 className="font-semibold text-[20px] mb-2 max-sm:text-lg">
                        {post.title}
                      </h1>
                      <p className="text-gray-600 mb-4 max-sm:text-sm">
                        {post.desc}
                      </p>

                      <div className="flex justify-between items-center">
                        <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                          Read More →
                        </button>
                        <div className="text-sm max-sm:text-xs">
                          <span className="text-blue-500 font-medium cursor-pointer">
                            Admin
                          </span>
                          <span className="text-gray-400 ml-2">
                            💬 {post.comments}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-3">
        {/* Prev */}
        <button
          onClick={() => setActivePage((p) => Math.max(p - 1, 1))}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-orange-400 hover:text-white transition"
        >
          ◀
        </button>

        {/* Numbers */}
        {[...Array(totalPages)].map((_, idx) => {
          const num = idx + 1;
          return (
            <button
              key={num}
              onClick={() => setActivePage(num)}
              className={`w-10 h-10 flex items-center justify-center rounded-full border 
                transition ${
                  activePage === num
                    ? "bg-orange-400 text-white"
                    : "border-gray-300 text-gray-700 hover:bg-orange-400 hover:text-white"
                }`}
            >
              {num}
            </button>
          );
        })}

        {/* Next */}
        <button
          onClick={() => setActivePage((p) => Math.min(p + 1, totalPages))}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-orange-400 hover:text-white transition"
        >
          ▶
        </button>
      </div>

     <span className="relative top-10">  <Footer />    </span> 
    </div>
  );
}

export default Mainblog;

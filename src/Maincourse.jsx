import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Maincourse() {
  // === exact scroll animation from your reference ===
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
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
</div>



</div>





 <h1 className="text-5xl bg-gradient-to-t from-purple-500 via-teal-400 to-pink-300 bg-clip-text text-transparent text-center font-extrabold relative bottom-64">
        Our Courses :)
      </h1>






      <div className="relative md:top-44">
        <div ref={sectionRef} className={revealClasses}>
         
        

          {/* Course Section */}
          <div className="grid grid-cols-2 relative bottom-24 justify-center ml-48 max-sm:grid-cols-1 max-sm:bottom-0 max-sm:ml-0 max-sm:px-3 max-sm:gap-3">
            {/* Course 1 */}
            <CourseCard
              img="/img/ts1.png"
              title="Art Lesson"
              time="9am-10:00am"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, architecto!"
            />

            {/* Course 2 */}
            <CourseCard
              img="/img/ts2.jpg"
              title="Language Lesson"
              time="9am-10:00am"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, architecto!"
            />

            {/* Course 3 */}
            <CourseCard
              img="/img/ts3.jpg"
              title="Music Lesson"
              time="9am-10:00am"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, architecto!"
            />

            {/* Course 4 */}
            <CourseCard
              img="/img/ts4.jpg"
              title="Sport Lesson"
              time="9am-10:00am"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, architecto!"
            />

            {/* Extra Course 5 */}
            <CourseCard
              img="/img/ts3.jpg"
              title="Music Lesson"
              time="9am-10:00am"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, architecto!"
            />

            {/* Extra Course 6 */}
            <CourseCard
              img="/img/ts3.jpg"
              title="Music Lesson"
              time="9am-10:00am"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, architecto!"
            />
          </div>
        </div>
      </div>

    <span className="relative top-32"><Footer /></span>  
    </div>
  );
}

// Small reusable CourseCard to avoid repeating markup
function CourseCard({ img, title, time, desc }) {
  return (
    <div className="flex border bg-slate-50 w-[500px] p-1 m-2 max-sm:w-full max-sm:m-0 max-sm:p-2">
      <img
        className="w-64 max-sm:w-28 max-sm:h-28 max-sm:object-cover"
        src={img}
        alt={title}
      />
      <div className="flex-1">
        <h1 className="text-sky-400 font-semibold text-2xl p-5 m-2 max-sm:text-lg max-sm:p-2 max-sm:m-1">
          {title}
        </h1>
        <div className="flex p-3 ml-6 max-sm:p-2 max-sm:ml-0 max-sm:text-sm">
          <h1 className="text-orange-400 font-semibold">Class Time :&nbsp;</h1>
          <h1>{time}</h1>
        </div>
        <h1 className="text-gray-500 p-3 ml-6 max-sm:p-2 max-sm:ml-0 max-sm:text-sm">
          {desc}
        </h1>
      </div>
    </div>
  );
}

export default Maincourse;

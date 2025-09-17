import React, { useEffect, useRef, useState } from "react";

function Course() {
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
      { threshold: 0.15 } // trigger when ~15% visible
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const revealClasses =
    (visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10") +
    " transition-all duration-[1000ms] ease-in-out delay-300";

  return (
    <div ref={sectionRef} className={revealClasses}>
      <div>
        <div className="text-2xl font-semibold flex gap-3 text-center justify-center relative bottom-44 p-5 max-sm:bottom-0 max-sm:text-xl max-sm:p-3">
          <h1 className="text-blue-600">Our </h1>
          <h1 className="text-orange-500">Cources :)</h1>
        </div>
        <h1 className="text-center text-gray-400 w-[900px] ml-72 mt-3 p-5 relative bottom-52 max-sm:w-full max-sm:ml-0 max-sm:p-3 max-sm:mt-1 max-sm:text-sm max-sm:bottom-0">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, tenetur alias ipsam est minus facilis quasi sit dignissimos doloribus voluptates blanditiis corrupti illo mollitia assumenda.
        </h1>
      </div>

      {/* course sec */}
      <div className="grid grid-cols-2 relative bottom-24 justify-center ml-48 max-sm:grid-cols-1 max-sm:bottom-0 max-sm:ml-0 max-sm:px-3 max-sm:gap-3">
        <div className="flex border bg-slate-50 w-[500px] p-1 m-2 max-sm:w-full max-sm:m-0 max-sm:p-2">
          <img className="w-64 max-sm:w-28 max-sm:h-28 max-sm:object-cover" src="/img/ts1.png" alt="Art Lesson" />
          <div className="flex-1">
            <h1 className="text-sky-400 font-semibold text-2xl p-5 m-2 max-sm:text-lg max-sm:p-2 max-sm:m-1"> Art Lesson</h1>
            <div className="flex p-3 ml-6 max-sm:p-2 max-sm:ml-0 max-sm:text-sm">
              <h1 className="text-orange-400 font-semibold">Class Time :&nbsp;</h1>
              <h1>9am-10:00am</h1>
            </div>
            <h1 className="text-gray-500 p-3 ml-6 max-sm:p-2 max-sm:ml-0 max-sm:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, architecto!
            </h1>
          </div>
        </div>

        <div className="flex border bg-slate-50 w-[500px] p-1 m-2 max-sm:w-full max-sm:m-0 max-sm:p-2">
          <img className="w-64 max-sm:w-28 max-sm:h-28 max-sm:object-cover" src="/img/ts2.jpg" alt="Language Lesson" />
          <div className="flex-1">
            <h1 className="text-sky-400 font-semibold text-2xl p-5 m-2 max-sm:text-lg max-sm:p-2 max-sm:m-1"> Language Lesson</h1>
            <div className="flex p-3 ml-6 max-sm:p-2 max-sm:ml-0 max-sm:text-sm">
              <h1 className="text-orange-400 font-semibold">Class Time :&nbsp;</h1>
              <h1>9am-10:00am</h1>
            </div>
            <h1 className="text-gray-500 p-3 ml-6 max-sm:p-2 max-sm:ml-0 max-sm:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, architecto!
            </h1>
          </div>
        </div>

        <div className="flex border bg-slate-50 w-[500px] p-1 m-2 max-sm:w-full max-sm:m-0 max-sm:p-2">
          <img className="w-64 max-sm:w-28 max-sm:h-28 max-sm:object-cover" src="/img/ts3.jpg" alt="Music Lesson" />
          <div className="flex-1">
            <h1 className="text-sky-400 font-semibold text-2xl p-5 m-2 max-sm:text-lg max-sm:p-2 max-sm:m-1"> Music Lesson</h1>
            <div className="flex p-3 ml-6 max-sm:p-2 max-sm:ml-0 max-sm:text-sm">
              <h1 className="text-orange-400 font-semibold">Class Time :&nbsp;</h1>
              <h1>9am-10:00am</h1>
            </div>
            <h1 className="text-gray-500 p-3 ml-6 max-sm:p-2 max-sm:ml-0 max-sm:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, architecto!
            </h1>
          </div>
        </div>

        <div className="flex border bg-slate-50 w-[500px] p-1 m-1 ml-2 max-sm:w-full max-sm:m-0 max-sm:ml-0 max-sm:p-2">
          <img className="w-64 max-sm:w-28 max-sm:h-28 max-sm:object-cover" src="/img/ts4.jpg" alt="Sport Lesson" />
          <div className="flex-1">
            <h1 className="text-sky-400 font-semibold text-2xl p-5 m-2 max-sm:text-lg max-sm:p-2 max-sm:m-1"> Sport Lesson</h1>
            <div className="flex p-3 ml-6 max-sm:p-2 max-sm:ml-0 max-sm:text-sm">
              <h1 className="text-orange-400 font-semibold">Class Time :&nbsp;</h1>
              <h1>9am-10:00am</h1>
            </div>
            <h1 className="text-gray-500 p-3 ml-6 max-sm:p-2 max-sm:ml-0 max-sm:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, architecto!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Course;

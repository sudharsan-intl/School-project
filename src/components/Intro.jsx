import React, { useEffect, useRef, useState } from "react";

function Content(){
  // === exact scroll animation from your reference ===
  const contentRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = contentRef.current;
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
    " transition-all duration-[500ms] ease-in-out delay-300";

  return (
    <div ref={contentRef} className={revealClasses}>
      {/* original content + phone-only wrappers */}
      <div className="flex justify-between ml-10 max-sm:flex-col max-sm:gap-6 max-sm:ml-0 max-sm:px-4">
        <div className="max-sm:order-2">
          <h1 className="text-3xl bottom-40 m-5 relative max-sm:bottom-0 max-sm:m-0 max-sm:text-2xl">
            What We Offer :)
          </h1>

          <p className="relative bottom-32 m-8 max-sm:bottom-0 max-sm:m-0 max-sm:mt-3 max-sm:text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident eius culpa repudiandae autem cumque? Delectus, officiis iste dolor laboriosam id minus aperiam consequuntur tenetur tempora facere architecto velit eius mollitia dicta hic maxime corrupti quaerat placeat possimus! Modi maiores molestias, labore aliquid eligendi architecto odit praesentium rerum saepe fuga voluptatum?
          </p>

          <div className="grid grid-cols-2 relative bottom-8 ml-10 max-sm:grid-cols-1 max-sm:bottom-0 max-sm:ml-0 max-sm:gap-4 max-sm:mt-4">
            <div className="flex mb-6 max-sm:mb-0">
              <span className="text-[50px] bg-gray-300 rounded-full p-4 mr-2 max-sm:text-[36px] max-sm:p-3">
                🛡️
              </span>
              <div>
                <h1 className="text-2xl mb-5 max-sm:text-xl max-sm:mb-2">Safety first</h1>
                <p className="max-sm:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, inventore!</p>
              </div>
            </div>

            <div className="flex md-6">
              <div>
                <span className="text-[50px] bg-gray-300 rounded-full p-4 mr-2 max-sm:text-[36px] max-sm:p-3">
                  📅
                </span>
              </div>
              <div>
                <h1 className="text-2xl mb-5 max-sm:text-xl max-sm:mb-2">Certified Teacher</h1>
                <p className="max-sm:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, inventore!</p>
              </div>
            </div>

            <div className="flex mb-6 max-sm:mb-0">
              <div>
                <span className="text-[50px] bg-gray-300 rounded-full p-4 mr-2 max-sm:text-[36px] max-sm:p-3">
                  👨‍🏫
                </span>
              </div>
              <div>
                <h1 className="text-2xl mb-6 max-sm:text-xl max-sm:mb-2">Regular class</h1>
                <p className="max-sm:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, inventore!</p>
              </div>
            </div>

            <div className="flex mb-6">
              <div>
                <span className="text-[50px] bg-gray-300 rounded-full p-4 mr-2 max-sm:text-[36px] max-sm:p-3">
                  🏫
                </span>
              </div>
              <div>
                <h1 className="text-2xl mb-6 max-sm:text-xl max-sm:mb-2">Sufficient Classroom</h1>
                <p className="max-sm:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, inventore!</p>
              </div>
            </div>

            <div className="flex mb-6 max-sm:mb-0">
              <div>
                <span className="text-[50px] bg-gray-300 rounded-full p-4 mr-2 max-sm:text-[36px] max-sm:p-3">
                  🎨
                </span>
              </div>
              <div>
                <h1 className="text-2xl mb-6 max-sm:text-xl max-sm:mb-2">Creative Lesson</h1>
                <p className="max-sm:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, inventore!</p>
              </div>
            </div>

            <div className="flex mb-6">
              <div>
                <span className="text-[50px] bg-gray-300 rounded-full p-4 mr-2 max-sm:text-[36px] max-sm:p-3">
                  ⚽
                </span>
              </div>
              <div>
                <h1 className="text-2xl mb-6 max-sm:text-xl max-sm:mb-2">Sports Facilities</h1>
                <p className="max-sm:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, inventore!</p>
              </div>
            </div>
          </div>
        </div>

        {/* right box */}
        <span
          style={{ width: "70%" }}
          className="relative bottom-44 border p-10 bg-slate-50 text-gray-500 rounded-md border-gray-300 mr-44
                     max-sm:static max-sm:w-full max-sm:p-4 max-sm:mr-0 max-sm:rounded-lg"
        >
          <h1 className="text-3xl font-semibold pb-5 max-sm:text-2xl max-sm:pb-3">
            welcome To kids Learning School
          </h1>

          <h1 className="max-sm:text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid culpa corrupti at et totam reiciendis atque eaque voluptatem odio ipsum unde provident iste inventore sunt, veniam deleniti ullam iure fugit? Nam blanditiis eligendi at est natus dignissimos obcaecati, voluptas temporibus ducimus magni beatae assumenda eveniet! Vitae voluptas aliquam tenetur quia optio quam quasi soluta expedita enim ipsa, ea suscipit reiciendis corporis magnam dicta ex eius blanditiis odio a eaque velit accusamus earum maiores. Doloremque dolores accusantium obcaecati perspiciatis ipsum, vel nisi modi quidem tempore debitis veniam, nobis illo ullam? Libero ad rerum cumque mollitia tenetur nesciunt, sit magni autem exercitationem!
          </h1>

          <button className="bg-orange-400 text-white rounded-3xl p-2 m-2 max-sm:px-4 max-sm:py-2 max-sm:m-3">
            Read More
          </button>
        </span>
      </div>
    </div>
  )
}
export default Content;

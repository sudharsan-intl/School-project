import React, { useEffect, useState, useRef } from "react";

function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Henry",
      role: "Father",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ullam numquam, deserunt cupiditate iure molestias.",
      image: "/img/p1.jpg",
    },
    {
      id: 2,
      name: "Mike",
      role: "Father",
      text: "Excellent service and a warm, welcoming atmosphere. Truly appreciated!",
      image: "/img/p2.jpg",
    },
    {
      id: 3,
      name: "Liza",
      role: "Mother",
      text: "They took great care of everything. Couldn’t have asked for better.",
      image: "/img/p3.jpeg",
    },
    {
      id: 4,
      name: "Emma",
      role: "Mother",
      text: "A heartfelt thank you to the entire team. Highly recommended!",
      image: "/img/p4.jpg",
    },
    {
      id: 5,
      name: "Miza",
      role: "Mother",
      text: "Very professional and respectful. I appreciate the attention to detail.",
      image: "/img/p5.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToReview = (index) => {
    setCurrentIndex(index);
  };

  const currentReview = reviews[currentIndex];

  // === scroll animation hook ===
  const reviewRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = reviewRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          obs.disconnect(); // only run once
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
    <div
      ref={reviewRef}
      className={`relative bottom-64 flex flex-col items-center w-full ${revealClasses} max-sm:bottom-0 max-sm:px-4`}
    >
      <div className="w-[600px] transition-all duration-700 ease-in-out max-sm:w-full max-sm:max-w-[380px]">
        <div className="flex bg-white shadow-xl rounded-xl p-6 max-sm:p-4">
          <img
            className="w-24 h-24 rounded-full object-cover mr-6 max-sm:w-16 max-sm:h-16 max-sm:mr-4"
            src={currentReview.image}
            alt={currentReview.name}
          />
          <div>
            <p className="text-gray-600 text-base mb-3 max-sm:text-sm">
              “{currentReview.text}”
            </p>
            <h3 className="text-black font-bold text-lg max-sm:text-base">
              {currentReview.name}
            </h3>
            <span className="text-blue-500 text-sm">{currentReview.role}</span>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="mt-6 flex space-x-3">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => goToReview(index)}
            className={`w-4 h-4 rounded-full border-2 transition duration-300 ${
              currentIndex === index
                ? "bg-blue-500 border-blue-500"
                : "bg-white border-blue-500 hover:bg-blue-200"
            } max-sm:w-3.5 max-sm:h-3.5`}
            aria-label={`Go to review ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Reviews;

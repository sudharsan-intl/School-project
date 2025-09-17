import React, { useEffect, useRef, useState } from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = footerRef.current;
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

  return (
    <footer
      ref={footerRef}
      className={
        "bg-gray-900 text-gray-300 py-12 px-10 " +
        (visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10") +
        " transition-all duration-[1000ms] ease-in-out delay-300"
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1: Contact */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">
            Have a Questions?
          </h2>
          <div className="flex items-start gap-3 mb-3">
            <FaLocationDot className="text-purple-500 mt-1" />
            <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <FaPhoneAlt className="text-purple-500" />
            <p>+2 392 3929 210</p>
          </div>
          <div className="flex items-center gap-3">
            <MdEmail className="text-purple-500" />
            <p>info@yourdomain.com</p>
          </div>
        </div>

        {/* Column 2: Recent Blog */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Recent Blog</h2>
          {[
            {
              img: "/img/k1.jpg",
              text: "Even the all-powerful Pointing has no control about",
            },
            {
              img: "/img/ts2.jpg",
              text: "Even the all-powerful Pointing has no control about",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 mb-5">
              <img
                src={item.img}
                alt="blog"
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <p className="text-sm">{item.text}</p>
                <div className="flex items-center text-xs gap-3 text-gray-400 mt-1">
                  <span>Dec 25, 2018</span> | <span>Admin</span> | <span>19</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Column 3: Links */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Links</h2>
          <ul className="space-y-2">
            {["Home", "About", "Services", "Departments", "Contact"].map(
              (link, i) => (
                <li
                  key={i}
                  className="hover:text-purple-400 cursor-pointer"
                >
                  → {link}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Column 4: Subscribe */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">
            Subscribe Us!
          </h2>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full p-3 mb-3 bg-gray-800 text-gray-300 rounded outline-none"
          />
          <button className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded font-semibold">
            Subscribe
          </button>

          <h2 className="text-white text-lg font-semibold mt-6 mb-3">
            Connect With Us
          </h2>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600"
            >
              <FaTwitter className="text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600"
            >
              <FaInstagram className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

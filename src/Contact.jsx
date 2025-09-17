import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Contact() {
  const contactRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const el = contactRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const revealClasses =
    (visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10") +
    " transition-all duration-1000 ease-in-out delay-200";

  // --- Regex Validators ---
  const validators = {
    name: /^[a-zA-Z\s]{3,30}$/, // letters only, 3-30 chars
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // simple email regex
    phone: /^[0-9]{10}$/, // 10 digits only
    message: /^.{10,300}$/, // 10–300 chars
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error while typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!validators.name.test(form.name)) newErrors.name = "Enter a valid name (3–30 letters)";
    if (!validators.email.test(form.email)) newErrors.email = "Enter a valid email";
    if (!validators.phone.test(form.phone)) newErrors.phone = "Enter a 10-digit phone number";
    if (!validators.message.test(form.message))
      newErrors.message = "Message must be between 10–300 characters";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setTimeout(() => {
        alert("✅ Form submitted successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
        setSubmitted(false);
      }, 1000);
    }
  };

  return (
    <div>
      <Header />

      {/* Hero Image */}
      <div className="w-full md:h-[350px] overflow-hidden relative">
        <img
          src="/img/about.jpg"
          alt="Contact Hero"
          className="w-full h-full object-cover object-center"
        />
        <h1 className="text-4xl md:text-6xl text-white font-bold absolute inset-0 flex items-center justify-center">
          Contact Us
        </h1>
      </div>

      {/* Contact Form */}
      <div ref={contactRef} className={revealClasses}>
        <div className="max-w-4xl mx-auto my-16 px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Get in <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-center text-gray-500 mb-10">
            We'd love to hear from you. Fill out the form and we’ll get back soon.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-xl p-8 grid gap-6"
          >
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-medium">Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                placeholder="Enter your phone number"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                placeholder="Write your message..."
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitted}
              className={`w-full py-3 text-white font-semibold rounded-lg transition-transform duration-300 ${
                submitted
                  ? "bg-green-500 scale-95"
                  : "bg-orange-500 hover:bg-orange-600 hover:scale-105"
              }`}
            >
              {submitted ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;

"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  "/images/SliderImg/8.jpeg",
  "/images/SliderImg/2.jpg",
  "/images/SliderImg/3.jpg",
  "/images/SliderImg/4.jpg",
  "/images/SliderImg/5.jpg",
  "/images/SliderImg/6.jpg",
  "/images/SliderImg/7.jpg",
  "/images/SliderImg/1.jpg",
];

const slideContent = [
  {
    title: "अमृत – प्रगतीचा नवा मार्ग",
    desc: "महाराष्ट्रातील युवक, महिला आणि नागरिकांना सशक्त करण्यासाठी संशोधन, प्रशिक्षण आणि विकासाची दिशा.",
  },
  {
    title: "कौशल्य विकास उपक्रम",
    desc: "रोजगार आणि उद्योजकतेसाठी कौशल्यवर्धन प्रशिक्षणाद्वारे राज्याचा सर्वांगीण विकास.",
  },
  {
    title: "महिला सक्षमीकरण योजना",
    desc: "महिलांना आर्थिकदृष्ट्या सक्षम करण्यासाठी विविध स्वयंरोजगार आणि प्रशिक्षण कार्यक्रम.",
  },
  {
    title: "स्वयंरोजगार प्रोत्साहन योजना",
    desc: "युवकांना व्यवसाय मार्गदर्शन, प्रशिक्षण आणि आर्थिक सहाय्याद्वारे रोजगारनिर्मिती.",
  },
  {
    title: "संशोधन व नवोन्मेष",
    desc: "संशोधन व नवकल्पना प्रोत्साहनाद्वारे ज्ञान, विज्ञान आणि तंत्रज्ञान विकासाची दिशा.",
  },
];

export default function AmritMahotsavSection() {
  const [index, setIndex] = useState(0);
  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const currentContent = slideContent[index % slideContent.length];

  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative w-full py-10 md:py-16 px-4 md:px-10 overflow-hidden rounded-3xl shadow-xl"
      style={{
        background: "linear-gradient(120deg, #fff6e5 0%, #ffe0b2 50%, #fff8f0 100%)",
      }}
    >
      {/* Subtle Animated Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-orange-200/30 via-orange-100/20 to-orange-50/10"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      ></motion.div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
        {/* LEFT SIDE — Title above Fort Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          {/* Title Block */}
          <div className="mb-6">
            <h3
              className="text-sm md:text-base font-semibold tracking-widest text-orange-700 uppercase mb-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              आजादी का अमृत महोत्सव
            </h3>
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-900 leading-snug mb-3"
              style={{ fontFamily: "Baloo, serif" }}
            >
              {currentContent.title}
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed max-w-md mx-auto lg:mx-0">
              {currentContent.desc}
            </p>
          </div>

          {/* Fort Image */}
          <div className="flex justify-center">
            <img
              src="/images/Gemini_Generated_Image_tm84iqtm84iqtm84-removebg-preview (1).png"
              alt="Shaniwarwada Fort"
              className="w-[80%] md:w-[75%] lg:w-[85%] object-contain drop-shadow-[0_25px_60px_rgba(255,140,0,0.3)]"
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE — Main Slider with Thumbnails */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          {/* Main Slide */}
          <div className="relative w-full max-w-lg mx-auto lg:mx-0">
            <div className="overflow-hidden rounded-2xl shadow-lg border border-orange-200">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={slides[index]}
                  alt={`Slide ${index + 1}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="w-full h-56 md:h-72 object-cover"
                />
              </AnimatePresence>
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center gap-3 mt-4 overflow-x-auto pb-2">
              {slides.slice(0, 4).map((thumb, i) => (
                <motion.img
                  key={i}
                  src={thumb}
                  alt={`Thumbnail ${i + 1}`}
                  onClick={() => setIndex(i)}
                  whileHover={{ scale: 1.05 }}
                  className={`w-16 h-12 md:w-20 md:h-14 rounded-lg object-cover cursor-pointer transition-all ${
                    i === index
                      ? "ring-2 ring-orange-500 shadow-md"
                      : "opacity-70 hover:opacity-100"
                  }`}
                />
              ))}
            </div>

            {/* Controls */}
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white shadow-md hover:bg-orange-100 transition"
              >
                <ChevronLeft className="text-orange-700 w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white shadow-md hover:bg-orange-100 transition"
              >
                <ChevronRight className="text-orange-700 w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

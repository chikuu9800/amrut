"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    title: "छत्रपती शिवाजी महाराज",
    description:
      "जोपर्यंत तुमच्या मनात आत्मविश्वास आहे, तोपर्यंत तुम्हाला कोणीही पराभूत करू शकत नाही.",
    img: "/images/SliderImg/2.jpg",
  },
  {
    title: "लोकमान्य बाळ गंगाधर टिळक",
    description:
      "शिकवण्याचा आणि शिकण्याचा हक्क हा प्रत्येकाचा आहे. तो कोणत्याही परिस्थितीत हिरावून घेतला जाऊ शकत नाही.",
    img: "/images/SliderImg/8.jpeg",
  },
  {
    title: "स्वामी विवेकानंद",
    description:
      "आपल्या जीवनात शंभर टक्के यश मिळवायचं असेल तर पिळवणुकीला नकार द्या, आणि मनाच्या शुद्धतेवर विश्वास ठेवा.",
    img: "/images/SliderImg/3.jpg",
  },
];

export default function AmrutBanner() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const current = slides[index];

  return (
    <section
      className="relative w-[80%] m-auto min-h-[65vh] sm:min-h-[60vh] md:min-h-[65vh] flex flex-col md:flex-row overflow-hidden rounded-3xl shadow-2xl my-10"
      style={{
        backgroundImage: `url('/images/1000_F_581566986_vjGXzCbNhpH5yvsNoN0dhZoG9mcVOnBK.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* LEFT GRADIENT OVERLAY */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-orange-900/90 via-orange-700/75 to-transparent"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* LEFT SIDE - TEXT */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center items-start text-left px-6 sm:px-10 md:px-16 py-12 text-white">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug mb-4 drop-shadow-2xl"
              style={{ fontFamily: "Baloo, serif" }}
            >
              {current.title}
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl lg:text-[1.3rem] leading-relaxed text-white/90 max-w-lg drop-shadow-md"
              style={{ fontFamily: "Poppins, serif" }}
            >
              “{current.description}”
            </p>

            <motion.a
              href="https://mahaamrut.org.in/"
              className="inline-flex items-center gap-2 bg-white text-orange-700 font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl hover:bg-orange-50 transition-all group mt-6"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              अधिक वाचा
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </motion.a>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex gap-2 mt-8">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-6 sm:w-8 rounded-full transition-all ${
                i === index ? "bg-white w-8 sm:w-10" : "bg-white/50"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE - GRADIENT PANEL */}
      <motion.div
        className="relative w-full md:w-1/2 bg-gradient-to-bl from-orange-50 via-orange-100 to-orange-200 flex justify-center items-center py-12 overflow-hidden"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Glow Animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-orange-200/40 via-white/10 to-transparent opacity-60"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ backgroundSize: "200% 200%" }}
        />

        {/* Image */}
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.img
            key={index}
            src={current.img}
            alt={current.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[450px] object-contain drop-shadow-[0_20px_40px_rgba(255,140,0,0.4)] rounded-2xl z-10 border-4 border-white"
          />
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

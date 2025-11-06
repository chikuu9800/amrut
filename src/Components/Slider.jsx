import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import skyline from "/images/Indian_Monuments_PNG-removebg-preview.png"; // background image
import sample1 from "/images/SliderImg/Amravati-Div-700x340.jpg";
import sample2 from "/images/SliderImg/Amravati-Div-700x340.jpg";
import sample3 from "/images/SliderImg/Amravati-Div-700x340.jpg";

export default function YojanaSlider() {
  const images = [sample1, sample2, sample3];
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // Parallax Effect for Skyline
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]); // Moves slower than scroll

  return (
    <section className="relative max-w-6xl mx-auto py-10 overflow-hidden">
      {/* Skyline Background with Parallax */}
      <motion.img
        src={skyline}
        alt="Skyline"
        className="absolute bottom-0 left-0 w-full object-contain opacity-80 mix-blend-overlay pointer-events-none select-none z-0"
        style={{ y }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 0.8, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Main Slider Container */}
      <motion.div
        className="relative z-10 bg-gradient-to-r from-orange-100 via-orange-200 to-orange-300 bg-opacity-90 rounded-3xl shadow-lg overflow-hidden flex flex-col justify-center items-center p-6 backdrop-blur-sm"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Centered Slider */}
        <div className="relative w-full max-w-2xl h-[300px] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
          <motion.img
            key={current}
            src={images[current]}
            alt={`Slide ${current + 1}`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />

          {/* Navigation Buttons */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white/70 hover:bg-white shadow-md ml-2"
            >
              <ChevronLeft className="text-orange-500" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white/70 hover:bg-white shadow-md mr-2"
            >
              <ChevronRight className="text-orange-500" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

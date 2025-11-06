"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AmrutBanner() {
  return (
    <section
      className="relative w-screen h-[60vh] bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/images/1000_F_581566986_vjGXzCbNhpH5yvsNoN0dhZoG9mcVOnBK.jpg')`,
      }}
    >
      {/* Animated Floating Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-orange-900/90 via-orange-600/70 to-orange-300/40"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      ></motion.div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-6">
        {/* Marathi Heading */}
        <motion.h1
          className="text-white font-bold text-2xl md:text-3xl lg:text-4xl leading-tight drop-shadow-xl mb-4"
          style={{ fontFamily: "Baloo, serif" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          महाराष्ट्र संशोधन, उन्नती व प्रशिक्षण प्रवोधिनी (अमृत)
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-white text-md md:text-lg lg:text-xl drop-shadow-lg mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          ही संकेतस्थळ महाराष्ट्र राज्यातील संशोधन, प्रशिक्षण व विकासासाठी उपयुक्त योजना व माहिती पुरवते.
        </motion.p>

        {/* Button with Arrow */}
        <motion.a
          href="https://mahaamrut.org.in/"
          className="inline-flex items-center gap-2 bg-white text-orange-700 font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl hover:bg-orange-50 transition-all group"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          योजना पाहा
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}

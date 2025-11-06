// import React from "react";
// import { motion } from "framer-motion";

// export default function SLogon() {
//   return (
//     <section 
//     className="relative w-full bg-gradient-to-r from-orange-50 to-white py-10 px-4 flex items-center justify-center overflow-hidden">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true, amount: 0.3 }} // 👈 triggers when 30% is visible
//         className="relative max-w-6xl w-full bg-gradient-to-r from-orange-100 via-white to-orange-50 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-6 md:gap-10 p-6 md:p-10 overflow-visible"
//       >
//         {/* Left: Maharashtra Map (Outside Banner) */}
//         <motion.div
//           initial={{ opacity: 0, x: -80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true, amount: 0.4 }}
//           className="absolute -left-0 md:-left-20 top--10 transform -translate-y-1/2 flex-shrink-0"
//         >
//           {/* Orange glow background */}
//           <div className="absolute inset-0 bg-orange-400 opacity-30 blur-2xl rounded-full w-64 h-64 -z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />

//           {/* Map Image */}
//           <img
//             src="/images/Maharashtra_state_map__administrative_division_of_India__Vector_illustration_-removebg-preview (1).png"
//             alt="Maharashtra Map"
//             className="w-56 md:w-72 drop-shadow-[0_0_20px_rgba(255,140,0,0.5)] transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_30px_rgba(255,140,0,0.7)]"
//           />
//         </motion.div>

//         {/* Center Text - starts after 20% width */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2 }}
//           viewport={{ once: true, amount: 0.4 }}
//           className="flex-1 text-center md:text-left z-10 md:ml-[20%]"
//           style={{ fontFamily: "baloo, sans-serif" }}
//         >
//           <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
//             महाराष्ट्र संशोधन, उन्नती व प्रशिक्षण प्रवोधिनी (अमृत)
//           </h1>
//           <p className="text-gray-700 mt-4 text-lg">
//             महाराष्ट्र राज्याच्या सर्वांगीण विकासासाठी नवोन्मेष, प्रशिक्षण आणि संशोधनाचे
//             एकत्रिकरण करणारी योजना.
//           </p>
//           <p className="text-gray-600 mt-1">
//             शिक्षण, उद्योजकता आणि कौशल्य विकासासाठी राज्यभर उपक्रम.
//           </p>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }


import React from "react";
import { motion } from "framer-motion";

export default function SLogon() {
  return (
    <section
      className="relative w-full min-h-[80vh] py-10 px-4 flex items-center justify-center overflow-hidden"
    >
      {/* === Full Background Skyline Image === */}
      <div
        className="absolute inset-0 bg-no-repeat bg-bottom bg-cover opacity-80 -z-10"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(255,165,0,0.15), rgba(255,255,255,0.95) 40%), url('/images/Indian_Monuments_PNG-removebg-preview.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      ></div>

      {/* === Inner Card === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative max-w-6xl w-full bg-gradient-to-r from-orange-100 via-white to-orange-50 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-6 md:gap-10 p-6 md:p-10 z-10 overflow-visible"
      >
        {/* --- Maharashtra Map --- */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          className="absolute -left-12 md:-left-20 top-0 -translate-y-1/2 flex-shrink-0"
        >
          <div className="absolute inset-0 bg-orange-400 opacity-30 blur-2xl rounded-full w-64 h-64 -z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
          <img
            src="/images/Maharashtra_state_map__administrative_division_of_India__Vector_illustration_-removebg-preview (1).png"
            alt="Maharashtra Map"
            className="w-56 md:w-72 opacity-100 drop-shadow-[0_0_25px_rgba(255,140,0,0.5)] hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* --- Text Content --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true, amount: 0.4 }}
          className="flex-1 text-center md:text-left md:ml-[20%]"
          style={{ fontFamily: "baloo, sans-serif" }}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
            महाराष्ट्र संशोधन, उन्नती व प्रशिक्षण प्रवोधिनी (अमृत)
          </h1>
          <p className="text-gray-700 mt-4 text-lg">
            महाराष्ट्र राज्याच्या सर्वांगीण विकासासाठी नवोन्मेष, प्रशिक्षण आणि संशोधनाचे
            एकत्रिकरण करणारी योजना.
          </p>
          <p className="text-gray-600 mt-1">
            शिक्षण, उद्योजकता आणि कौशल्य विकासासाठी राज्यभर उपक्रम.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

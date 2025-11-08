"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const aboutData = [
  {
    id: "about",
    title: "अमृत विषयी",
    description: `महाराष्ट्र संशोधन, उन्नती व प्रशिक्षण प्रवोधिनी (अमृत) ही एक स्वायत्त संस्था आहे जी महाराष्ट्र शासनाने स्थापन केली आहे.
    राज्यातील युवकांना संशोधन, कौशल्यविकास व प्रशिक्षणाच्या माध्यमातून रोजगाराच्या संधी उपलब्ध करून देणे हा या संस्थेचा प्रमुख उद्देश आहे.`,
    image: "/images/_-removebg-preview.png",
  },
  {
    id: "establishment",
    title: "अमृतची स्थापना",
    description: `दिनांक २२ ऑगस्ट २०१९ रोजी महाराष्ट्र शासनाने शासन निर्णयाद्वारे 'अमृत' या संस्थेची स्थापना केली.
    या संस्थेचा हेतू म्हणजे संशोधन आणि प्रशिक्षणाद्वारे युवकांना सक्षम करणे व समाजातील सर्व घटकांचा विकास घडवणे.`,
    image: "/images/_-removebg-preview.png",
  },
  {
    id: "board",
    title: "संचालक मंडळ",
    description: `अमृतच्या कार्याची दिशा ठरवण्यासाठी सक्षम संचालक मंडळ कार्यरत आहे. या मंडळात राज्य शासनातील वरिष्ठ अधिकारी,
    क्षेत्रातील तज्ज्ञ व समाजहिताच्या दृष्टीने कार्य करणारे सदस्य यांचा समावेश आहे.`,
    image: "/images/_-removebg-preview.png",
  },
  {
    id: "initiatives",
    title: "उपक्रम आणि योजना",
    description: `अमृत संस्थेमार्फत विविध प्रशिक्षण, स्वयंरोजगार व उद्योजकता विकासाच्या योजना राबविण्यात येतात.
    या योजनांद्वारे युवकांना आत्मनिर्भरतेकडे वाटचाल करण्याची प्रेरणा दिली जाते.`,
    image: "/images/_-removebg-preview.png",
  },
  {
    id: "contact",
    title: "संपर्क माहिती",
    description: `अमृत मुख्य कार्यालय:  
    ५ वा मजला, हनुमान रोड, मंत्रालय, मुंबई – ४०००३२  
    दूरध्वनी: ०२२-२२२२२२२२  
    ईमेल: info@mahaamrut.org.in`,
    image: "/images/_-removebg-preview.png",
  },
];

export default function AboutAmrut() {
  const [selected, setSelected] = useState("about");

  const currentItem = aboutData.find((item) => item.id === selected);

  return (
    <section className="relative w-full bg-gradient-to-b from-orange-50 to-white py-16 px-4 md:px-10">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2
          className="text-3xl md:text-4xl font-bold text-orange-700 mb-2"
          style={{ fontFamily: "Baloo, serif" }}
        >
          अमृत विषयी माहिती
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
          महाराष्ट्र संशोधन, उन्नती व प्रशिक्षण प्रवोधिनी (अमृत) ही संस्था
          संशोधन, प्रशिक्षण आणि विकास उपक्रमांद्वारे युवकांना
          कौशल्यविकास, रोजगार आणि प्रगतीच्या संधी उपलब्ध करून देते.
        </p>
      </div>

      {/* Main Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Menu */}
        <div className="flex flex-col gap-3 md:col-span-1">
          <h3
            className="text-lg md:text-xl font-bold text-gray-800 border-b border-gray-300 pb-2"
            style={{ fontFamily: "Baloo, serif" }}
          >
            सामान्य माहिती
          </h3>
          <ul className="space-y-2 mt-2 text-gray-700 text-base">
            {aboutData.map((item) => (
              <li
                key={item.id}
                onClick={() => setSelected(item.id)}
                className={`cursor-pointer border-l-4 pl-2 transition-all ${
                  selected === item.id
                    ? "border-orange-600 text-orange-700 font-semibold"
                    : "border-transparent hover:text-orange-600"
                }`}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 bg-white shadow-xl rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center border border-orange-100"
          >
            {/* Text Section */}
            <div className="flex-1 text-gray-700 md:pr-6">
              <h4
                className="text-xl md:text-2xl font-semibold text-orange-700 mb-3"
                style={{ fontFamily: "Baloo, serif" }}
              >
                {currentItem.title}
              </h4>
              <p className="text-base md:text-lg leading-relaxed whitespace-pre-line">
                {currentItem.description}
              </p>
            </div>

            {/* Illustration Image */}
            <motion.img
              src={currentItem.image}
              alt={currentItem.title}
              className="w-44 sm:w-48 md:w-56 lg:w-64 mt-6 md:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

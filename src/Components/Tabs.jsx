"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const yojanas = [
  {
    id: 1,
    title: "अमृत – MCED लघुउद्योजक, स्वयंरोजगार प्रोत्साहन व प्रशिक्षण योजना",
    short: "स्वयंरोजगारासाठी प्रशिक्षण आणि आर्थिक मार्गदर्शनाची योजना.",
    details: `या योजनेचा उद्देश म्हणजे युवकांना लघुउद्योजक म्हणून तयार करणे. प्रशिक्षणाद्वारे व्यवसाय नियोजन, वित्तीय व्यवस्थापन,
    विपणन कौशल्ये व शासनाच्या विविध योजनांची माहिती देण्यात येते.`,
  },
  {
    id: 2,
    title: "स्पर्धा परीक्षा मार्गदर्शन व प्रशिक्षण योजना",
    short: "MPSC, UPSC आणि इतर स्पर्धा परीक्षांसाठी मोफत प्रशिक्षण आणि मार्गदर्शन.",
    details: `या योजनेअंतर्गत विद्यार्थ्यांना गुणवत्तापूर्ण मार्गदर्शन, अभ्यास साहित्य, मॉक टेस्ट आणि अनुभवी प्रशिक्षकांचे प्रशिक्षण दिले जाते.`,
  },
  {
    id: 3,
    title: "कौशल्य विकास व रोजगार संधी योजना",
    short: "उद्योगजगताशी सुसंगत कौशल्य विकसित करून रोजगार निर्मितीस चालना देणे.",
    details: `या योजनेअंतर्गत युवकांना नवीन तंत्रज्ञान, सॉफ्ट-स्किल्स आणि उद्योग व्यवहारातील प्रशिक्षण दिले जाते. 
    प्रशिक्षणानंतर रोजगार मेळावे आणि उद्योजकता सल्लामसलत आयोजित केली जाते.`,
  },
  {
    id: 4,
    title: "महिला आर्थिक सक्षमीकरण योजना",
    short: "महिलांना उद्योग स्थापनेसाठी मार्गदर्शन आणि प्रशिक्षण देऊन स्वावलंबन प्रोत्साहन.",
    details: `महिला उद्योजकांना प्रशिक्षण, उत्पादन विपणन, निधी मिळविण्याची माहिती आणि सहकार्य दिले जाते.`,
  },
  {
    id: 5,
    title: "संशोधन व नवोन्मेष प्रोत्साहन योजना",
    short: "संशोधन आणि नवकल्पनांना प्रोत्साहन देऊन युवकांना प्रेरणा देणे.",
    details: `राज्यातील संशोधक आणि विद्यार्थ्यांना संशोधन निधी, प्रयोगशाळा सुविधा आणि तांत्रिक मार्गदर्शन पुरवले जाते.`,
  },
  {
    id: 6,
    title: "ग्रामीण विकास व प्रशिक्षण योजना",
    short: "ग्रामीण भागातील युवकांना कृषी-आधारित उद्योग प्रशिक्षण देणे.",
    details: `ग्रामीण युवकांना शेतीपूरक व्यवसायांसाठी प्रशिक्षण व सहकारी संस्था स्थापन करण्याचे मार्गदर्शन दिले जाते.`,
  },
];

export default function YojanaSection() {
  const [activeId, setActiveId] = useState(null);
  const [trianglePos, setTrianglePos] = useState(0);
  const cardRefs = useRef({});

  const toggle = (id) => {
    if (activeId === id) {
      setActiveId(null);
      setTrianglePos(0);
    } else {
      setActiveId(id);
      const rect = cardRefs.current[id]?.getBoundingClientRect();
      const parentRect =
        cardRefs.current[id]?.parentNode?.getBoundingClientRect();
      if (rect && parentRect) {
        setTrianglePos(rect.left - parentRect.left + rect.width / 2);
      }
    }
  };

  // Update triangle position on resize
  useEffect(() => {
    const handleResize = () => {
      if (activeId && cardRefs.current[activeId]) {
        const rect = cardRefs.current[activeId].getBoundingClientRect();
        const parentRect =
          cardRefs.current[activeId]?.parentNode?.getBoundingClientRect();
        if (rect && parentRect) {
          setTrianglePos(rect.left - parentRect.left + rect.width / 2);
        }
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeId]);

  // Split into rows of 3
  const rows = [];
  for (let i = 0; i < yojanas.length; i += 3) {
    rows.push(yojanas.slice(i, i + 3));
  }

  return (
    <section className="w-full bg-gradient-to-b from-orange-50 to-white py-16 px-4 md:px-10">
      {/* Title */}
      <div className="text-center mb-10">
        <h2
          className="text-3xl md:text-4xl font-bold text-orange-700 mb-2"
          style={{ fontFamily: "Baloo, serif" }}
        >
          अमृत योजना विभाग
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
          अमृत संस्थेद्वारे राबवल्या जाणाऱ्या विविध प्रशिक्षण व विकास योजनांची माहिती.
        </p>
      </div>

      {/* Yojana Grid */}
      <div className="max-w-7xl mx-auto space-y-10">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="space-y-4">
            {/* Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
              {row.map((yojana) => (
                <div
                  key={yojana.id}
                  ref={(el) => (cardRefs.current[yojana.id] = el)}
                  onClick={() => toggle(yojana.id)}
                  className={`bg-white border ${
                    activeId === yojana.id
                      ? "border-orange-400 shadow-lg"
                      : "border-orange-100"
                  } rounded-xl shadow-md p-6 hover:shadow-xl transition-all cursor-pointer`}
                >
                  <div className="flex justify-between items-center">
                    <h3
                      className="text-lg md:text-xl font-semibold text-orange-700 leading-snug pr-2"
                      style={{ fontFamily: "Baloo, serif" }}
                    >
                      {yojana.title}
                    </h3>
                    <motion.div
                      animate={{ rotate: activeId === yojana.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-orange-600" />
                    </motion.div>
                  </div>
                  <p className="text-gray-700 mt-3 text-sm md:text-base">
                    {yojana.short}
                  </p>
                </div>
              ))}
            </div>

            {/* Dropdown */}
            <AnimatePresence>
              {row.some((y) => y.id === activeId) && (
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="relative bg-white border border-orange-200 shadow-lg rounded-xl p-6 md:p-8 mt-2"
                >
                  {/* Triangle pointer (dynamic position) */}
                  <div
                    className="absolute top-0 -translate-y-3 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[15px] border-l-transparent border-r-transparent border-b-white shadow-sm transition-all duration-500"
                    style={{
                      left: trianglePos,
                      transform: "translateX(-50%) translateY(-10px)",
                    }}
                  ></div>

                  <h3
                    className="text-xl md:text-2xl font-bold text-orange-700 mb-3"
                    style={{ fontFamily: "Baloo, serif" }}
                  >
                    {yojanas.find((y) => y.id === activeId)?.title}
                  </h3>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    {yojanas.find((y) => y.id === activeId)?.details}
                  </p>
                  <a
                    href="https://mahaamrut.org.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-5 text-orange-700 font-semibold hover:underline"
                  >
                    अधिक वाचा →
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

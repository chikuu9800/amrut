"use client";
import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck } from "lucide-react";

export default function AmrutMissionVision() {
  const cards = [
    {
      id: 1,
      icon: <Target className="w-10 h-10 text-orange-600" />,
      title: "आमचे ध्येय",
      description:
        "राज्यातील प्रत्येक नागरिकाला संशोधन, प्रशिक्षण आणि विकासाच्या संधी उपलब्ध करून देणे तसेच युवकांना कौशल्य विकासाद्वारे सक्षम करणे हे आमचे ध्येय आहे.",
    },
    {
      id: 2,
      icon: <Eye className="w-10 h-10 text-orange-600" />,
      title: "आमची दृष्टि",
      description:
        "एक विकसित आणि सक्षम महाराष्ट्र घडवणे, जिथे प्रत्येक नागरिक शिक्षण, रोजगार आणि प्रगतीच्या समान संधींनी सुसज्ज असेल.",
    },
    {
      id: 3,
      icon: <ShieldCheck className="w-10 h-10 text-orange-600" />,
      title: "आमची मूल्ये",
      description:
        "पारदर्शकता, उत्तरदायित्व आणि नागरिक-प्रथम दृष्टिकोन या मूल्यांवर आम्ही शासनाच्या योजना आणि सेवा प्रभावीपणे पोहोचवतो.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-orange-50 to-orange-100 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-orange-800 mb-4"
        style={{ fontFamily: "Baloo, serif" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        आमचे ध्येय, दृष्टि व मूल्ये
      </motion.h2>

      <motion.p
        className="text-gray-700 text-md md:text-lg mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        महाराष्ट्र संशोधन, उन्नती व प्रशिक्षण प्रवोधिनी (अमृत) चा उद्देश म्हणजे  
        नागरिकाभिमुख योजना आणि उपक्रमांद्वारे राज्याच्या सर्वांगीण विकासाला चालना देणे.
      </motion.p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 px-6">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg p-8 flex flex-col items-center transition-all"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mb-4">
              {card.icon}
            </div>
            <h3
              className="text-xl font-semibold text-orange-700 mb-2"
              style={{ fontFamily: "Baloo, serif" }}
            >
              {card.title}
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

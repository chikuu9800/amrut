import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Factory,
  Train,
  Wind,
  Globe2,
  Plane,
  IndianRupee,
  Landmark,
  Ship,
  Wallet,
  Building2,
  Lightbulb,
  BarChart3,
  Cog,
  Bus,
  Recycle,
  Wheat,
  HeartPulse,
} from "lucide-react";
import mapImg from "/images/_-removebg-preview.png";

gsap.registerPlugin(ScrollTrigger);

const icons = [
  Factory,
  Train,
  Wind,
  Globe2,
  Plane,
  IndianRupee,
  Landmark,
  Ship,
  Wallet,
  Building2,
  Lightbulb,
  BarChart3,
  Cog,
  Bus,
  Recycle,
  Wheat,
  HeartPulse,
];

const AnimatedMapCircle = () => {
  const mapRef = useRef(null);
  const innerIconsRef = useRef([]);
  const outerIconsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Map fade-in
      gsap.fromTo(
        mapRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 90%",
          },
        }
      );

      // Icons pop-in
      gsap.fromTo(
        [...innerIconsRef.current, ...outerIconsRef.current],
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 80%",
          },
        }
      );

      // Continuous rotation
      gsap.to(".outer-ring", {
        rotate: 360,
        duration: 60,
        repeat: -1,
        ease: "linear",
      });

      gsap.to(".inner-ring", {
        rotate: -360,
        duration: 80,
        repeat: -1,
        ease: "linear",
      });
    });

    return () => ctx.revert();
  }, []);

  const innerRadius = 110; // smaller radius for compact fit
  const outerRadius = 170;
  const innerIcons = icons.slice(0, 8);
  const outerIcons = icons.slice(8);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 overflow-hidden py-20">
      {/* Title + Description */}
      <div className="text-center mb-6 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold  text-orange-700 mb-2 leading-tight" style={{ fontFamily: "baloo, sans-serif" }}>
          महाराष्ट्र संशोधन, उन्नती आणि प्रशिक्षण प्रबोधनी
        </h2>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-medium max-w-2xl mx-auto">
          राज्यातील युवक, युवती आणि इतर उमेदवारांच्या सर्वांगीण विकासासाठी विविध
          उद्योग, रोजगार, ऊर्जा, शिक्षण व प्रशिक्षण क्षेत्रात प्रोत्साहन देणारी
          संस्था — “अमृत प्रबोधनी”.
        </p>
      </div>

      {/* Map + Circles */}
      <div className="relative flex items-center justify-center w-full h-[60vh] sm:h-[65vh] md:h-[70vh]">
        {/* Outer Circle */}
        <div className="outer-ring absolute w-[350px] sm:w-[420px] md:w-[460px] h-[350px] sm:h-[420px] md:h-[460px] border border-orange-300 rounded-full flex items-center justify-center">
          {outerIcons.map((Icon, index) => {
            const angle = (index / outerIcons.length) * 2 * Math.PI;
            const x = Math.cos(angle) * (outerRadius + 25);
            const y = Math.sin(angle) * (outerRadius + 25);
            return (
              <div
                key={index}
                ref={(el) => (outerIconsRef.current[index] = el)}
                className="absolute text-orange-500 opacity-0 hover:scale-110 transition-transform duration-300"
                style={{ transform: `translate(${x}px, ${y}px)` }}
              >
                <Icon size={26} className="sm:size-[30px]" />
              </div>
            );
          })}
        </div>

        {/* Inner Circle */}
        <div className="inner-ring absolute w-[240px] sm:w-[280px] md:w-[320px] h-[240px] sm:h-[280px] md:h-[320px] border border-orange-200 rounded-full flex items-center justify-center">
          {innerIcons.map((Icon, index) => {
            const angle = (index / innerIcons.length) * 2 * Math.PI;
            const x = Math.cos(angle) * (innerRadius + 18);
            const y = Math.sin(angle) * (innerRadius + 18);
            return (
              <div
                key={index}
                ref={(el) => (innerIconsRef.current[index] = el)}
                className="absolute text-orange-500 opacity-0 hover:scale-110 transition-transform duration-300"
                style={{ transform: `translate(${x}px, ${y}px)` }}
              >
                <Icon size={22} className="sm:size-[26px]" />
              </div>
            );
          })}
        </div>

        {/* Maharashtra Map */}
        <div
          ref={mapRef}
          className="relative w-[120px] sm:w-[160px] md:w-[200px] h-[120px] sm:h-[160px] md:h-[200px] z-10"
        >
          <img
            src={mapImg}
            alt="Maharashtra Map"
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AnimatedMapCircle;

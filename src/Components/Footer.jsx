import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  Globe,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300" style={{ fontFamily: "poppins, serif" }}>
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10 border-b border-gray-700">
        
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">आमच्याबद्दल</h2>
          <p className="text-sm leading-relaxed">
            राज्यातील खुल्या प्रवर्गातील आर्थिकदृष्ट्या दुर्बल घटकातील विद्यार्थी, युवक - युवती व इतर उमेदवार 
            इत्यादींचा विकास घडवण्यासाठी <strong>Academy of Maharashtra Research, Upliftment and Training (Amrut)</strong> 
            ‘अमृत’ अर्थात महाराष्ट्र संशोधन, उन्नती व प्रशिक्षण प्रबोधनी या स्वायत्त संस्थेची स्थापना 
            महाराष्ट्र शासनाने दिनांक 22 ऑगस्ट 2019 च्या शासन निर्णयाद्वारे केलेली आहे.
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">महत्वपूर्ण दुवे</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-400 transition">ई-बुक</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">परिपत्रक</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Feedback / अभिप्राय</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">RTI</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Govt. Resolutions</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">संपर्क माहिती</h2>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2"><Mail size={16}/> info@mahaamrut.org.in</li>
            <li className="flex items-center gap-2"><Phone size={16}/> 9730151450</li>
            <li className="flex items-center gap-2"><Globe size={16}/> www.mahaamrut.org.in</li>
            <li className="flex items-start gap-2">
              <MapPin size={16}/>
              <span>
                Academy Of Maharashtra Research, Upliftment & Training (Amrut),<br/>
                Maharaja Sayajirao Gaikwad Udyog Bhavan, Fifth Floor, Aundh, Pune 411067.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Social Icons */}
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-orange-400"><Facebook size={20}/></a>
          <a href="#" className="hover:text-orange-400"><Twitter size={20}/></a>
          <a href="#" className="hover:text-orange-400"><Instagram size={20}/></a>
          <a href="#" className="hover:text-orange-400"><Linkedin size={20}/></a>
          <a href="#" className="hover:text-orange-400"><Youtube size={20}/></a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400 text-center md:text-right">
          © Content By <span className="text-orange-400 font-semibold">Academy of Maharashtra Research, Upliftment & Training (Amrut)</span> | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

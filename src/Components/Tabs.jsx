import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import skyline from "/images/Indian_Monuments_PNG-removebg-preview.png"; // update path as needed

export default function YojanaSection() {
  const data = [
    { id: 1, name: "अमृत – MCED लघुउद्योजक, स्वयंरोजगार प्रोत्साहन व प्रशिक्षण योजना" },
    { id: 2, name: "अमृत – विविध स्पर्धा परीक्षा पायाभूत प्रशिक्षण कार्यक्रम" },
    { id: 3, name: "AIIMS, IIT, IIM, IIIT संस्थांमध्ये प्रवेश घेतलेल्या विद्यार्थ्यांना अर्थसहाय्य योजना" },
    {
      id: 4,
      title: "UPSC स्पर्धा परीक्षा",
      submenu: [
        {
          title: "अभियांत्रिकी सेवा",
          subdetails: [
            { name: "पूर्व परीक्षा उत्तीर्ण" },
            { name: "मुख्य परीक्षा उत्तीर्ण" }
          ]
        },
        {
          title: "नागरी सेवा",
          subdetails: [
            { name: "पूर्व परीक्षा उत्तीर्ण" },
            { name: "मुख्य परीक्षा उत्तीर्ण" }
          ]
        },
        {
          title: "वन सेवा",
          subdetails: [
            { name: "पूर्व परीक्षा उत्तीर्ण" },
            { name: "मुख्य परीक्षा उत्तीर्ण" }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "MPSC च्या मुख्य परीक्षा",
      submenu: [
        {
          title: "MPSC परीक्षा",
          subdetails: [
            { name: "अन्न व औषध प्रशासकीय सेवा मुख्य परीक्षा" },
            { name: "दिवाणी न्यायाधीश कनिष्ठ स्तर व न्याय दंडाधिकारी" },
            { name: "निरीक्षक वैधमापन शास्त्र मुख्य परीक्षा" },
            { name: "महाराष्ट्र अराजपत्रित गट-ब" },
            { name: "महाराष्ट्र कृषी सेवा मुख्य परीक्षा" },
            { name: "महाराष्ट्र तांत्रिक अभियंता सेवा मुख्य परीक्षा" },
            { name: "महाराष्ट्र राज्यपत्रित नागरी सेवा संयुक्त पूर्व परीक्षा" },
            { name: "महाराष्ट्र वन सेवा मुख्य परीक्षा" },
            { name: "महाराष्ट्र विद्युत अभियांत्रिकी सेवा मुख्य परीक्षा" },
            { name: "महाराष्ट्र विद्युत व यांत्रिकी अभियांत्रिकी सेवा मुख्य परीक्षा" },
            { name: "महाराष्ट्र स्थापत्य अभियांत्रिकी सेवा मुख्य परीक्षा" },
            { name: "राज्य सेवा मुख्य परीक्षा" }
          ]
        }
      ]
    },
    { id: 6, name: "शासकीय संगणक टंकलेखन व लघुलेखन परीक्षा (GCC-TBC)" },
    { id: 7, name: "कृषि उद्योग प्रशिक्षण योजना" },
    { id: 8, name: "स्वरोजगार प्रोत्साहन व प्रशिक्षण योजना" },
    { id: 9, name: "ड्रोन पायलट प्रशिक्षण योजना" },
    { id: 10, name: "अमृत - CIPET कौशल्य विकास प्रशिक्षण" },
    { id: 11, name: "अमृत - NIELIT कौशल्य विकास प्रशिक्षण" },
    { id: 12, name: "आर्थिक साक्षरता प्रशिक्षण योजना" },
    { id: 13, name: "अमृत सुवर्णिम प्रशिक्षण योजना" },
    { id: 14, name: "अमृत आयात-निर्यात प्रशिक्षण योजना" },
    { id: 15, name: "अमृत - बेकरी प्रशिक्षण योजना" },
    { id: 16, name: "तांत्रिक रोजगार प्रशिक्षण (IGTR) योजना" },
    { id: 17, name: "माहिती तंत्रज्ञान आणि इलेक्ट्रॉनिक्स तसेच उच्च कार्यक्षमता संगणक प्रशिक्षण (C-DAC)" },
    { id: 18, name: "अमृत - BHAU Incubation Program" },
    { id: 19, name: "अमृत - MSSU Incubation Program" },
    { id: 20, name: "अमृत - कलश (MKCL) अमृत सॉफ्ट स्किल व संगणक कौशल्य विकास योजना" },
    { id: 21, name: "वैक्तिक कर्ज व्याज परतावा योजना" },
    { id: 22, name: "अमृत - स्वयं शिक्षण प्रोत्साहन योजना" }
  ];

  const [selected, setSelected] = useState(null);
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (index) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-6 mt-10 mb-20">
      {/* Centered Title */}
      <h2 className="text-3xl font-bold text-center mb-6 border-b-4 border-orange-400 inline-block mx-auto pb-2 " style={{ fontFamily: "baloo, sans-serif" }}>
        योजना
      </h2>

      {/* Two Column Layout */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Left Panel */}
        <div>
          <ul
            className="
              space-y-2 
              overflow-y-auto 
              h-[300px] 
              pr-2 
              bg-white 
              rounded-xl 
              border 
              border-gray-200 
              shadow-sm 
              scrollbar-thin 
              scrollbar-thumb-orange-500 
              scrollbar-track-white 
              scrollbar-thumb-rounded-full
            "
          >
            {data.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  setSelected(item);
                  setOpenSubmenus({});
                }}
                className={`cursor-pointer hover:bg-orange-100 rounded-lg p-2 transition ${
                  selected?.id === item.id ? "bg-orange-200 font-semibold" : ""
                }`}
              >
                {item.name || item.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Panel */}
        <div className="md:col-span-2 relative rounded-2xl border border-gray-200 shadow-md bg-white h-[300px] overflow-hidden">
          {/* Gradient + Image */}
          <div className="absolute bottom-0 left-0 w-full h-[130px] pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent"></div>
            <img
              src={skyline}
              alt="skyline"
              className="absolute bottom-0 left-0 w-full object-cover opacity-20"
            />
          </div>

          {/* Foreground Content */}
          <div className="relative h-full flex flex-col">
            {selected ? (
              <>
                <div className="p-4 border-b">
                  <h3 className="text-xl text-orange-700 font-semibold">
                    {selected.name || selected.title}
                  </h3>
                </div>
                <div className="p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-white">
                  {selected.submenu ? (
                    selected.submenu.map((menu, idx) => (
                      <div key={idx} className="mb-3 border-b pb-2">
                        <div
                          className="flex justify-between items-center cursor-pointer"
                          onClick={() => toggleSubmenu(idx)}
                        >
                          <h4 className="font-semibold text-gray-800">{menu.title}</h4>
                          {openSubmenus[idx] ? (
                            <ChevronDown size={18} className="text-orange-600" />
                          ) : (
                            <ChevronRight size={18} className="text-orange-600" />
                          )}
                        </div>

                        {openSubmenus[idx] && (
                          <ul className="list-disc ml-6 mt-2 space-y-1">
                            {menu.subdetails.map((detail, subIdx) => (
                              <li
                                key={`${selected.id}-${subIdx}`}
                                className="text-gray-700 flex items-center"
                              >
                                <ChevronRight size={14} className="mr-1 text-orange-500" />
                                {detail.name}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-700 leading-relaxed">
                      या योजनेविषयी अधिक माहिती लवकरच उपलब्ध होईल.
                    </p>
                  )}
                </div>
              </>
            ) : (
              <div className="p-6 text-gray-500 text-center my-auto">
                कृपया डाव्या बाजूने योजना निवडा.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

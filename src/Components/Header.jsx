import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Menu, X, ChevronDown, Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Team members data
const teamMembers = [
    { name: 'राजेश कुमार', title: 'अध्यक्ष', image: '/images/HeaderSlider/1.png' },
    { name: 'संजय पाटील', title: 'उपाध्यक्ष', image: '/images/HeaderSlider/2.png' },
    { name: 'अमित शर्मा', title: 'सचिव', image: '/images/HeaderSlider/3.png' },
    { name: 'प्रकाश जोशी', title: 'कोषाध्यक्ष', image: '/images/HeaderSlider/4.png' },
    { name: 'विजय राठोड', title: 'सदस्य', image: '/images/HeaderSlider/5.png' }
];

const schemes = [
    { name: "अमृत – MCED लघुउद्योजक, स्वयंरोजगार प्रोत्साहन व प्रशिक्षण योजना", link: `/scheme/1` },
    { name: "अमृत – विविध स्पर्धा परीक्षा पायाभूत प्रशिक्षण कार्यक्रम", link: `/scheme/2` },
    { name: "AIIMS, IIT, IIM, IIIT संस्थांमध्ये प्रवेश घेतलेल्या विद्यार्थ्यांना अर्थसहाय्य योजना", link: `/scheme/3` },
    {
        title: "UPSC स्पर्धा परीक्षा",
        submenu: [
            {
                title: "अभियांत्रिकी सेवा",
                subdetails: [
                    { name: "पूर्व परीक्षा उत्तीर्ण", link: `/scheme/4` },
                    { name: "मुख्य परीक्षा उत्तीर्ण", link: `/scheme/5` }
                ]
            },
            {
                title: "नागरी सेवा",
                subdetails: [
                    { name: "पूर्व परीक्षा उत्तीर्ण", link: `/scheme/6` },
                    { name: "मुख्य परीक्षा उत्तीर्ण", link: `/scheme/7` }
                ]
            },
            {
                title: "वन सेवा",
                subdetails: [
                    { name: "पूर्व परीक्षा उत्तीर्ण", link: `/scheme/8` },
                    { name: "मुख्य परीक्षा उत्तीर्ण", link: `/scheme/9` }
                ]
            }
        ]
    },
    { name: "शासकीय संगणक टंकलेखन व लघुलेखन परीक्षा (GCC-TBC)", link: `/scheme/10` },
    { name: "कृषि उद्योग प्रशिक्षण योजना", link: `/scheme/11` },
    { name: "स्वरोजगार प्रोत्साहन व प्रशिक्षण योजना", link: `/scheme/12` },
    { name: "ड्रोन पायलट प्रशिक्षण योजना", link: `/scheme/13` },
    { name: "अमृत - CIPET कौशल्य विकास प्रशिक्षण", link: `/scheme/14` },
    { name: "अमृत - NIELIT कौशल्य विकास प्रशिक्षण", link: `/scheme/15` },
    { name: "आर्थिक साक्षरता प्रशिक्षण योजना", link: `/scheme/16` },
    { name: "अमृत सुवर्णिम प्रशिक्षण योजना", link: `/scheme/17` },
    { name: "अमृत आयात-निर्यात प्रशिक्षण योजना", link: `/scheme/18` },
    { name: "अमृत - बेकरी प्रशिक्षण योजना", link: `/scheme/19` },
    { name: "तांत्रिक रोजगार प्रशिक्षण (IGTR) योजना", link: `/scheme/20` },
    { name: "माहिती तंत्रज्ञान आणि इलेक्ट्रॉनिक्स तसेच उच्च कार्यक्षमता संगणक प्रशिक्षण (C-DAC)", link: `/scheme/21` },
    { name: "अमृत - BHAU Incubation Program", link: `/scheme/22` },
    { name: "अमृत - MSSU Incubation Program", link: `/scheme/23` },
    { name: "अमृत - कलश (MKCL) अमृत सॉफ्ट स्किल व संगणक कौशल्य विकास योजना", link: `/scheme/24` },
    { name: "वैक्तिक कर्ज व्याज परतावा योजना", link: `/scheme/25` },
    { name: "अमृत - स्वयं शिक्षण प्रोत्साहन योजना", link: `/scheme/26` },
];

export default function Header() {
    const [openMenu, setOpenMenu] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState({
        menuIndex: null,
        submenuIndex: null,
        nestedIndex: null
    });
    const [searchQuery, setSearchQuery] = useState('');

    function isSubMenuItem(item) {
        return typeof item === 'object' && 'title' in item && 'submenu' in item;
    }

    function isSubDetail(item) {
        return typeof item === 'object' && 'title' in item && 'subdetails' in item;
    }

    const handleMobileMenuClick = (menuIndex, hasSubmenus) => {
        if (hasSubmenus) {
            setActiveSubmenu(prev => ({
                menuIndex: prev.menuIndex === menuIndex ? null : menuIndex,
                submenuIndex: null,
                nestedIndex: null
            }));
        } else {
            setMobileMenuOpen(false);
        }
    };

    const handleSubmenuClick = (menuIndex, submenuIndex, hasNestedMenu) => {
        if (hasNestedMenu) {
            setActiveSubmenu(prev => ({
                menuIndex,
                submenuIndex: prev.submenuIndex === submenuIndex ? null : submenuIndex,
                nestedIndex: null
            }));
        }
    };

    const handleNestedMenuClick = (menuIndex, submenuIndex, nestedIndex) => {
        setActiveSubmenu(prev => ({
            menuIndex,
            submenuIndex,
            nestedIndex: prev.nestedIndex === nestedIndex ? null : nestedIndex
        }));
    };

    const renderMobileMenu = () => (
        <div className="lg:hidden">
            <div className="flex items-center justify-between px-4 py-3 w-full ">
                <span className="text-[#ff671f] text-base">मेनू</span>
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="text-[#ff671f] p-2 hover:bg-white/10 rounded-md transition-colors"
                    aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white border-t border-orange-200"
                    >
                        <div className="divide-y divide-orange-200">
                            {menuStructure.map((menu, idx) => (
                                <div key={idx} className="relative">
                                    <div className="flex items-center">
                                        {menu.link && !menu.link.startsWith('http') ? (
                                            <Link
                                                to={menu.link}
                                                className="flex-1 px-4 py-3 text-orange-600 hover:bg-orange-50 transition-colors"
                                                onClick={() => !menu.submenus && setMobileMenuOpen(false)}
                                            >
                                                {menu.name}
                                            </Link>
                                        ) : (
                                            <a
                                                href={menu.link || '#'}
                                                className="flex-1 px-4 py-3 text-orange-600 hover:bg-orange-50 transition-colors"
                                                target={menu.link?.startsWith('http') ? "_blank" : undefined}
                                                rel={menu.link?.startsWith('http') ? "noopener noreferrer" : undefined}
                                            >
                                                {menu.name}
                                            </a>
                                        )}
                                        {menu.submenus && (
                                            <button
                                                onClick={() => handleMobileMenuClick(idx, true)}
                                                className="px-4 py-3 text-orange-600 hover:bg-orange-50 transition-colors"
                                            >
                                                <motion.span
                                                    animate={{ rotate: activeSubmenu.menuIndex === idx ? 180 : 0 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <ChevronDown size={20} />
                                                </motion.span>
                                            </button>
                                        )}
                                    </div>

                                    {/* First level submenu */}
                                    <AnimatePresence>
                                        {menu.submenus && activeSubmenu.menuIndex === idx && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="bg-orange-50"
                                            >
                                                {menu.submenus.map((submenu, subIdx) => {
                                                    const isNested = isSubMenuItem(submenu);
                                                    const displayText = isNested ? submenu.title : submenu.name;
                                                    const link = !isNested ? submenu.link : undefined;

                                                    return (
                                                        <div key={subIdx} className="relative">
                                                            <div className="flex items-center">
                                                                {link ? (
                                                                    <Link
                                                                        to={link}
                                                                        className="flex-1 px-6 py-3 text-orange-600 hover:bg-orange-100 transition-colors text-sm"
                                                                        onClick={() => setMobileMenuOpen(false)}
                                                                    >
                                                                        {displayText}
                                                                    </Link>
                                                                ) : (
                                                                    <button
                                                                        className="flex-1 px-6 py-3 text-orange-600 hover:bg-orange-100 transition-colors text-sm text-left"
                                                                        onClick={() => handleSubmenuClick(idx, subIdx, isNested)}
                                                                    >
                                                                        {displayText}
                                                                    </button>
                                                                )}
                                                                {isNested && (
                                                                    <button
                                                                        onClick={() => handleSubmenuClick(idx, subIdx, true)}
                                                                        className="px-4 py-3 text-orange-600 hover:bg-orange-100 transition-colors"
                                                                    >
                                                                        <motion.span
                                                                            animate={{
                                                                                rotate: activeSubmenu.submenuIndex === subIdx ? 180 : 0
                                                                            }}
                                                                            transition={{ duration: 0.2 }}
                                                                        >
                                                                            <ChevronDown size={16} />
                                                                        </motion.span>
                                                                    </button>
                                                                )}
                                                            </div>

                                                            {/* Second level submenu */}
                                                            <AnimatePresence>
                                                                {isNested && activeSubmenu.submenuIndex === subIdx && (
                                                                    <motion.div
                                                                        initial={{ opacity: 0, height: 0 }}
                                                                        animate={{ opacity: 1, height: 'auto' }}
                                                                        exit={{ opacity: 0, height: 0 }}
                                                                        transition={{ duration: 0.2 }}
                                                                        className="bg-orange-100"
                                                                    >
                                                                        {submenu.submenu.map((nestedItem, nestedIdx) => {
                                                                            const hasSubdetails = isSubDetail(nestedItem);
                                                                            const nestedText = hasSubdetails ? nestedItem.title : nestedItem.name;
                                                                            const nestedLink = !hasSubdetails ? nestedItem.link : undefined;

                                                                            return (
                                                                                <div key={nestedIdx} className="relative">
                                                                                    <div className="flex items-center">
                                                                                        {nestedLink ? (
                                                                                            <Link
                                                                                                to={nestedLink}
                                                                                                className="flex-1 px-8 py-3 text-orange-600 hover:bg-orange-200 transition-colors text-sm"
                                                                                                onClick={() => setMobileMenuOpen(false)}
                                                                                            >
                                                                                                {nestedText}
                                                                                            </Link>
                                                                                        ) : (
                                                                                            <button
                                                                                                className="flex-1 px-8 py-3 text-orange-600 hover:bg-orange-200 transition-colors text-sm text-left"
                                                                                                onClick={() => handleNestedMenuClick(idx, subIdx, nestedIdx)}
                                                                                            >
                                                                                                {nestedText}
                                                                                            </button>
                                                                                        )}
                                                                                        {hasSubdetails && (
                                                                                            <button
                                                                                                onClick={() => handleNestedMenuClick(idx, subIdx, nestedIdx)}
                                                                                                className="px-4 py-3 text-orange-600 hover:bg-orange-200 transition-colors"
                                                                                            >
                                                                                                <motion.span
                                                                                                    animate={{
                                                                                                        rotate: activeSubmenu.nestedIndex === nestedIdx ? 180 : 0
                                                                                                    }}
                                                                                                    transition={{ duration: 0.2 }}
                                                                                                >
                                                                                                    <ChevronDown size={16} />
                                                                                                </motion.span>
                                                                                            </button>
                                                                                        )}
                                                                                    </div>

                                                                                    {/* Third level submenu */}
                                                                                    <AnimatePresence>
                                                                                        {hasSubdetails && activeSubmenu.nestedIndex === nestedIdx && (
                                                                                            <motion.div
                                                                                                initial={{ opacity: 0, height: 0 }}
                                                                                                animate={{ opacity: 1, height: 'auto' }}
                                                                                                exit={{ opacity: 0, height: 0 }}
                                                                                                transition={{ duration: 0.2 }}
                                                                                                className="bg-orange-200"
                                                                                            >
                                                                                                {nestedItem.subdetails.map((detail, detailIdx) => (
                                                                                                    <Link
                                                                                                        key={detailIdx}
                                                                                                        to={detail.link}
                                                                                                        className="block px-10 py-3 text-orange-600 hover:bg-orange-300 transition-colors text-sm"
                                                                                                        onClick={() => setMobileMenuOpen(false)}
                                                                                                    >
                                                                                                        {detail.name}
                                                                                                    </Link>
                                                                                                ))}
                                                                                            </motion.div>
                                                                                        )}
                                                                                    </AnimatePresence>
                                                                                </div>
                                                                            );
                                                                        })}
                                                                    </motion.div>
                                                                )}
                                                            </AnimatePresence>
                                                        </div>
                                                    );
                                                })}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );

    // Main menu structure
    const menuStructure = [
        { name: 'मुख्य पृष्ठ', link: '/' },
        { name: 'परिपत्रक', link: '/Circulars' },
        { name: 'गॅलरी', link: '/Gallery' },
        { name: 'योजना', submenus: schemes },
        { name: 'वार्ता', link: '/News' },
        { name: 'अमृत दुर्गोत्सव २०२५', link: 'https://www.durgotsav.com/' },
        { name: 'अमृत महाराष्ट्र', link: 'https://amrutmaharashtra.org/' },
        { name: 'अमृत पथ', link: 'https://amrutpeth.com/' },
        { name: 'लाभार्थी', link: '/Beneficiaries' },
        { name: 'ई-बुक', link: '/Book' },
        { name: 'संपर्क साधा', link: '/Contact' }
    ];

    // Framer motion variants for dropdowns
    const dropdownVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.25,
                ease: [0.4, 0, 0.2, 1]
            }
        },
        exit: {
            opacity: 0, y: -8,
            transition: {
                duration: 0.2,
                ease: [0.4, 0, 1, 1]
            }
        }
    };

    return (
        <div className="bg-white">
            {/* Sub Header - Made static */}
            <div className="bg-white z-50">
                <div className="max-w-7xl mx-auto px-4 py-3">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        {/* Logo Section */}
                        <div className="flex items-center gap-3 justify-center md:justify-start">
                            <div className="flex items-center justify-center shadow-lg">
                                <h1 className="text-[#ff671f] font-bold text-xl md:text-3xl font-playfair">AMRUT</h1>
                            </div>
                            <div className='text-center md:text-left'>
                                <h2 className="text-sm md:text-lg font-bold text-orange-600" style={{ fontFamily: 'baloo, sans-serif' }}>
                                    महाराष्ट्र संशोधन, उन्नती व प्रशिक्षण प्रवोधिनी (अमृत)
                                </h2>
                                <p className="text-[10px] md:text-xs text-black font-playfair">ACADEMY OF MAHARASHTRA RESEARCH, UPLIFTMENT AND TRAINING (AMRUT)</p>
                            </div>
                        </div>

                        {/* Team Members Section */}
                        <div className="flex items-center gap-2 md:gap-6 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
                            {teamMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center gap-1 md:gap-2 min-w-[70px] md:min-w-[80px] group cursor-pointer"
                                >
                                    {/* Circle Image */}
                                    <div className="relative">
                                        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 overflow-hidden">
                                            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                        </div>
                                        {/* Online indicator */}
                                        <div className="absolute bottom-0 right-0 w-2 h-2 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-white"></div>
                                    </div>

                                    {/* Name and Title */}
                                    <div className="text-center">
                                        <p className="text-[10px] md:text-sm font-semibold text-[#ff671f] whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                            {member.name}
                                        </p>
                                        <p className="text-[8px] md:text-xs text-[600] text-black font-medium">
                                            {member.title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation - Made static */}
            <nav 
                className="bg-white z-40 border-b border-orange-100"
                style={{ fontFamily: 'poppins, serif' }}
            >
                <div className="bg-white">
                    <div className="max-w-12xl text-sm mx-auto flex justify-between items-center">
                        {/* Desktop Menu */}
                        <ul className="hidden lg:flex flex-wrap">
                            {menuStructure.map((menu, idx) => (
                                <li
                                    key={idx}
                                    className="relative group/menu"
                                    onMouseEnter={() => setOpenMenu(idx)}
                                    onMouseLeave={() => setOpenMenu(null)}
                                >
                                    {menu.link && !menu.link.startsWith('http') ? (
                                        <Link
                                            to={menu.link}
                                            className="flex items-center gap-1 px-4 py-3 transition-colors text-base text-[#ff671f] hover:bg-orange-50"
                                        >
                                            {menu.name}
                                            {menu.submenus && (
                                                <motion.span
                                                    animate={{ rotate: openMenu === idx ? 180 : 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="text-[#ff671f]"
                                                >
                                                    <ChevronDown size={16} />
                                                </motion.span>
                                            )}
                                        </Link>
                                    ) : (
                                        <a
                                            href={menu.link}
                                            className="flex items-center gap-1 px-4 py-3 transition-colors text-base text-[#ff671f] hover:bg-orange-50"
                                            target={menu.link?.startsWith('http') ? "_blank" : undefined}
                                            rel={menu.link?.startsWith('http') ? "noopener noreferrer" : undefined}
                                        >
                                            {menu.name}
                                            {menu.submenus && (
                                                <motion.span
                                                    animate={{ rotate: openMenu === idx ? 180 : 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="text-[#ff671f]"
                                                >
                                                    <ChevronDown size={16} />
                                                </motion.span>
                                            )}
                                        </a>
                                    )}

                                    {/* Dropdown wrapper */}
                                    <div className="absolute left-0 top-full">
                                        {/* Dropdown (1st Level) */}
                                        <AnimatePresence>
                                            {menu.submenus && openMenu === idx && (
                                                <motion.div
                                                    variants={dropdownVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className="absolute left-0 w-96 bg-black/80 backdrop-blur-sm shadow-xl z-50 rounded-sm border border-orange-200"
                                                    style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}
                                                >
                                                    {menu.submenus.map((submenu, subIdx) => {
                                                        const isNested = isSubMenuItem(submenu);
                                                        const displayText = isNested ? submenu.title : submenu.name;
                                                        const link = !isNested ? submenu.link : undefined;

                                                        return (
                                                            <div
                                                                key={subIdx}
                                                                className="relative group/submenu"
                                                            >
                                                                {link ? (
                                                                    <Link
                                                                        to={link}
                                                                        className="block px-5 py-3 text-[#ff671f] hover:bg-white/10 transition-colors flex justify-between items-center break-words whitespace-normal border-b border-white/20 text-sm"
                                                                    >
                                                                        <span className="pr-2">{displayText}</span>
                                                                        {isNested && submenu.submenu && (
                                                                            <ChevronDown size={16} className="transform -rotate-90 flex-shrink-0 text-[#ff671f]" />
                                                                        )}
                                                                    </Link>
                                                                ) : (
                                                                    <div
                                                                        className="block px-5 py-3 text-[#ff671f] hover:bg-white/10 transition-colors flex justify-between items-center break-words whitespace-normal border-b border-white/20 text-sm cursor-pointer"
                                                                    >
                                                                        <span className="pr-2">{displayText}</span>
                                                                        {isNested && submenu.submenu && (
                                                                            <ChevronDown size={16} className="transform -rotate-90 flex-shrink-0 text-[#ff671f]" />
                                                                        )}
                                                                    </div>
                                                                )}

                                                                {/* Nested submenu */}
                                                                {isNested && submenu.submenu && (
                                                                    <div
                                                                        className="absolute left-full top-0 w-96 bg-black/80 shadow-xl opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200 rounded-sm border border-orange-200"
                                                                        style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}
                                                                    >
                                                                        {submenu.submenu.map((nestedItem, nestedIdx) => {
                                                                            const hasSubdetails = isSubDetail(nestedItem);
                                                                            const nestedText = hasSubdetails ? nestedItem.title : nestedItem.name;
                                                                            const nestedLink = !hasSubdetails ? nestedItem.link : undefined;

                                                                            return (
                                                                                <div
                                                                                    key={nestedIdx}
                                                                                    className="relative group/nested"
                                                                                >
                                                                                    {nestedLink ? (
                                                                                        <Link
                                                                                            to={nestedLink}
                                                                                            className="block px-5 py-3 text-[#ff671f] hover:bg-white/10 transition-colors flex justify-between items-center break-words whitespace-normal border-b border-white/20 text-sm"
                                                                                        >
                                                                                            <span className="pr-2">
                                                                                                {nestedText}
                                                                                            </span>
                                                                                            {hasSubdetails && (
                                                                                                <ChevronDown size={16} className="transform -rotate-90 flex-shrink-0 text-[#ff671f]" />
                                                                                            )}
                                                                                        </Link>
                                                                                    ) : (
                                                                                        <div
                                                                                            className="block px-5 py-3 text-[#ff671f] hover:bg-white/10 transition-colors flex justify-between items-center break-words whitespace-normal border-b border-white/20 text-sm cursor-pointer"
                                                                                        >
                                                                                            <span className="pr-2">
                                                                                                {nestedText}
                                                                                            </span>
                                                                                            {hasSubdetails && (
                                                                                                <ChevronDown size={16} className="transform -rotate-90 flex-shrink-0 text-[#ff671f]" />
                                                                                            )}
                                                                                        </div>
                                                                                    )}

                                                                                    {/* Subdetails level */}
                                                                                    {hasSubdetails && (
                                                                                        <div
                                                                                            className="absolute left-full top-0 w-96 bg-black/80 shadow-xl opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200 rounded-sm border border-orange-200"
                                                                                            style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}
                                                                                        >
                                                                                            {nestedItem.subdetails.map((detail, detailIdx) => (
                                                                                                <Link
                                                                                                    key={detailIdx}
                                                                                                    to={detail.link}
                                                                                                    className="block px-5 py-3 text-[#ff671f] hover:bg-white/10 transition-colors break-words whitespace-normal text-sm border-b border-white/20"
                                                                                                >
                                                                                                    {detail.name}
                                                                                                </Link>
                                                                                            ))}
                                                                                        </div>
                                                                                    )}
                                                                                </div>
                                                                            );
                                                                        })}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        );
                                                    })}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile Menu */}
                        {renderMobileMenu()}
                    </div>
                </div>
            </nav>
        </div>
    );
}
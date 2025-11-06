export default function AmrutBanner() {
    return (
      <section
        className="relative w-screen  h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('/images/1000_F_581566986_vjGXzCbNhpH5yvsNoN0dhZoG9mcVOnBK.jpg')`,
        }}
      >
        {/* Top-to-Bottom Gradient Overlay (Dark → Light) */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/90 via-orange-600/70 to-orange-300/40"></div>
  
        {/* Centered Marathi Heading */}
        <h1 className="relative z-10 text-center text-white font-bold text-2xl md:text-3xl lg:text-4xl leading-tight drop-shadow-xl px-6" style={{ fontFamily: 'baloo, serif' }}>
          महाराष्ट्र संशोधन,
           उन्नती व प्रशिक्षण प्रवोधिनी (अमृत)
        </h1>
      </section>
    );
  }
  
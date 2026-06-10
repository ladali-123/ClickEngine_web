import { useEffect, useRef } from "react";

import home from '../assets/home.png'

const SERVICES = [
  { icon: "🌐", label: "Website Development" },
  { icon: "📱", label: "App Development" },
  { icon: "📊", label: "MIS Solutions" },
  { icon: "📣", label: "Social Media Marketing" },
];

export default function Hero() {
  const floatRef = useRef(null);

  useEffect(() => {
    let frame;
    let start = null;
    const animate = (ts) => {
      if (!start) start = ts;
      const t = (ts - start) / 1000;
      if (floatRef.current) {
        floatRef.current.style.transform = `translateY(${Math.sin(t * 0.7) * 8}px)`;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="min-h-screen bg-[linear-gradient(135deg,#e8f4ff_0%,#f0f6ff_60%,#fff_100%)] md:mt-0 mt-10 flex flex-col md:flex-row items-center py-16 md:py-[110px] px-5 sm:px-[7%] pb-12 md:pb-[60px] relative overflow-hidden gap-8 md:gap-[6%]">
      {/* BG grid & decorative circles – unchanged */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(30,144,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(30,144,255,0.03)_1px,transparent_1px)] bg-[length:60px_60px]" />
      <div className="absolute -top-[100px] -left-[100px] w-[400px] h-[400px] rounded-full bg-[rgba(30,144,255,0.06)] pointer-events-none" />
      <div className="absolute -bottom-10 right-[28%] w-[240px] h-[240px] rounded-full bg-[rgba(255,102,0,0.04)] pointer-events-none" />

      {/* ── LEFT CONTENT ── */}
      <div className="w-full md:flex-[0_0_48%] z-[2] text-left">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-[#c8dff7] rounded-full py-1 px-4 pl-1.5 mb-6 shadow-[0_2px_10px_rgba(30,144,255,0.08)]">
          <span className="bg-gradient-to-br from-[#1e90ff] to-[#ff6600] rounded-full py-[3px] px-[10px] text-[10px] text-white font-bold tracking-wide">
            NEW
          </span>
          <span className="text-xs text-[#4a6a8a] font-semibold">Digital Marketing Agency — India</span>
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(1.9rem,7vw,3rem)] md:text-[clamp(1.9rem,3.2vw,3rem)] font-bold leading-[1.45] text-[#0d1f3c] mb-5 tracking-tighter font-['Segoe_UI',sans-serif]">
          Start With A{" "}
          <span className="bg-gradient-to-r from-[#1e90ff] via-[#1e90ff] to-[#ff6600] bg-clip-text text-transparent">
            Digital Strategy
          </span>{" "}
          That Actually Works.
        </h1>

        <p className="text-[15px] text-[#4a6a8a] leading-relaxed mb-8 max-w-full md:max-w-[440px] font-['Segoe_UI',sans-serif] font-normal">
          We help businesses grow online through result-driven web solutions, mobile apps, data systems, and powerful marketing campaigns.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 items-center mb-9">
          <button
            className="bg-gradient-to-br from-[#1e90ff] to-[#0055cc] border-none
             text-white py-3 px-7 rounded-lg font-semibold text-sm cursor-pointer 
             font-['Segoe_UI',sans-serif] tracking-wide shadow-[0_4px_18px_rgba(30,144,255,0.32)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_26px_rgba(30,144,255,0.4)]"
          >
            Start Your Project
          </button>

          <button
            className="bg-white border-[1.5px] border-[#c8dff7] text-[#1a3a5c] py-[11px] px-6 rounded-lg 
            font-semibold text-sm cursor-pointer font-['Segoe_UI',sans-serif] flex items-center gap-1.5 shadow-[0_2px_10px_rgba(30,144,255,0.06)] transition-all duration-200 hover:border-[#1e90ff] hover:text-[#1e90ff]"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Quotation
          </button>
        </div>

        {/* Trust line */}
        <div className="inline-flex items-center gap-2.5 bg-white border border-[#c8dff7] rounded-full py-[7px] px-[18px] shadow-[0_2px_10px_rgba(30,144,255,0.07)]">
          <span className="w-2 h-2 rounded-full bg-[#1e90ff] inline-block" />
          <span className="text-[13px] text-[#4a6a8a] font-['Segoe_UI',sans-serif] font-semibold">
            100+ satisfied clients across India
          </span>
        </div>
      </div>

      {/* ── RIGHT IMAGE (FLOATING + CARDS) ── */}
      <div className="w-full md:flex-[0_0_46%] z-[2] relative mt-8 md:mt-0">
        {/* Glow effect */}
        <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-[rgba(30,144,255,0.12)] to-[rgba(255,102,0,0.06)] blur-[20px] z-0" />

        {/* Image wrapper with floating animation */}
        <div ref={floatRef} className="relative z-[1]">
          <div className="rounded-[18px] overflow-hidden border-[1.5px] border-[rgba(30,144,255,0.18)] shadow-[0_20px_56px_rgba(30,144,255,0.14),0_4px_14px_rgba(0,0,0,0.06)]">
            <img
              src={home}
              alt="Digital Marketing"
              className="w-full block rounded-[18px]"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[rgba(13,31,60,0.55)] rounded-[18px]" />
          </div>

          {/* Service pills — bottom of image */}
          <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 flex gap-1.5 flex-wrap">
            {SERVICES.map((s) => (
              <div
                key={s.label}
                className="bg-white/90 backdrop-blur-md rounded-full py-1 px-2.5 sm:px-3 text-[9px] sm:text-[11px] font-bold
                 text-[#0d1f3c] font-['Segoe_UI',sans-serif] flex items-center gap-1 border border-[rgba(30,144,255,0.12)] shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
              >
                <span className="text-[10px] sm:text-xs">{s.icon}</span>
                {s.label}
              </div>
            ))}
          </div>

          {/* Top right container: ClickEngine badge + Revenue Card (stacked) */}
          <div className="absolute top-2 right-2 md:top-3.5 md:right-3.5 flex flex-col items-end gap-2 z-10">
            {/* ClickEngine badge */}
            <div className="bg-gradient-to-br from-[#1e90ff] to-[#ff6600] rounded-full py-1 px-2.5 sm:px-3.5 text-[9px] sm:text-[11px] text-white font-bold font-['Segoe_UI',sans-serif] tracking-wide shadow-[0_2px_10px_rgba(30,144,255,0.3)]">
              ✦ ClickEngine
            </div>

            {/* Revenue Growth Card */}
            <div className="bg-white rounded-xl py-1.5 sm:py-2.5 px-2 sm:px-4 shadow-[0_6px_24px_rgba(30,144,255,0.14)] flex items-center gap-1.5 sm:gap-2.5 border border-[rgba(30,144,255,0.12)] animate-[floatCard_3s_ease-in-out_infinite]">
              <div className="w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] rounded-lg bg-gradient-to-br from-[#1e90ff] to-[#0055cc] flex items-center justify-center text-sm sm:text-base">
                📈
              </div>
              <div>
                <div className="text-[10px] sm:text-xs font-bold text-[#0d1f3c] font-['Segoe_UI',sans-serif] whitespace-nowrap">Revenue Growth</div>
                <div className="text-[8px] sm:text-[10px] text-[#4a6a8a] font-['Segoe_UI',sans-serif] whitespace-nowrap">+240% avg for clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        * { box-sizing: border-box; }

        /* Fine-tune absolute elements on very small devices (<=480px) */
        @media (max-width: 480px) {
          .absolute.top-2.right-2 {
            transform: scale(0.9);
            transform-origin: top right;
          }
          .absolute.bottom-2.left-2.right-2 {
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
}
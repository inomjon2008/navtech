
import { memo } from "react";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";

import site1 from "../assets/images/logo.jpg";
import site2 from "../assets/images/logo.jpg";
import site3 from "../assets/images/logo.jpg";
import site4 from "../assets/images/logo.jpg";
import site5 from "../assets/images/logo.jpg";

const Hero = () => {
  const websites = [site1, site2, site3, site4, site5];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-orange-100/50 blur-[130px]" />

      <div className="mx-auto flex min-h-screen max-w-[1500px] items-center px-6 py-16 sm:px-10 lg:px-14">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[70%_30%]">
          {/* =====================================================
              LEFT — CONTENT
          ====================================================== */}

          <div className="relative z-10">
            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-600 shadow-sm">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-white">
                <Sparkles size={11} />
              </span>

              Web Studio
            </div>

            {/* Heading */}
            <h1 className="max-w-5xl text-[clamp(3.2rem,6vw,6.8rem)] font-semibold leading-[0.93] tracking-[-0.06em] text-gray-950">
              Biznesingizni
              <br />

              <span className="text-orange-500">raqamli olamga</span>
              <br />

              olib chiqamiz.
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
              Biznes, kompaniya va shaxsiy loyihalar uchun zamonaviy
              web-saytlar yaratamiz. G‘oyangizni tushunamiz, uni chiroyli
              dizayn va zamonaviy texnologiyalar yordamida real mahsulotga
              aylantiramiz.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gray-950 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:shadow-xl hover:shadow-orange-500/20"
              >
                Loyihani boshlash

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={15} />
                </span>
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-full border border-gray-200 px-7 py-4 text-sm font-semibold text-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
              >
                Portfolio
              </a>
            </div>

            {/* Features */}
        
          </div>

          {/* =====================================================
              RIGHT — MOVING WEBSITE PREVIEWS
          ====================================================== */}

          <div className="relative hidden h-[650px] overflow-hidden lg:block">
            {/* Top fade */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-28 bg-gradient-to-b from-white via-white/80 to-transparent" />

            {/* Bottom fade */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-t from-white via-white/80 to-transparent" />

            {/* Vertical line */}
            <div className="absolute left-0 top-0 h-full w-px bg-gray-100" />

            {/* Moving column */}
            <div className="website-marquee absolute left-5 top-0 flex w-[calc(100%-20px)] flex-col gap-5">
              {/* FIRST SET */}
              {websites.map((image, index) => (
                <div
                  key={`first-${index}`}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-200/40"
                >
                  <img
                    src={image}
                    alt={`Website ${index + 1}`}
                    className="block h-[180px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover */}
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-xs font-medium text-white">
                      Web Project 0{index + 1}
                    </span>
                  </div>
                </div>
              ))}

              {/* SECOND SET — seamless loop */}
              {websites.map((image, index) => (
                <div
                  key={`second-${index}`}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-200/40"
                >
                  <img
                    src={image}
                    alt={`Website ${index + 1}`}
                    className="block h-[180px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-xs font-medium text-white">
                      Web Project 0{index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MARQUEE ANIMATION
      ====================================================== */}

      <style>{`
        .website-marquee {
          animation: websiteScroll 28s linear infinite;
        }

        .website-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes websiteScroll {
          0% {
            transform: translateY(0);
          }

          100% {
            transform: translateY(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .website-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default memo(Hero);


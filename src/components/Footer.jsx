import { memo } from "react";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#f7f7f5] text-neutral-950">
      <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">

        {/* TOP */}
        <div className="border-t border-neutral-300 py-16 sm:py-20 lg:py-24">

          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

            {/* BRAND */}
            <div>
              <h2 className="text-4xl font-medium tracking-[-0.06em] sm:text-5xl">
                Sizning g‘oyangiz.
                <br />
                Bizning ishimiz.
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-6 text-neutral-500">
                Zamonaviy, tezkor va biznesingizga mos
                web-saytlarni ishlab chiqamiz.
              </p>
            </div>

            {/* NAVIGATION */}
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                Navigatsiya
              </p>

              <div className="flex flex-col gap-3 text-sm">
                <a
                  href="#home"
                  className="w-fit transition-colors hover:text-neutral-500"
                >
                  Bosh sahifa
                </a>

                <a
                  href="#services"
                  className="w-fit transition-colors hover:text-neutral-500"
                >
                  Xizmatlar
                </a>

                <a
                  href="#portfolio"
                  className="w-fit transition-colors hover:text-neutral-500"
                >
                  Portfolio
                </a>

                <a
                  href="#pricing"
                  className="w-fit transition-colors hover:text-neutral-500"
                >
                  Narxlar
                </a>
              </div>
            </div>

            {/* SOCIAL */}
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                Ijtimoiy tarmoqlar
              </p>

              <div className="flex flex-col gap-3 text-sm">
                <a
                  href="#"
                  className="flex w-fit items-center gap-2 transition-colors hover:text-neutral-500"
                >
                  Telegram
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href="#"
                  className="flex w-fit items-center gap-2 transition-colors hover:text-neutral-500"
                >
                  Instagram
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href="#"
                  className="flex w-fit items-center gap-2 transition-colors hover:text-neutral-500"
                >
                  LinkedIn
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                Bog‘lanish
              </p>

              <a
                href="tel:+998934370180"
                className="text-lg font-medium tracking-[-0.02em] transition-colors hover:text-neutral-500"
              >
                +998 93 437 0180
              </a>

              <p className="mt-3 text-sm text-neutral-500">
                Navoiy, Uzbekistan
              </p>
            </div>

          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-5 border-t border-neutral-300 py-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>

          <a
            href="#home"
            className="group flex items-center gap-2 text-xs text-neutral-500 transition-colors hover:text-neutral-950"
          >
            Yuqoriga
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-300 transition-transform duration-300 group-hover:-translate-y-1">
              <ArrowUpRight size={13} />
            </span>
          </a>

        </div>

      </div>
    </footer>
  );
};

export default memo(Footer);